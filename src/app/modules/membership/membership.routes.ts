import { Router } from "express";
import { membershipControllers } from "./membership.controller";

const router = Router();

router.post("/", membershipControllers.createMembership);

// export

export const membershipRoutes = router;
