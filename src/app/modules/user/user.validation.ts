import z from "zod";

const userValidationSchema = z.object({
  id: z.string(),
  password: z
    .string()
    .max(20, { message: "Maximum password length is 20 characters" }),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(["admin", "student", "faculty"]),
  isDeleted: z.boolean().optional().default(false),
  status: z.enum(["in-progress", "blocked"]).default("in-progress"),
});

export const userValidation = {
  userValidationSchema,
};
