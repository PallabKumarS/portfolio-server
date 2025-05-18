import { Request, Response } from "express";
import { ProjectService } from "./project.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const getAllProject = catchAsync(async (req: Request, res: Response) => {
  const data = await ProjectService.getAllProjectFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Projects retrieved successfully",
    data,
  });
});

export const ProjectController = { getAllProject };