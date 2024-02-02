import NextAuth, { DefaultSession, Session } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";

import { getUserById } from "./data/user";
import { db } from "./lib/db";
import authConfig from "@/auth.config";
import { JWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      role: "ADMIN" | "USER";
    } & DefaultSession["user"];
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    role?: "ADMIN" | "USER";
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credintials") return true;

      const existingUser = await getUserById(user.id as string);

      // Prevent sign in without email verified
      if (!existingUser || !existingUser?.emailVerified) {
        return false;
      }

      // TODO: Add 2FAS check
      return true;
    },
    async session({ token, session }: { session: Session; token?: JWT }) {
      console.log({ sessionToken: token });
      if (token?.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token?.role && session.user) {
        session.user.role = token.role;
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;

      token.role = existingUser.role;

      return token;
    },
  },
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt" },
  ...authConfig,
});

// 3:20:40
