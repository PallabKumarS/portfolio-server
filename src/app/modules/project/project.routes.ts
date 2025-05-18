import { Router } from "express";
import { ProjectController } from "./project.controller";

const router = Router();

// Define routes
router.get("/", ProjectController.getAllProject);

export const ProjectRoutes = router;