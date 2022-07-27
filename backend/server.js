import cors from "cors";
import cron from "node-cron";
import dotenv from "dotenv";
import express from "express";

import { connectDB } from "./config/db.js";
import { initializeSocket } from "./socket/socket.service.js";
import { fetchMessages } from "./controllers/messageController.js";

import messageRouter from "./routes/messageRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

app.use(cors());

app.use("/messages", messageRouter);

// fetching messages every 5 min
cron.schedule("*/5 * * * *", async () => {
  await fetchMessages();
});

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

initializeSocket(server);
