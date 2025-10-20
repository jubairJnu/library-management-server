import { prisma } from "../../utils/prisma";
import { IUser } from "./user.interface";

const createUserIntoDB = async (payload: IUser) => {
  const result = await prisma.user.create({
    data: payload,
  });

  return result;
};

//
export const userServices = {
  createUserIntoDB,
};
