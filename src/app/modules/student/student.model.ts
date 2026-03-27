import { Schema, model } from "mongoose";
import type {
  Guardian,
  LocalGuardian,
  Student,
  StudentName,
} from "./student.interface.js";
import validator from "validator";

/* ------------------ Name Schema ------------------ */
const studentNameSchema = new Schema<StudentName>(
  {
    firstName: {
      type: String,
      required: [
        true,
        "First name is required. Please provide the student's first name.",
      ],
      trim: true,
      maxLength: [
        20,
        "First name cannot exceed 20 characters. Please shorten the name.",
      ],
      validate: {
        validator: (value: string) =>
          value ===
          value.charAt(0).toUpperCase() + value.slice(1).toLowerCase(),
        message: "{VALUE} is not in capitalized format.",
      },
    },
    middleName: {
      type: String,
      trim: true,
    },
    lastName: {
      type: String,
      required: [
        true,
        "Last name is required. Please provide the student's last name.",
      ],
      trim: true,
      validate: {
        validator: (value: string) => validator.isAlpha(value),
        message: "{VALUE} is not a valid type of data.",
      },
    },
  },
  { _id: false },
);

/* ------------------ Guardian Schema ------------------ */
const guardianSchema = new Schema<Guardian>(
  {
    fatherName: {
      type: String,
      required: [
        true,
        "Father's full name is required. Please enter the father's name.",
      ],
    },
    fatherOccupation: {
      type: String,
      required: [
        true,
        "Father's occupation is required. Please specify what the father does for a living.",
      ],
    },
    fatherContactNo: {
      type: String,
      required: [
        true,
        "Father's contact number is required. Please provide a valid phone number for the father.",
      ],
    },
    motherName: {
      type: String,
      required: [
        true,
        "Mother's full name is required. Please enter the mother's name.",
      ],
    },
    motherOccupation: {
      type: String,
      required: [
        true,
        "Mother's occupation is required. Please specify what the mother does for a living.",
      ],
    },
    motherContactNo: {
      type: String,
      required: [
        true,
        "Mother's contact number is required. Please provide a valid phone number for the mother.",
      ],
    },
  },
  { _id: false },
);

/* ------------------ Local Guardian Schema ------------------ */
const localGuardianSchema = new Schema<LocalGuardian>(
  {
    name: {
      type: String,
      required: [
        true,
        "Local guardian's full name is required. Please provide the name of the local guardian.",
      ],
    },
    occupation: {
      type: String,
      required: [
        true,
        "Local guardian's occupation is required. Please specify their profession or job.",
      ],
    },
    contactNo: {
      type: String,
      required: [
        true,
        "Local guardian's contact number is required. Please provide a reachable phone number.",
      ],
    },
    address: {
      type: String,
      required: [
        true,
        "Local guardian's address is required. Please provide their full residential address.",
      ],
    },
  },
  { _id: false },
);

/* ------------------ Main Student Schema ------------------ */
const studentSchema = new Schema<Student>(
  {
    id: {
      type: String,
      required: [
        true,
        "Student ID is required. Each student must have a unique identifier.",
      ],
      unique: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: [true, "User ID is required. Please provide a valid user ID."],
      unique: true,
    },

    // password: {
    //   type: String,
    //   required: [
    //     true,
    //     "Password is required. Please provide a secure password for the student.",
    //   ],
    //   maxLength: [
    //     20,
    //     "Password cannot exceed 20 characters. Please shorten the password.",
    //   ],
    // },

    name: {
      type: studentNameSchema,
      required: [
        true,
        "Student's name is required. Please provide at least a first and last name.",
      ],
    },

    gender: {
      type: String,
      enum: {
        values: ["male", "female", "other"],
        message:
          "'{VALUE}' is not a valid gender. Accepted values are: male, female, or other.",
      },
      required: [
        true,
        "Gender is required. Please select the student's gender.",
      ],
    },

    dateOfBirth: {
      type: String,
    },

    email: {
      type: String,
      required: [
        true,
        "Email address is required. Please provide the student's email for communication.",
      ],
      unique: true,
      lowercase: true,
      trim: true,
      validate: {
        validator: (value: string) => validator.isEmail(value),
        message: "{VALUE} is not a valid email address.",
      },
    },

    contactNo: {
      type: String,
      required: [
        true,
        "Student's contact number is required. Please provide a valid phone number.",
      ],
    },

    emergencyContactNo: {
      type: String,
      required: [
        true,
        "An emergency contact number is required. Please provide a phone number to reach in case of emergencies.",
      ],
    },

    bloodGroup: {
      type: String,
      enum: {
        values: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
        message:
          "'{VALUE}' is not a valid blood group. Accepted values are: A+, A-, B+, B-, AB+, AB-, O+, O-.",
      },
    },

    presentAddress: {
      type: String,
      required: [
        true,
        "Present address is required. Please provide the student's current living address.",
      ],
    },

    permanentAddress: {
      type: String,
      required: [
        true,
        "Permanent address is required. Please provide the student's long-term home address.",
      ],
    },

    guardian: {
      type: guardianSchema,
      required: [
        true,
        "Guardian information is required. Please provide details for at least one parent or legal guardian.",
      ],
    },

    localGuardian: {
      type: localGuardianSchema,
      required: [
        true,
        "Local guardian information is required. Please provide contact details for someone locally responsible for the student.",
      ],
    },

    admissionSemester: {
      type: Schema.Types.ObjectId,
      ref: "AcademicSemester",
      required: [
        true,
        "Admission semester is required. Please provide a valid semester ID.",
      ],
    },

    profileImg: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

export const StudentModel = model<Student>("Student", studentSchema);
