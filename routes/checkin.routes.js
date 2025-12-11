import express from "express";
import { addCheckin, getAllCheckin } from "../controllers/checkin.controller.js";

const router = express.Router();

// GET list checkin
router.get("/", getAllCheckin);

// POST create checkin
router.post("/", addCheckin);

export default router;
