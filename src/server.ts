import express from "express";
import rootRouter from "./rootRoutes";

const app = express();
app.use(express.json());

// Use the root routes
app.use("/api", rootRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

export default app;
