import type { Student } from "./student.interface.js";
import { StudentModel } from "./student.model.js";

const createStudentIntoDB = async (studentData: Student) => {
  const result = await StudentModel.create(studentData);
  return result;
};

const getAllStudentsFromDB = async () => {
  const result = await StudentModel.find();
  return result;
};

const getSingleStudentFromDB = async (id: string) => {
  const result = await StudentModel.findOne({ _id: new Object(id) });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDB,
  getSingleStudentFromDB,
};
