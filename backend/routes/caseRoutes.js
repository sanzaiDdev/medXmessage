import { Router } from "express";

import { fetchMails } from "../controllers/caseController.js";

const router = Router();

router.get("/mails", fetchMails);

export default router;
