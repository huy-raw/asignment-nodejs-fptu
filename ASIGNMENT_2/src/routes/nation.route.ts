
import { NationController } from "controllers/nation.controller";
import { Router } from "express";

const router = Router()

router.get("/", NationController.getAll)
router.post("/", NationController.create)


export default router;