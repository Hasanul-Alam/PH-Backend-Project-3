import type { TAcademicFaculty } from "./academicFaculty.interface.js";
import { AcademicFacultyModel } from "./academicFaculty.model.js";

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
};
