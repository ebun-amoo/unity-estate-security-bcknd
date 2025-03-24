import express, { Request, Response } from "express";
import { VercelRequest, VercelResponse } from "@vercel/node";
import supabase from "./config/supabase";

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 5000;

app.get("/test", async (req: Request, res: Response): Promise<void> => {
  try {
    const { data, error } = await supabase.from("users").select("*");

    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Start the server locally only if not in Vercel
if (process.env.VERCEL_ENV !== "production") {
  app.listen(PORT, () => {
    console.log(`🚀 Server running locally on port ${PORT}`);
  });
}

// Export for Vercel
export default (req: VercelRequest, res: VercelResponse) => {
  return app(req as any, res as any);
};
