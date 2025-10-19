// const createUser = async (req, res, next) => {
//   try {

import { Request, Response } from "express";
import catchAsync from "../../utils/catchAysnc";
import { userServices } from "./user.service";
import sendResponse from "../../utils/sendResponse";
import status from "http-status";

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.createUserIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "User created Sucessfully",
    data: result,
  });
});

//

export const userControllers = {
  createUser,
};
