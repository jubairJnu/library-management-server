import status from "http-status";
import catchAsync from "../../utils/catchAysnc";
import sendResponse from "../../utils/sendResponse";
import { membershipServices } from "./membership.service";
import { Request, Response } from "express";

const createMembership = catchAsync(async (req: Request, res: Response) => {
  const result = await membershipServices.createMembershipIntoDB(req.body);

  sendResponse(res, {
    success: true,
    statusCode: status.OK,
    message: "membership created Sucessfully",
    data: result,
  });
});

export const membershipControllers = {
  createMembership,
};
