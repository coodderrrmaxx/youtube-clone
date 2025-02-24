import express from "express";
import { createChannel, getChannel } from "../controllers/channelController.js";

const router = express.Router();

router.post("/", createChannel);
router.get("/:id", getChannel);

export default router;
