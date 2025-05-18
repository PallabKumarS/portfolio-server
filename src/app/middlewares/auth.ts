import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import config from "../config";
import catchAsync from "../utils/catchAsync";
import { AppError } from "../errors/AppError";
import { verifyToken } from "../modules/auth/auth.utils";

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization;

    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    // checking if the given token is valid
    const decoded = verifyToken(token, config.jwt_access_secret as string);
    const { email } = decoded;

    if (
      email !== "pallabkumar26@gmail.com" ||
      email !== "pallabkumar2699@gmail.com" ||
      email !== "admin@admin.com"
    ) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
    }
    next();
  });
};

export default auth;
