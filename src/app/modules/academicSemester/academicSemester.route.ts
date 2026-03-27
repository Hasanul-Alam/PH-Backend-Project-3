import express from "express";
import validateRequest from "../../middlewares/validateRequest.js";
import { AcademicSemesterValidation } from "./academicSemester.validation.js";
import { AcademicSemesterControllers } from "./academicSemester.controller.js";

const router = express.Router();

router.post(
  "/create-academic-semester",
  validateRequest(
    AcademicSemesterValidation.createAcdemicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSmester,
);

export const AcademicSemesterRoutes = router;
