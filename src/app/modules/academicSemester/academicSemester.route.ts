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

// Get all academic semesters
router.get("/", AcademicSemesterControllers.getAllAcademicSemesters);

// Get single academic semester
router.get("/:id", AcademicSemesterControllers.getSingleAcademicSemester);

// Update academic semester
router.patch(
  "/:id",
  validateRequest(
    AcademicSemesterValidation.createAcdemicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.updateAcademicSemester,
);

export const AcademicSemesterRoutes = router;
