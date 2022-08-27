import { Router } from "express";
import { schedulesRoutes } from "./schedules.routes";

const router = Router()

router.use("/schedules", schedulesRoutes);

export{router}