import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import {ErrorMiddleware} from "./middleware/error.js";
import userRouter from "./routes/user.route.js";
import courseRouter from "./routes/course.route.js";



export const app=express();
// cookie parser
app.use(cookieParser());

// body parser
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:80'] 
};

app.use(cors(corsOptions));







// routes
app.use('/api/v1/',userRouter)
app.use('/api/v1/', courseRouter);

app.get("/test",(req,res,next)=>{
res.status(200).json({
    message:"API is working"
})
})
app.all("*", (req,res,next)=>{
const err=new Error(`Route ${req.originalUrl} not found`);
res.statusCode=400;
next(err)
})
app.use(ErrorMiddleware)