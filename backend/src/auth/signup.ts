import { Router, Request, Response } from "express";
import supabase from "../config/supabase";

const router = Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: "Email and password are required." });
      return;
    }

    const { data, error } = await supabase.auth.signUp({ email, password });

    if (error) {
      res.status(400).json({ error: error.message });
      return;
    }

    res.status(201).json({ message: "Signup successful! Check your email for a confirmation link.", data });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
