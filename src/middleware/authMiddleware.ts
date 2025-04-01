import { Request, Response, NextFunction } from "express";
import supabase from "../config/supabase";

declare module "express-serve-static-core" {
  interface Request {
    user?: any;
  }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; 

    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const { data: authData, error: authError } = await supabase.auth.getUser(token);

    if (authError || !authData.user) {
      res.status(401).json({ error: "Invalid or expired token" });
      return;
    }

    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("*")
      .eq("user_id", authData.user.id)
      .single();

    if (userError || !userData) {
      res.status(404).json({ error: "User not found in database" });
      return;
    }

    req.user = userData;
    next();
  } catch (err) {
    next(err);
  }
};
