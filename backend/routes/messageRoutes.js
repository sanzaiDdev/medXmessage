import { Router } from "express";

import {
  fetchMessages,
  getAllMessages,
  getAttachment,
  getMessageDetail,
} from "../controllers/messageController.js";

const router = Router();

router.get("/", getAllMessages);

router.get("/fetch-messages", fetchMessages);

router.get("/attachment", getAttachment);

router.get("/:id", getMessageDetail);

export default router;
