import { Router } from "express";

import {
  fetchMessages,
  getMessages,
} from "../controllers/messageController.js";

const router = Router();

router.get("/", getMessages);

router.get("/fetch-messages", fetchMessages);

export default router;
