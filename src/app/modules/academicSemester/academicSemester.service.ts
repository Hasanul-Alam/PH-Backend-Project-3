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

export const AcademicSemesterServices = {
  createAcademicSemesterIntoDB,
};
