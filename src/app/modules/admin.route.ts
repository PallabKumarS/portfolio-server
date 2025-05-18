import { Router } from "express";
import { UserRoutes } from "./user/user.routes";
import { AuthRoutes } from "./auth/auth.routes";
import { ProjectRoutes } from "./project/project.routes";
import { BlogRoutes } from "./blog/blog.routes";
import { MessageRoutes } from "./message/message.routes";
import auth from "../middlewares/auth";

const router = Router();

router.use("api/users", auth(), UserRoutes);
router.use("api/auth", auth(), AuthRoutes);
router.use("api/projects", auth(), ProjectRoutes);
router.use("api/blogs", auth(), BlogRoutes);
router.use("api/messages", auth(), MessageRoutes);

export const AdminRoutes = router;
