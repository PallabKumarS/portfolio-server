import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import config from "../config";
import catchAsync from "../utils/catchAsync";
import { AppError } from "../errors/AppError";
import { verifyToken } from "../modules/auth/auth.utils";

const auth = () => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const authorizedEmail = [
      "pallabkumar26@gmail.com",
      "pallabkumar2699@gmail.com",
      "admin@admin.com",
    ];

    const token = req.headers.authorization;

    // checking if the token is missing
    if (!token) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized!");
    }

    // checking if the given token is valid
    const decoded = verifyToken(token, config.jwt_access_secret as string);
    const { email } = decoded;

    if (!authorizedEmail.includes(email)) {
      throw new AppError(httpStatus.UNAUTHORIZED, "You are not authorized");
    }
    next();
  });
};

export default auth;
