import { Request, Response } from "express";
import { AboutService } from "./about.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const getAllAbout = catchAsync(async (req: Request, res: Response) => {
  const data = await AboutService.getAllAboutFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Abouts retrieved successfully",
    data,
  });
});

export const AboutController = { getAllAbout };