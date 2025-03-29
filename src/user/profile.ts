import { Router, Request, Response } from "express";
import { authMiddleware } from "../middleware/authMiddleWare";
import supabase from "../config/supabase";

const router = Router();

router.get("/", authMiddleware, async (req: Request, res: Response): Promise<void> => {
  const userId = req.user.id;

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  res.json({ user: data });
});

export default router;
