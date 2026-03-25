import config from "../../config/index.js";
import type { Student } from "../student/student.interface.js";
import { StudentModel } from "../student/student.model.js";
import type { TNewUser, TUser } from "./user.interface.js";
import { UserModel } from "./user.model.js";

const createStudentIntoDB = async (password: string, studentData: Student) => {
  const userData: Partial<TUser> = {};

  userData.password = password || (config.default_password as string);

  // Set student role
  userData.role = "student";

  // set user id
  userData.id = "2026100001";

  // create a user model
  const newUser = await UserModel.create(userData);

  if (Object.keys(newUser).length !== 0) {
    // set id and _id as user
    studentData.id = newUser.id;
    studentData.user = newUser._id; //reference id

    const newStudent = await StudentModel.create(studentData);
    return newStudent;
  }
};

export const UserServices = {
  createStudentIntoDB,
};
