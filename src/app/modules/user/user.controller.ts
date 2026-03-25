import type { NextFunction, Request, Response } from "express";
import { UserServices } from "./user.service.js";
import sendResponse from "../../utils/sendResponse.js";
import httpStatus from "http-status";

const createStudent = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { password, student: studentData } = req.body;

    // const parsedData = studentValidationSchema.safeParse(studentData);

    // if (!parsedData.success) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Validation failed",
    //     errors: parsedData.error.flatten(),
    //   });
    // }

    // ✅ TypeScript already knows this is StudentInput
    // @ts-ignore
    const result = await UserServices.createStudentIntoDB(
      password,
      studentData,
    );
    sendResponse(res, {
      statusCode: httpStatus.CREATED,
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error: any) {
    next(error);
  }
};

export const UserControllers = { createStudent };
