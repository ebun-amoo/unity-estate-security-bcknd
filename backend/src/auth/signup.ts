import { Router, Request, Response } from "express";
import supabase from "../config/supabase";

const router = Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
  const { email, password, full_name, role } = req.body;

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    res.status(400).json({ error: authError.message });
    return;
  }

  const { data: userData, error: dbError } = await supabase.from("users").insert([
    {
      user_id: authData.user?.id,
      email,
      full_name,
      role,
    },
  ]);

  if (dbError) {
    res.status(400).json({ error: dbError.message });
    return;
  }

  res.status(201).json({ message: "Signup successful!", user: userData });
});

export default router;
