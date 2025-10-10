import { status } from "http-status";
import { NextFunction, Request, Response } from "express";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(err.status || status.INTERNAL_SERVER_ERROR).json({
    success: false,
    statusCode: status.INTERNAL_SERVER_ERROR,
    message: "Internal server error",
    err: err,
    stack: err?.stack,
  });
};

export default globalErrorHandler;
