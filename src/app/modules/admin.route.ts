import { Router } from "express";
import { UserRoutes } from "./user/user.routes";
import { AuthRoutes } from "./auth/auth.routes";
import { ProjectRoutes } from "./project/project.routes";
import { BlogRoutes } from "./blog/blog.routes";
import { MessageRoutes } from "./message/message.routes";

const router = Router();

router.use("api/users", UserRoutes);
router.use("api/auth", AuthRoutes);
router.use("api/projects", ProjectRoutes);
router.use("api/blogs", BlogRoutes);
router.use("api/messages", MessageRoutes);

export const AdminRoutes = router;
