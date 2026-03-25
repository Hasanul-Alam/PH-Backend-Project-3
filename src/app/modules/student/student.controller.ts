import type { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service.js";
import Joi from "joi";
import { studentValidationSchema } from "./student.zod.validation.js";
import type { StudentInput } from "./student.zod.validation.js";
import sendResponse from "../../utils/sendResponse.js";
import httpStatus from "http-status";

// import type { StudentInput } from "./student.zod.validation";
// import { studentValidationSchema } from "./student.validation.js";

// const createStudent = async (req: Request, res: Response) => {
//   try {
//     const { student: studentData } = req.body;

//     // validattion using Joi
//     // const { error, value } = studentValidationSchema.validate(studentData, {
//     //   abortEarly: false,
//     // });

//     // Validation using Zod
//     const zodParsedData = studentValidationSchema.safeParse(studentData);

//     // Handle validation errors when using joi

//     // if (error) {
//     //   return res.status(400).json({
//     //     success: false,
//     //     message: "Validation failed",
//     //     errors: error.details,
//     //   });
//     // }

//     // 2️⃣ Use validated value (not raw data)
//     const result = await StudentServices.createStudentIntoDB(zodParsedData.data);

//     // 3️⃣ Send response
//     return res.status(201).json({
//       success: true,
//       message: "Student created successfully",
//       data: result,
//     });
//   } catch (error) {
//     return res.status(500).json({
//       success: false,
//       message: "Failed to create student",
//       error,
//     });
//   }
// };

const getAllStudents = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Students retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

const getSingleStudent = async (
  req: Request<{ id: string }>,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(id);
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Student retrieved successfully",
      data: result,
    });
  } catch (error) {
    next(error);
  }
};

export const StudentControllers = {
  getAllStudents,
  getSingleStudent,
};
