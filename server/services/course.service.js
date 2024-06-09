import Course from "../models/courseModel.js";
import { CatchAsyncError } from "../middleware/catchAsyncErrors.js";

export const createCourse= CatchAsyncError(async(data,res)=>{
    const course= await Course.create(data);
    res.status(201).json({
        success:true,
        course
    })
})