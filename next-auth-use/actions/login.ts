"use server";

import * as z from "zod";
import { LoginSchema } from "@/schemas";

// should mark use server to NOT bundle it with the client code
// Equivalent of and API route

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields" };
  }

  return { success: "Email sent!" };
};
