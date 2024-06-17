import express from "express";
import { editCourse, getAllCourses, getSingleCourse, uploadCourse,getCourseByUser, addQuestion, addAnswer, generateVideoUrl, addReview, addReplyToReview, getAllCourse, deleteCourse } from "../controllers/course.controller.js";
import { isAuthenticated, authorizeRoles } from "../middleware/auth.js";
import {  updateAccessToken } from "../controllers/user.controller.js";

const courseRouter = express.Router();

courseRouter.post("/create-course", isAuthenticated,updateAccessToken,authorizeRoles("admin"),uploadCourse);
courseRouter.put("/edit-course/:id",isAuthenticated,updateAccessToken,authorizeRoles("admin"), editCourse);
courseRouter.get("/get-course/:id",getSingleCourse);
courseRouter.get("/get-all-courses", getAllCourses);
courseRouter.get("/get-course-content/:id",isAuthenticated,updateAccessToken,getCourseByUser);
courseRouter.put("/add-question", isAuthenticated,updateAccessToken,addQuestion);
courseRouter.put("/add-answer", isAuthenticated,updateAccessToken, addAnswer);
courseRouter.put("/add-review/:id", isAuthenticated,updateAccessToken, addReview);
courseRouter.put("/add-reply", isAuthenticated,updateAccessToken,authorizeRoles("admin"), addReplyToReview);
courseRouter.get("/get-courses", isAuthenticated,authorizeRoles("admin"), getAllCourse);
courseRouter.delete("/delete-course/:id", isAuthenticated,authorizeRoles("admin"), deleteCourse);

courseRouter.post("/getVdoCipherOTP", generateVideoUrl);
export default courseRouter;
