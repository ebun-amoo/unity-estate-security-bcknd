import { Router, Request, Response } from "express";
import supabase from "../config/supabase";

const router = Router();

router.get("/", async (req: Request, res: Response): Promise<void> => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      res.status(401).json({ error: "Unauthorized. Token required." });
      return;
    }

    const token = authHeader.split(" ")[1]; // Extract Bearer token

    const { data, error } = await supabase.auth.getUser(token);

    if (error) {
      res.status(401).json({ error: "Invalid or expired token." });
      return;
    }

    res.status(200).json({ message: "User profile retrieved successfully!", user: data.user });
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
