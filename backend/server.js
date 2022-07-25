import cors from "cors";
import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./config/db.js";

import messageRouter from "./routes/messageRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use("/messages", messageRouter);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
