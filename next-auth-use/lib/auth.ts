import { auth } from "@/auth";

/**
 * Used for server components
 * Anything which is server-side
 * @returns
 */

export const currentUser = async () => {
  const session = await auth();

  return session?.user;
};

/**
 * Used for server components
 * Anything which is server-side
 * @returns
 */
export const currentRole = async () => {
  const session = await auth();
  return session?.user?.role;
};
