import express from "express";
import { getAllContacts, getChatPartners, getMessagesByUserId, sendMessage } from "../controllers/message.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";
import { arcjetProtection } from "../middleware/arcjet.middleware.js";

const router = new express.Router();


// the middlewares execute in order - so requests get rete-limited first, then authenticated.
// this is actually more efficient since unauthenticated requests get blocked by rate limiting before hitting the auth middleware.

router.use(arcjetProtection, protectRoute)

router.get("/contacts", getAllContacts)
router.get("/chats",protectRoute, getChatPartners)
router.get("/:id", getMessagesByUserId)
router.post("/send/:id", sendMessage)

export default router;