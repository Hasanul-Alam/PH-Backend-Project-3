import { academicSemesterNameCodeMapper } from "./academicSemester.constants.js";
import type { TAcademicSemester } from "./academicSemester.interface.js";
import { AcademicSemesterModel } from "./academicSemester.model.js";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
  //   console.log(academicSemesterNameCodeMapper[payload.name]);
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid Semester Code");
  }
  const result = await AcademicSemesterModel.create(payload);
  return result;
};

const getAllAcademicSemestersFromDB = async () => {
  const result = await AcademicSemesterModel.find();
  return result;
};

// Get Single Academic Semester
const getSingleAcademicSemesterFromDB = async (id: string) => {
  const result = await AcademicSemesterModel.findById(id);
  return result;
};

// Update Academic Semester
const updateAcademicSemesterIntoDB = async (
  id: string,
  payload: TAcademicSemester,
) => {
  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error("Invalid Semester Code");
  }
  const result = await AcademicSemesterModel.findOneAndUpdate(
    { _id: id },
    payload,
    {
      new: true,
    },
  );
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
  getAllAcademicSemestersFromDB,
  getSingleAcademicSemesterFromDB,
  updateAcademicSemesterIntoDB,
};
