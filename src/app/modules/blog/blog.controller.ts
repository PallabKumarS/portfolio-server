import { Request, Response } from "express";
import { BlogService } from "./blog.service";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";

const getAllBlog = catchAsync(async (req: Request, res: Response) => {
  const data = await BlogService.getAllBlogFromDB();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Blogs retrieved successfully",
    data,
  });
});

export const BlogController = { getAllBlog };