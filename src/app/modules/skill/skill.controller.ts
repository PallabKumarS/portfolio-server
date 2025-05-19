import { Request, Response } from "express";
import { SkillService } from "./skill.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import httpStatus from "http-status";

// get all skill
const getAllSkill = catchAsync(async (req: Request, res: Response) => {
  const data = await SkillService.getAllSkillFromDB();
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skills retrieved successfully",
    data,
  });
});

// create skill
const createSkill = catchAsync(async (req: Request, res: Response) => {
  const data = await SkillService.createSkillToDB(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Skill created successfully",
    data,
  });
});

export const SkillController = { getAllSkill, createSkill };
