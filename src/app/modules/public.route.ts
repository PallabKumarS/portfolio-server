import { Router } from "express";
import { ProjectController } from "./project/project.controller";

const router = Router();

// projects routes (public)
router.get("/projects/", ProjectController.getAllProject);
router.get("/projects/:id", ProjectController.getSingleProject);

// blogs routes (public)

// message routes (public)

export const PublicRoutes = router;
