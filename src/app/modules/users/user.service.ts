import { prisma } from "../../utils/prisma";
import { IUser } from "./user.interface";

const createUserIntoDB = async (payload: IUser) => {
  console.log(payload, "payload in service");
  const result = await prisma.user.create({
    data: payload,
  });

  return result;
};

//
export const userServices = {
  createUserIntoDB,
};
