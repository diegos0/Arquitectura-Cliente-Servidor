import { Router } from "express";
import { getAlumnoById } from "../controllers/alumnoController.js";

const router = Router();

router.get("/:num_control", getAlumnoById);

export default router;