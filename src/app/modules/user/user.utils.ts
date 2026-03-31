import type { TAcademicSemester } from "../academicSemester/academicSemester.interface.js";
import { UserModel } from "./user.model.js";

const findLastStudentId = async () => {
  const lastStudent = await UserModel.findOne(
    {
      role: "student",
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({ createdAt: -1 })
    .lean();
  return lastStudent?.id ? lastStudent.id : undefined;
};

// generate student id
export const generateStudentId = async (payload: TAcademicSemester) => {
  const lastStudentId = await findLastStudentId(); //2030 01 0001
  let currentId = (0).toString(); //0000
  // const incrementedId = (parseInt(currentId) + 1).toString().padStart(4, "0");
  const currentYear = payload.year;
  const currentSemesterCode = payload.code;
  // return `${currentYear}${currentSemesterCode}${incrementedId}`;

  const lastStudentSemesterCode = lastStudentId?.substring(4, 6);
  const lastStudentYear = lastStudentId?.substring(0, 4);

  if (
    lastStudentId &&
    lastStudentSemesterCode === currentSemesterCode &&
    lastStudentYear === currentYear
  ) {
    currentId = lastStudentId?.substring(6);
  }
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(4, "0");
  return `${currentYear}${currentSemesterCode}${incrementedId}`;
};
