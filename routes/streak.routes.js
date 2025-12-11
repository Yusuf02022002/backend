import express from "express";
import { getTopStreaks, updateStreak } from "../controllers/streak.controller.js";

const router = express.Router();

// GET top 5 streak
router.get("/", getTopStreaks);

// PUT update streak
router.put("/", updateStreak);

export default router;
