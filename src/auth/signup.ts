import { Router, Request, Response } from "express";
import supabase from "../config/supabase";

const router = Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
  const { first_name, last_name, email, password, role, avatar } = req.body;

  const { data: existingUser } = await supabase
    .from("users")
    .select("*")
    .eq("email", email)
    .single();

  if (existingUser) {
    res.status(200).json({ message: "User already exists", user: existingUser });
    return;
  }

  const { data: authData, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  if (authError) {
    res.status(400).json({ error: authError.message });
    return;
  }

  if (!authData.user?.id) {
    res.status(400).json({ error: "User ID not returned from Supabase Auth" });
    return;
  }

  const { data: userData, error: dbError } = await supabase.from("users").insert([
    {
      user_id: authData.user.id, 
      first_name,
      last_name,
      email,
      role,
      avatar
    },
  ]);

  if (dbError) {
    res.status(400).json({ error: dbError.message });
    return;
  }

  res.status(201).json({
    message: "Signup successful! Please confirm your email and login",
    user: userData
  });
});

export default router;
