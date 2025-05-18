import { Router } from "express";
import { ProjectController } from "./project/project.controller";
import { MessageController } from "./message/message.controller";
import { BlogController } from "./blog/blog.controller";

const router = Router();

// projects routes
router.get("/projects/", ProjectController.getAllProject);
router.get("/projects/:id", ProjectController.getSingleProject);

// blogs routes
router.get("/blogs/", BlogController.getAllBlog);
router.get("/blogs/:id", BlogController.getSingleBlog);

// message routes
router.post("/message/", MessageController.createMessage);

export const PublicRoutes = router;
