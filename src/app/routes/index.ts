import { Router } from "express";
import { userRoutes } from "../modules/users/user.routes";

const router = Router();

const routers = [
  {
    path: "/users",
    route: userRoutes,
  },
];

routers.forEach((route) => router.use(route.path, route.route));

export default router;
