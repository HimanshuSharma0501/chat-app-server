import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/auth.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Working fine on ${PORT}`);
});
