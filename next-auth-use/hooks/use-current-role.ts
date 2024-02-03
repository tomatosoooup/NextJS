import { useSession } from "next-auth/react";

/**
 * Used for client components
 * @returns
 */

export const useCurrentRole = () => {
  const session = useSession();
  return session?.data?.user?.role;
};
