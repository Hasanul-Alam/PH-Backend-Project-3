import config from "../../config/index.js";
import type { TAcademicSemester } from "../academicSemester/academicSemester.interface.js";
import { AcademicSemesterModel } from "../academicSemester/academicSemester.model.js";
import type { Student } from "../student/student.interface.js";
import { StudentModel } from "../student/student.model.js";
import type { TNewUser, TUser } from "./user.interface.js";
import { UserModel } from "./user.model.js";
import { generateStudentId } from "./user.utils.js";

const createStudentIntoDB = async (password: string, payload: Student) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  // Set student role
  userData.role = "student";

  // find academic semester info
  const admissionSemester = await AcademicSemesterModel.findById(
    payload.admissionSemester,
  );

  // set user id
  userData.id = await generateStudentId(admissionSemester as TAcademicSemester);

  // create a user model
  const newUser = await UserModel.create(userData);

  if (Object.keys(newUser).length !== 0) {
    // set id and _id as user
    payload.id = newUser.id;
    payload.user = newUser._id; //reference id

    const newStudent = await StudentModel.create(payload);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
