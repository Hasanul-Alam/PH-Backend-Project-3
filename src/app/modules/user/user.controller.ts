const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    const parsedData = studentValidationSchema.safeParse(studentData);

    if (!parsedData.success) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: parsedData.error.flatten(),
      });
    }

    // ✅ TypeScript already knows this is StudentInput
    // @ts-ignore
    const result = await StudentServices.createStudentIntoDB(parsedData.data);

    return res.status(201).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message || "Failed to create student",
      error,
    });
  }
};
