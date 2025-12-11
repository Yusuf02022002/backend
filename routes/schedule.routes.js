import express from "express";
import { supabase } from "../config/supabase.js";

const router = express.Router();

// GET schedule
router.get("/:userId", async (req, res) => {
    const userId = req.params.userId;

    const { data, error } = await supabase
        .from("schedules")
        .select("*")
        .eq("user_id", userId)
        .maybeSingle();   // ← FIXED

    if (error) return res.status(400).json({ error });

    res.json(data);
});

// PUT update schedule
router.put("/:userId", async (req, res) => {
    const userId = req.params.userId;
    const payload = req.body;

    const { data, error } = await supabase
        .from("schedules")
        .update(payload)
        .eq("user_id", userId)
        .select();

    if (error) return res.status(400).json({ error });

    res.json(data);
});

export default router;
