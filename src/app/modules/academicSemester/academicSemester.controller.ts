import type { NextFunction, Request, Response } from "express";
import sendResponse from "../../utils/sendResponse.js";
import httpStatus from "http-status";
import catchAsync from "../../utils/catchAsync.js";
import { AcademicSemesterServices } from "./academicSemester.service.js";

const createAcademicSmester = catchAsync(async (req, res) => {
  // @ts-ignore
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Academic Semester created successfully",
    data: result,
  });
});

export const AcademicSemesterControllers = { createAcademicSmester };
