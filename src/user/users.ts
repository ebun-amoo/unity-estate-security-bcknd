import { Router, Request, Response } from "express";
import supabase from "../config/supabase";

const router = Router();

// Get all users
router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Get user by ID
router.get("/:user_id", async (req: Request, res: Response): Promise<void> => {
  const { user_id } = req.params;

  try {
    const { data, error } = await supabase.from("users").select("*").eq("user_id", user_id).single();

    if (error) {
      res.status(404).json({ error: "User not found" });
      return;
    }

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
