import { Router } from "express";
import {
  createOrder , getOrders
} from "../controllers/orderController";
import fileUpload from "../lib/fileUpload";
const router = Router();

router.get("/", getOrders);
// @ts-ignore
router.post("/", fileUpload, createOrder);


export default router;