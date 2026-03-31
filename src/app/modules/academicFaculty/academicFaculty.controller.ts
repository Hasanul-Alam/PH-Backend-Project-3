import catchAsync from "../../utils/catchAsync.js";
import sendResponse from "../../utils/sendResponse.js";
import { AcademicFacultyServices } from "./academicFaculty.service.js";
import httpStatus from "http-status";

const createAcademicFaculty = catchAsync(async (req, res) => {
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

export const AcademicFacultyController = {
  createAcademicFaculty,
};
