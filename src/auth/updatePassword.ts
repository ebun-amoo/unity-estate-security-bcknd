import { Router, Request, Response } from "express";
import supabase from "../config/supabase";

const router = Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
  const { new_password } = req.body;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized. Missing access token." });
    return;
  }

  const access_token = authHeader.split(" ")[1];

  const { data, error } = await supabase.auth.updateUser(
    { password: new_password }
  );

  if (error) {
    res.status(400).json({ error: error.message });
    return;
  }

  res.json({ message: "Password updated successfully!", data });
});

export default router;
