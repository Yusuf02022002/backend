import express from "express";
import { getEvents, addEvent, deleteEvent } 
    from "../controllers/event.controller.js";

const router = express.Router();

// Get all events for a user
router.get("/user/:userId", getEvents);

// Add event
router.post("/", addEvent);

// Delete event
router.delete("/:id", deleteEvent);

export default router;
