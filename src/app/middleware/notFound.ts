import { Request, Response } from "express";
import status from "http-status";

export const notFound = (req: Request, res: Response) => {
  res.status(status.NOT_FOUND).json({
    message: "API Not Found!",
    success: false,
    err: {
      api: req.originalUrl,
      message: "Wrong API!",
    },
  });
};
