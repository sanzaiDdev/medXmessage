import cors from "cors";
import cron from "node-cron";
import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./config/db.js";

import messageRouter from "./routes/messageRoutes.js";

import { fetchMessages } from "./controllers/messageController.js";

dotenv.config();

connectDB();

const app = express();

app.use(cors());

app.use("/messages", messageRouter);

// fetching messages every 5 min
cron.schedule("*/5 * * * *", async () => {
  await fetchMessages();
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
