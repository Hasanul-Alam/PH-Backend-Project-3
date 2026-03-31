import { model, Schema } from "mongoose";
import type { TAcademicFaculty } from "./academicFaculty.interface.js";

const academicFacultySchema = new Schema<TAcademicFaculty>(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  {
    timestamps: true,
  },
);

export const AcademicFacultyModel = model<TAcademicFaculty>(
  "AcademicFaculty",
  academicFacultySchema,
);
