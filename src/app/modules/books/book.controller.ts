import { Request, Response } from "express";
import catchAsync from "../../utils/catchAysnc";
import { bookServices } from "./book.services";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";

const createCategory = catchAsync(async (req: Request, res: Response) => {
  const result = await bookServices.createBookCategoryIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "category created Sucessfully",
    data: result,
  });
});

export const booksControllers = {
  createCategory,
};
