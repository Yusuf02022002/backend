import { supabase } from "../config/supabase.js";

/* =======================================================
   GET /api/checkin?userId=1
=========================================================*/
export const getAllCheckin = async (req, res) => {
  const userId = Number(req.query.userId);

  if (!userId)
    return res.status(400).json({ error: "userId is required" });

  const { data, error } = await supabase
    .from("checkins")                 // PASTIKAN nama tabel ini
    .select("*")
    .eq("user_id", userId)
    .order("date", { ascending: true });

  if (error) return res.status(400).json({ error });

  res.json(data);
};

/* =======================================================
   POST /api/checkin
   Body Example from script.js:
   { userId:1, date:"2025-01-01", mood:"happy", text:"Belajar" }
=========================================================*/
export const addCheckin = async (req, res) => {
  const { userId, date, mood, text } = req.body;

  if (!userId || !date || !mood)
    return res.status(400).json({ error: "Payload tidak lengkap" });

  const { data, error } = await supabase
    .from("checkins")                 // PASTIKAN nama tabel ini
    .insert({
      user_id: userId,                // convert ke field Supabase
      date,
      mood,
      text,
    })
    .select()
    .single();

  if (error) return res.status(400).json({ error });

  res.json(data);
};
