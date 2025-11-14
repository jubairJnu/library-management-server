// ! category

import { prisma } from "../../utils/prisma";
import { TBookCategory } from "./book.interface";

const createBookCategoryIntoDB = async (payload: TBookCategory) => {
  return await prisma.category.create({
    data: payload,
  });
};

// ! books

// export

export const bookServices = {
  createBookCategoryIntoDB,
};
