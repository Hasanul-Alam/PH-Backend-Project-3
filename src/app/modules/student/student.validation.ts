import Joi from "joi";

const studentNameValidationSchema = Joi.object({
  firstName: Joi.string()
    .trim()
    .max(20)
    .required()
    .custom((value, helpers) => {
      const correctFormat =
        value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
      if (value !== correctFormat) {
        return helpers.error("any.invalid");
      }
      return value;
    })
    .messages({
      "string.empty":
        "First name is required. Please provide the student's first name.",
      "string.max":
        "First name cannot exceed 20 characters. Please shorten the name.",
      "any.required":
        "First name is required. Please provide the student's first name.",
      "any.invalid": "{{#value}} is not in capitalized format.",
    }),

  middleName: Joi.string().trim().optional(),

  lastName: Joi.string()
    .trim()
    .required()
    .pattern(/^[A-Za-z]+$/)
    .messages({
      "string.empty":
        "Last name is required. Please provide the student's last name.",
      "any.required":
        "Last name is required. Please provide the student's last name.",
      "string.pattern.base": "{{#value}} is not a valid type of data.",
    }),
});

/* ------------------ Guardian Validation ------------------ */
const guardianValidationSchema = Joi.object({
  fatherName: Joi.string().required().messages({
    "any.required":
      "Father's full name is required. Please enter the father's name.",
  }),

  fatherContactNo: Joi.string().required().messages({
    "any.required":
      "Father's contact number is required. Please provide a valid phone number for the father.",
  }),

  fatherOccupation: Joi.string().required().messages({
    "any.required":
      "Father's occupation is required. Please specify what the father does for a living.",
  }),

  motherName: Joi.string().required().messages({
    "any.required":
      "Mother's full name is required. Please enter the mother's name.",
  }),

  motherContactNo: Joi.string().required().messages({
    "any.required":
      "Mother's contact number is required. Please provide a valid phone number for the mother.",
  }),

  motherOccupation: Joi.string().required().messages({
    "any.required":
      "Mother's occupation is required. Please specify what the mother does for a living.",
  }),

  address: Joi.string().required().messages({
    "any.required":
      "Guardian's home address is required. Please provide their full residential address.",
  }),
});

/* ------------------ Local Guardian Validation ------------------ */
const localGuardianValidationSchema = Joi.object({
  name: Joi.string().required().messages({
    "any.required":
      "Local guardian's full name is required. Please provide the name of the local guardian.",
  }),

  contactNo: Joi.string().required().messages({
    "any.required":
      "Local guardian's contact number is required. Please provide a reachable phone number.",
  }),

  occupation: Joi.string().required().messages({
    "any.required":
      "Local guardian's occupation is required. Please specify their profession or job.",
  }),

  address: Joi.string().required().messages({
    "any.required":
      "Local guardian's address is required. Please provide their full residential address.",
  }),
});

const studentValidationSchema = Joi.object({
  id: Joi.string().required().messages({
    "any.required":
      "Student ID is required. Each student must have a unique identifier.",
  }),

  name: studentNameValidationSchema.required().messages({
    "any.required":
      "Student's name is required. Please provide at least a first and last name.",
  }),

  gender: Joi.string().valid("male", "female", "other").required().messages({
    "any.only":
      "'{#value}' is not a valid gender. Accepted values are: male, female, or other.",
    "any.required": "Gender is required. Please select the student's gender.",
  }),

  email: Joi.string().trim().lowercase().email().required().messages({
    "string.email": "{{#value}} is not a valid email address.",
    "any.required":
      "Email address is required. Please provide the student's email for communication.",
  }),

  dateOfBirth: Joi.string().required().messages({
    "any.required":
      "Date of birth is required. Please enter the student's date of birth (e.g. YYYY-MM-DD).",
  }),

  contactNo: Joi.string().required().messages({
    "any.required":
      "Student's contact number is required. Please provide a valid phone number.",
  }),

  emergencyContactNo: Joi.string().required().messages({
    "any.required":
      "An emergency contact number is required. Please provide a phone number to reach in case of emergencies.",
  }),

  bloodGroup: Joi.string()
    .valid("A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-")
    .optional()
    .messages({
      "any.only":
        "'{#value}' is not a valid blood group. Accepted values are: A+, A-, B+, B-, AB+, AB-, O+, O-.",
    }),

  presentAddress: Joi.string().required().messages({
    "any.required":
      "Present address is required. Please provide the student's current living address.",
  }),

  permanentAddress: Joi.string().required().messages({
    "any.required":
      "Permanent address is required. Please provide the student's long-term home address.",
  }),

  guardian: guardianValidationSchema.required().messages({
    "any.required":
      "Guardian information is required. Please provide details for at least one parent or legal guardian.",
  }),

  localGuardian: localGuardianValidationSchema.required().messages({
    "any.required":
      "Local guardian information is required. Please provide contact details for someone locally responsible for the student.",
  }),

  profileImage: Joi.string().uri().optional(),

  isActive: Joi.string().valid("active", "block").default("active").messages({
    "any.only":
      "'{#value}' is not a valid status. Account status must be either 'active' or 'block'.",
  }),
});

export { studentValidationSchema };
