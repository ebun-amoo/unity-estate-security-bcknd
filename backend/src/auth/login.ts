import { Router, Request, Response } from "express";
import supabase from "../config/supabase";

const router = Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const { data: authData, error: authError } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (authError) {
    res.status(400).json({ error: authError.message });
    return;
  }

  const userId = authData.user?.id;

  const { data: userData, error: dbError } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", userId)
    .single();

  if (dbError) {
    res.status(400).json({ error: dbError.message });
    return;
  }

  res.json({ message: "Login successful!", user: userData });
});

export default router;
