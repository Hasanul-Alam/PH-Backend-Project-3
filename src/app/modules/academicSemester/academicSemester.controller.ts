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

// Get all academic semesters
const getAllAcademicSemesters = catchAsync(async (req, res, next) => {
  const result = await AcademicSemesterServices.getAllAcademicSemestersFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semesters retrieved successfully",
    data: result,
  });
});

// Get single academic semester
const getSingleAcademicSemester = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.getSingleAcademicSemesterFromDB(
    id as string,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester retrieved successfully",
    data: result,
  });
});

// Update academic semester
const updateAcademicSemester = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const result = await AcademicSemesterServices.updateAcademicSemesterIntoDB(
    id as string,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Academic Semester updated successfully",
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSmester,
  getAllAcademicSemesters,
  getSingleAcademicSemester,
  updateAcademicSemester,
};
