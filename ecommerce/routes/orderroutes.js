import express from "express";
import { totalSalesPerMonth, ordersPerCustomer, topProducts, averageOrderValue } from "../controllers/ordercontroller.js";

const router = express.Router();

router.get("/sales-per-month", totalSalesPerMonth);
router.get("/orders-per-customer", ordersPerCustomer);
router.get("/top-products", topProducts);
router.get("/average-order-value", averageOrderValue);

export default router;
