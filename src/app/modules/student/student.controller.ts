import type { Request, Response } from "express";
import { StudentServices } from "./student.service.js";

const createStudent = async (req: Request, res: Response) => {
  console.log(req.body);
  try {
    const { student: studentData } = req.body;

    //   Will call service function to send this data to database
    const result = await StudentServices.createStudentIntoDB(studentData);

    //   Send response to client

    res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    console.log(error);
  }
};

export const StudentControllers = {
  createStudent,
};
