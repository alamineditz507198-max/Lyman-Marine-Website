import { Router, type IRouter } from "express";
import healthRouter from "./health";
import marineConditionsRouter from "./marine-conditions";

const router: IRouter = Router();

router.use(healthRouter);
router.use(marineConditionsRouter);

export default router;
