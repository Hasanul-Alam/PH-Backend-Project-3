import type { TAcademicSemester } from "../academicSemester/academicSemester.interface.js";
import { UserModel } from "./user.model.js";

const lastStudentId = async () => {
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
  return lastStudent?.id ? lastStudent.id.substring(6) : undefined;
};

// generate student id
export const generateStudentId = async (payload: TAcademicSemester) => {
  const currentId = (await lastStudentId()) || (0).toString();
  const incrementedId = (parseInt(currentId) + 1).toString().padStart(4, "0");
  const year = payload.year;
  const semesterCode = payload.code;
  return `${year}${semesterCode}${incrementedId}`;
};
