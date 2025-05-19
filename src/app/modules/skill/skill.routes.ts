import { Router } from "express";
import { SkillController } from "./skill.controller";

const router = Router();

// Define routes
router.get("/", SkillController.getAllSkill);

router.post("/", SkillController.createSkill);

export const SkillRoutes = router;
