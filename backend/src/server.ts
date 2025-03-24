import express, { Request, Response } from "express";
import supabase from "./config/supabase";

const app = express();
const PORT = process.env.PORT || 5000;

app.get("/test", async (req, res): Promise<void> => {
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

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
