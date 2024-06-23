import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth.js";
import { createOrder, getAllOrders, newPayment, sendRazorpayPublishableKey } from "../controllers/order.controller.js";

const orderRouter=express.Router();

orderRouter.post("/create-order", isAuthenticated,createOrder )
orderRouter.get("/get-all-orders", isAuthenticated, authorizeRoles("admin"),getAllOrders )
orderRouter.get("/payment/razorpaypublishablekey",sendRazorpayPublishableKey)
orderRouter.post("/payment", isAuthenticated, newPayment)
export default orderRouter;