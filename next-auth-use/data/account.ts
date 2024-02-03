import { db } from "@/lib/db";

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await db.user.findFirst({
      where: { id: userId },
    });
    return account;
  } catch (error) {
    return null;
  }
};
