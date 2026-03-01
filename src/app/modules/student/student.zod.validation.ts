import { z } from "zod";

/* ------------------ Name Schema ------------------ */
const studentNameValidationSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, "First name is required. Please provide the student's first name.")
    .max(20, "First name cannot exceed 20 characters.")
    .refine(
      (value) =>
        value === value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
      {
        message: "First name must be in capitalized format (e.g. Hasan).",
      },
    ),

  middleName: z.string().trim().optional(),

  lastName: z
    .string()
    .trim()
    .min(1, "Last name is required. Please provide the student's last name.")
    .regex(/^[A-Za-z]+$/, "Last name must contain only alphabetic characters."),
});

/* ------------------ Guardian Schema ------------------ */
const guardianValidationSchema = z.object({
  fatherName: z.string().min(1, "Father's full name is required."),
  fatherContactNo: z.string().min(1, "Father's contact number is required."),
  fatherOccupation: z.string().min(1, "Father's occupation is required."),

  motherName: z.string().min(1, "Mother's full name is required."),
  motherContactNo: z.string().min(1, "Mother's contact number is required."),
  motherOccupation: z.string().min(1, "Mother's occupation is required."),

  address: z.string().min(1, "Guardian's home address is required."),
});

/* ------------------ Local Guardian Schema ------------------ */
const localGuardianValidationSchema = z.object({
  name: z.string().min(1, "Local guardian's full name is required."),
  contactNo: z.string().min(1, "Local guardian's contact number is required."),
  occupation: z.string().min(1, "Local guardian's occupation is required."),
  address: z.string().min(1, "Local guardian's address is required."),
});

/* ------------------ Main Student Schema ------------------ */
export const studentValidationSchema = z.object({
  id: z.string().min(1, "Student ID is required."),
  password: z
    .string()
    .min(1, "Password is required.")
    .max(30, "Password cannot exceed 30 characters."),

  name: studentNameValidationSchema,

  gender: z.enum(["male", "female", "other"], {
    error: "Gender must be male, female, or other.",
  }),

  //   email: z
  //     .string()
  //     .email("Please provide a valid email address.")
  //     .min(1, "Email address is required.")
  //     .trim()
  //     .toLowerCase(),

  email: z
    .string()
    .refine(
      (value) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
      },
      {
        message: "Please provide a valid email address.",
      },
    )
    .min(1, "Email address is required.")
    .trim()
    .toLowerCase(),

  dateOfBirth: z
    .string()
    .min(1, "Date of birth is required.")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Date must be in YYYY-MM-DD format."),

  contactNo: z.string().min(1, "Student's contact number is required."),

  emergencyContactNo: z
    .string()
    .min(1, "Emergency contact number is required."),

  bloodGroup: z
    .enum(["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"], {
      error: "Invalid blood group.",
    })
    .optional(),

  presentAddress: z.string().min(1, "Present address is required."),

  permanentAddress: z.string().min(1, "Permanent address is required."),

  guardian: guardianValidationSchema,

  localGuardian: localGuardianValidationSchema,

  profileImage: z.string().optional(),

  isActive: z
    .enum(["active", "block"], {
      error: "Account status must be either 'active' or 'block'.",
    })
    .default("active"),
});

export type StudentInput = z.infer<typeof studentValidationSchema>;
