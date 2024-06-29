import express from "express";
import { authorizeRoles, isAuthenticated } from "../middleware/auth.js";
import { createOrder, getAllOrders} from "../controllers/order.controller.js";

const orderRouter=express.Router();

orderRouter.post("/create-order", isAuthenticated,createOrder )
orderRouter.get("/get-all-orders", isAuthenticated, authorizeRoles("admin"),getAllOrders )

export default orderRouter;