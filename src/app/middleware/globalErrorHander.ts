import { NextFunction, Request, Response } from "express";
import { status } from "http-status";

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(status.INTERNAL_SERVER_ERROR).json({
    success: false,
    stack: err.stack,
    message: err.message || "Internal server error",
    error: err,
  });
};
