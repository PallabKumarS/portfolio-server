import { Router } from "express";
import { SkillController } from "./skill.controller";

const router = Router();

// Define routes
router.get("/", SkillController.getAllSkill);

router.post("/", SkillController.createSkill);

router.patch("/:id", SkillController.updateSkill);

export const SkillRoutes = router;
