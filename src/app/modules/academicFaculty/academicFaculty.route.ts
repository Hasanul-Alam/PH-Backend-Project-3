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
  AcademicFacultyController.createFaculty,
);

// Get all academic faculties
router.get("/", AcademicFacultyController.getAllFaculties);

// Get single academic faculty
router.get("/:id", AcademicFacultyController.getSingleFaculty);

// Update faculty
router.patch(
  "/:id",
  validateRequest(
    AcademicFacultyValidation.updateAcademicFacultyValidationSchema,
  ),
  AcademicFacultyController.updateFaculty,
);

export const AcademicFacultyRoutes = router;
