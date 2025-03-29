import { Request, Response, NextFunction } from "express";
import supabase from "../config/supabase";

// Extend Express Request type to include `user`
declare module "express-serve-static-core" {
  interface Request {
    user?: any; 
  }
}

export const authMiddleware = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // Extract Bearer Token

    if (!token) {
      res.status(401).json({ error: "Unauthorized" });
      return;
    }

    const { data, error } = await supabase.auth.getUser(token);

    if (error || !data.user) {
      res.status(401).json({ error: "Invalid or expired token" }); 
      return;
    }

    req.user = data.user;
    next();
  } catch (err) {
    next(err); 
  }
};
