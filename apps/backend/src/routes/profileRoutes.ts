import express from "express";
import {
  getProfiles,
  getProfile,
  createProfile,
  updateProfile,
  deleteProfile,
} from "../controllers/profileController";
import fileUpload from "../lib/fileUpload";

const router = express.Router();

router.get("/", getProfiles);
//@ts-ignore
router.get("/:id", getProfile);
//@ts-ignore
router.post("/", fileUpload ,createProfile);
router.put("/:id", updateProfile);
router.delete("/:id", deleteProfile);

export default router;