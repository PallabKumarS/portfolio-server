import { Router } from "express";
import { MessageController } from "./message.controller";

const router = Router();

// Define routes
router.get("/", MessageController.getAllMessage);

export const MessageRoutes = router;