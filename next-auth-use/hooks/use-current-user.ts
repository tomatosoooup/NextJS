import { useSession } from "next-auth/react";

/**
 * Used for client components
 * @returns
 */

export const useCurrentUser = () => {
  const session = useSession();
  return session?.data?.user;
};
