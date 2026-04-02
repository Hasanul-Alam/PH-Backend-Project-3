import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { AcademicFacultyServices } from "./academicFaculty.service.js";
import httpStatus from "http-status";

const createFaculty = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.createAcademicFacultyIntoDB(
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Academic Faculty created successfully",
    data: result,
  });
});

// Get all academic faculties
const getAllFaculties = catchAsync(async (req, res) => {
  const result = await AcademicFacultyServices.getAllAcademicFaculties();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "All faculties retrived successfully",
    data: result,
  });
});

// Get single academic faculty
const getSingleFaculty = catchAsync(async (req, res) => {
  const facultyId = req.params.id;
  const result = await AcademicFacultyServices.getSingleAcademicFaculty(
    facultyId as string,
  );

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Faculty retrieved successfully",
    data: result,
  });
});

// Update faculty
const updateFaculty = catchAsync(async (req, res) => {
  const facultyId = req.params.id;
  const result = await AcademicFacultyServices.updateAcademicFaculty(
    facultyId as string,
    req.body,
  );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Faculty updated successfully",
    data: result,
  });
});

export const AcademicFacultyController = {
  createFaculty,
  getAllFaculties,
  getSingleFaculty,
  updateFaculty,
};
