import validateRequest from "../../middlewares/validateRequest.js";
import { AcademicFacultyController } from "./academicFaculty.controller.js";
import { AcademicFacultyValidation } from "./academicFaculty.validation.js";
import express from "express";

const router = express.Router();

router.post(
  "/create-academic-faculty",
  validateRequest(
    AcademicFacultyValidation.createAcademicFacultyValidationSchema,
  ),
  AcademicFacultyController.createAcademicFaculty,
);

export const AcademicFacultyRoutes = router;
