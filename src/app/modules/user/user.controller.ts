import { NextFunction, Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.service";
import sendResposne from "../../utils/sendResponse";
import status from "http-status";

// const createUser = async (req: Request, res: Response, next: NextFunction) => {
//   try {

//     // res.status(200).json({
//     //     success:
//     // })

//   } catch (err) {
//     next();
//   }
// };

const createUser = catchAsync(async (req: Request, res: Response) => {
  const result = await userServices.createUserInToDB(req.body);
  sendResposne(res, {
    success: true,
    statusCode: status.OK,
    message: "User created sucessfully",
    data: result,
  });
});

export const userControllers = {
  createUser,
};
