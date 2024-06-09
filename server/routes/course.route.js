import express from "express";
import { editCourse, getAllCourses, getSingleCourse, uploadCourse,getCourseByUser, addQuestion, addAnswer } from "../controllers/course.controller.js";
import { isAuthenticated, authorizeRoles } from "../middleware/auth.js";

const courseRouter = express.Router();

courseRouter.post("/create-course",isAuthenticated,authorizeRoles("admin"), uploadCourse);
courseRouter.put("/edit-course/:id",isAuthenticated,authorizeRoles("admin"), editCourse);
courseRouter.get("/get-course/:id",getSingleCourse);
courseRouter.get("/get-courses", getAllCourses);
courseRouter.get("/get-course-content/:id",isAuthenticated,getCourseByUser);
courseRouter.put("/add-question", isAuthenticated,addQuestion);
courseRouter.put("/add-answer", isAuthenticated, addAnswer);
export default courseRouter;
