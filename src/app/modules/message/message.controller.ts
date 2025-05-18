import { Request, Response } from "express";
import { MessageService } from "./message.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const getAllMessage = catchAsync(async (req: Request, res: Response) => {
  const data = await MessageService.getAllMessageFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Messages retrieved successfully",
    data,
  });
});

export const MessageController = { getAllMessage };