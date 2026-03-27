import type { NextFunction, Request, RequestHandler, Response } from "express";
import { UserServices } from "./user.service.js";
import sendResponse from "../../utils/sendResponse.js";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync.js";

const createStudent = catchAsync(async (req, res) => {
  const { password, student: studentData } = req.body;
  // @ts-ignore
  const result = await UserServices.createStudentIntoDB(password, studentData);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Student created successfully",
    data: result,
  });
});

export const UserControllers = { createStudent };
