import express from "express";
import cors from 'cors';
import cookieParser from "cookie-parser";
import {ErrorMiddleware} from "./middleware/error.js";
import userRouter from "./routes/user.route.js";
import courseRouter from "./routes/course.route.js";
import orderRouter from "./routes/order.route.js";
import notificationRoute from "./routes/notification.route.js";
import analyticsRouter from "./routes/analytics.route.js";
import layoutRouter from "./routes/layout.route.js";

export const app=express();
// cookie parser
app.use(cookieParser());

// body parser
app.use(express.json());

app.use(express.urlencoded({ extended: true }));


const corsOptions = {
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204
};

app.use(cors(corsOptions));

// routes
app.use('/api/v1/',userRouter)
app.use('/api/v1/', courseRouter);
app.use('/api/v1/', orderRouter, notificationRoute,analyticsRouter,layoutRouter);

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