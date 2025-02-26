import { Router } from "express";
import {
 createWastePost ,  getWastePosts , getNearbyWastePosts
} from "../controllers/wasteOrders";
import fileUpload from "../lib/fileUpload";
const router = Router();

router.get("/", getWastePosts);
router.get("/nearby", getNearbyWastePosts);

// @ts-ignore
router.post("/", fileUpload, createWastePost);


export default router;