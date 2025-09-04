import { status } from "http-status";

import { NextFunction, Request, Response } from "express";
import config from "../config";

const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.status(status.BAD_REQUEST).json({
    message: "Internal Server Error",
    error: err,
    stack: config.node_env !== "production" && err.stack,
    suceess: false,
  });
};

export default globalErrorHandler;


