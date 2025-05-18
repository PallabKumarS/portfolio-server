import { Router } from "express";
import { AboutController } from "./about.controller";

const router = Router();

// Define routes
router.get("/", AboutController.getAllAbout);

export const AboutRoutes = router;