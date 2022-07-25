import { Router } from "express";

import {
  fetchMessages,
  getAllMessages,
  getMessageDetail,
} from "../controllers/messageController.js";

const router = Router();

router.get("/", getAllMessages);

router.get("/:id", getMessageDetail);

router.get("/fetch-messages", fetchMessages);

export default router;
