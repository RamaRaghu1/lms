import Course from "../models/courseModel.js";
import { CatchAsyncError } from "../middleware/catchAsyncErrors.js";

export const createCourse = CatchAsyncError(async (data, res, next) => {
    try {
      console.log("Received data for course creation:", data);
      const course = await Course.create(data);
      console.log("Course created:", course);
      res.status(201).json({
        success: true,
        course,
      });
    } catch (error) {
      console.error("Error creating course:", error);
      return next(new ErrorHandler(error.message, 500));
    }
  });
  
