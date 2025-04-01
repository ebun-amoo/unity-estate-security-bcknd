import { Router, Request, Response } from "express";
import supabase from "../config/supabase";

const router = Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
  const { email } = req.body;

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://your-frontend-app.com/reset-password", // replace with frontend route
  });

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  res.json({ message: "Password reset email sent!", data });
});

export default router;
