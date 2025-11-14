// create

import { prisma } from "../../utils/prisma";
import { IMembership } from "./membership.interface";

const createMembershipIntoDB = async (payload: IMembership) => {
  return await prisma.membership.create({
    data: payload,
  });
};

// export

export const membershipServices = {
  createMembershipIntoDB,
};
