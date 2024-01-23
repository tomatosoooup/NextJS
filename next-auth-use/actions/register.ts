"use server";

import * as z from "zod";
import { RegisterSchema } from "@/schemas";

// should mark use server to NOT bundle it with the client code
// Equivalent of and API route

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedFields = RegisterSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Email sent!" };
};
