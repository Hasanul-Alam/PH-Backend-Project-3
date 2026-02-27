import type { Request, Response } from "express";
import { StudentServices } from "./student.service.js";
import Joi from "joi";
import { studentValidationSchema } from "./student.validation.js";

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    // Validate the incoming student data against the schema
    const { error, value } = studentValidationSchema.validate(studentData);
    console.log(error, value);

    if (error) {
      return res.status(400).json({
        // use 400 for validation error
        success: false,
        message: "Validation failed",
        errors: error.details,
      });
    }

    //   Will call service function to send this data to database
    const result = await StudentServices.createStudentIntoDB(studentData);

    //   Send response to client

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to create student",
      error: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudentsFromDB();
    res.status(200).json({
      success: true,
      message: "Students retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

const getSingleStudent = async (
  req: Request<{ id: string }>,
  res: Response,
) => {
  try {
    const { id } = req.params;
    const result = await StudentServices.getSingleStudentFromDB(id);
    res.status(200).json({
      success: true,
      message: "Student retrieved successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getSingleStudent,
};
