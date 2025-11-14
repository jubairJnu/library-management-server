import { Router } from "express";
import { booksControllers } from "./book.controller";

const router = Router();

router.post("/category", booksControllers.createCategory);

export const bookRoutes = router;
