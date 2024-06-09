import { CatchAsyncError } from "./catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import { redis } from "../utils/redis.js";
import jwt from "jsonwebtoken";


export const isAuthenticated = CatchAsyncError(async (req, res, next) => {
  console.log("Request headers:", req.headers);

  const access_token = req.cookies.access_token;

  if (!access_token) {
    return next(new ErrorHandler("Please login to access this resource", 400));
  }

  const accessToken = process.env.ACCESS_TOKEN;
  console.log("accessToken", accessToken);

  jwt.verify(access_token, accessToken, async (err, decode) => {
    if (err) {
      console.log("err", err);
      return next(new ErrorHandler("Access token is not valid", 400));
    }

    console.log("decode", decode);

    const user = await redis.get(decode.id);

    if (!user) {
      return next(new ErrorHandler("User not found", 400));
    }

    req.user = JSON.parse(user);
    console.log("user", req.user);
    next();
  });
});

// validate user role

export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user?.role)) {
      return next(
        new ErrorHandler(
          `Role ${req.user.role} is not allowed to access this resource`,
          403
        )
      );
    }
    next();
  };
};


