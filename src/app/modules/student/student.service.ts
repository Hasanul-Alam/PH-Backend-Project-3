import type { Student } from "./student.interface.js";
import { StudentModel } from "./student.model.js";

const createStudentIntoDB = async (studentData: Student) => {
  const result = await StudentModel.create(studentData);
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
};
