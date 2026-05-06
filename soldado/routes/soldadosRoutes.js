import { Router } from "express";

import{
    createSoldado,
    getSoldados,
    getSoldado,
    updateSoldado,
    deleteSoldado,
}from "../controllers/controllerSoldado.js";

const router = Router();

router.post("/soldados", createSoldado);
router.get("/soldados", getSoldados);
router.get("/soldados/:id", getSoldado);
router.put("/soldados/:id", updateSoldado);
router.delete("/soldados/:id", deleteSoldado);  

export default router;