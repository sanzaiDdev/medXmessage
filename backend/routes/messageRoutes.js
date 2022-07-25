import { Router } from "express";

import {
  fetchMessages,
  getAllMessages,
  getMessageDetail,
} from "../controllers/messageController.js";

const router = Router();

router.get("/", getAllMessages);

router.get("/fetch-messages", fetchMessages);

router.get("/:id", getMessageDetail);

export default router;
