import { supabase } from "../config/supabase.js";

// Get all events of a user
export const getEvents = async (req, res) => {
  const userId = req.params.userId;

  const { data, error } = await supabase
    .from("events")
    .select("*")
    .eq("user_id", userId)
    .order("date");

  if (error) return res.status(400).json({ error });

  res.json(data);
};

// Add event
export const addEvent = async (req, res) => {
  const { user_id, title, date, description } = req.body;

  const { data, error } = await supabase
    .from("events")
    .insert({
      user_id,
      title,
      date,
      description,
    })
    .select()
    .single();

  if (error) return res.status(400).json({ error });

  res.json(data);
};

// Delete event
export const deleteEvent = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase.from("events").delete().eq("id", id);

  if (error) return res.status(400).json({ error });

  res.json({ message: "Event deleted successfully" });
};
