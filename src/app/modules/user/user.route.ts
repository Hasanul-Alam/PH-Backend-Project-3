import express from "express";
import { UserControllers } from "./user.controller.js";
import validateRequest from "../../middlewares/validateRequest.js";
import { createStudentValidationSchema } from "../student/student.validation.js";

const router = express.Router();

router.post(
  "/create-student",
  validateRequest(createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
