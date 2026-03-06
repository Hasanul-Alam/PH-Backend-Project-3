import type { TUser } from "./user.interface.js";
import { UserModel } from "./user.model.js";

const createStudentIntoDB = async (studentData: TUser) => {
  const result = await UserModel.create(studentData);
  return result;
};

export const UserServices = {
  createStudentIntoDB,
};
