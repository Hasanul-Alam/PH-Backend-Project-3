import type { TAcademicFaculty } from "./academicFaculty.interface.js";
import { AcademicFacultyModel } from "./academicFaculty.model.js";

const createAcademicFacultyIntoDB = async (payload: TAcademicFaculty) => {
  const result = await AcademicFacultyModel.create(payload);
  return result;
};

// Get all academic faculties
const getAllAcademicFaculties = async () => {
  const result = AcademicFacultyModel.find();
  return result;
};

// Get single academic faculty
const getSingleAcademicFaculty = async (id: string) => {
  const result = await AcademicFacultyModel.findById(id);
  return result;
};

// Update academic faculty
const updateAcademicFaculty = async (id: string, payload: TAcademicFaculty) => {
  const result = AcademicFacultyModel.findOneAndUpdate({ _id: id }, payload, {
    new: true,
  });
  console.log(payload);
  return result;
};

export const AcademicFacultyServices = {
  createAcademicFacultyIntoDB,
  getAllAcademicFaculties,
  getSingleAcademicFaculty,
  updateAcademicFaculty,
};
