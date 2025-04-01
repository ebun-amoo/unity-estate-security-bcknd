import { Router, Request, Response } from "express";
import supabase from "../config/supabase";

const router = Router();

router.post("/", async (req: Request, res: Response): Promise<void> => {
  const { new_password } = req.body;
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res.status(401).json({ error: "Unauthorized access. Missing or invalid token." });
    return;
  }

  const access_token = authHeader.split(" ")[1]; 

  try {
    const { data: sessionData, error: sessionError } = await supabase.auth.refreshSession({
      refresh_token: access_token
    });

    if (sessionError || !sessionData) {
      res.status(401).json({ error: "Session expired or invalid. Please log in again." });
      return;
    }

    const { data: userData, error: userError } = await supabase.auth.getUser();
    if (userError || !userData) {
      res.status(401).json({ error: "Session invalid or expired. Please log in again." });
      return;
    }

    const { data, error } = await supabase.auth.updateUser({
      password: new_password,
    });

    if (error) {
      res.status(400).json({ error: "Unable to update password. Please check the new password and try again." });
      return;
    }

    res.json({ message: "Password updated successfully.", data});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});

export default router;
