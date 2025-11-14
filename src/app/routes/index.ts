import { Router } from "express";
import { userRoutes } from "../modules/users/user.routes";
import { membershipRoutes } from "../modules/membership/membership.routes";
import { bookRoutes } from "../modules/books/book.routes";

const router = Router();

const routers = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/membership",
    route: membershipRoutes,
  },
  {
    path: "/books",
    route: bookRoutes,
  },
];

routers.forEach((route) => router.use(route.path, route.route));

export default router;
