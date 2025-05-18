import { Router } from "express";
import { BlogController } from "./blog.controller";

const router = Router();

// Define routes
router.get("/", BlogController.getAllBlog);

export const BlogRoutes = router;