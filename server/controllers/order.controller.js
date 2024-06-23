import { CatchAsyncError } from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import Order from "../models/orderModel.js";
import { User } from "../models/userModel.js";
import Course from "../models/courseModel.js";
import path from "path";
import ejs from "ejs";
import sendMail from "../utils/sendMail.js";
import Notification from "../models/notificationModel.js";
import { getAllOrdersService, newOrder } from "../services/order.service.js";
import { fileURLToPath } from "url";
import { redis } from "../utils/redis.js";
import Razorpay from "razorpay";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_PUBLISHABLE_KEY,
  key_secret: process.env.RAZORPAY_SECRET_KEY,
});
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// create order

export const createOrder = CatchAsyncError(async (req, res, next) => {
  try {
    const { courseId, payment_info } = req.body;

    if (payment_info) {
      if ("id" in payment_info) {
        const paymentId = payment_info.id;

        const paymentDetails = await razorpay.payments.fetch(paymentId);

        if (paymentDetails.status !== "captured") {
          return next(new ErrorHandler("Payment not authorized!", 400));
        }
      }
    }

    const user = await User.findById(req?.user?._id);
    const courseExistInUser = user?.courses?.some(
      (course) => course._id.toString() === courseId.toString()
    );
    if (courseExistInUser) {
      return next(
        new ErrorHandler("You have already purchased this course", 400)
      );
    }

    const course = await Course.findById(courseId);
    console.log(`course ${course}`);
    if (!course) {
      return next(new ErrorHandler("Course not found", 404));
    }

    const data = {
      courseId: course?._id,
      userId: user?._id,
      payment_info,
    };

    const mailData = {
      order: {
        _id: course?._id.toString().slice(0, 6),
        name: course.name,
        price: course.price,
        date: new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
      },
    };
    const html = await ejs.renderFile(
      path.join(__dirname, "../mails/order-confirmation.ejs"),
      { order: mailData }
    );

    try {
      if (user) {
        await sendMail({
          email: user.email,
          subject: "Order Confirmation",
          template: "order-confirmation.ejs",
          data: mailData,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error.message, 500));
    }

    user?.courses.push(course?._id);
    await redis.set(req.user?.id, JSON.stringify(user))
    await user?.save();

    await Notification.create({
      user: user?._id,
      title: "New Order",
      message: `You have a new order from ${course?.name}`,
    });
    // console.log(`Before updating: ${course.purchased}`);
    if (course.purchased !== undefined) {
      course.purchased += 1;
    } else {
      course.purchased = 1;
    }
    // console.log(`After updating: ${course.purchased}`);
    await course.save();
    // console.log(`Course saved: ${course}`);
    newOrder(data, res, next);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

// get all orders- only for admin
export const getAllOrders = CatchAsyncError(async (req, res, next) => {
  try {
    getAllOrdersService(res);
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});

// send stripe publishable key
export const sendRazorpayPublishableKey = CatchAsyncError(async (req, res) => {
  res.status(200).json({
    publishablekey: process.env.RAZORPAY_PUBLISHABLE_KEY,
  });
});

// new payment
export const newPayment = CatchAsyncError(async (req, res) => {
  try {
    const myPayment = await razorpay.orders.create({
      amount: req.body.amount,
      currency: "INR",
      receipt: `receipt_${Math.random().toString(36).substr(2, 9)}`, // unique receipt id
      notes: {
        company: "Kairaa Blockchain Academy",
      },
    });
    res.status(201).json({
      success: true,
      order_id: myPayment.id,
    });
  } catch (error) {
    return next(new ErrorHandler(error.message, 500));
  }
});
