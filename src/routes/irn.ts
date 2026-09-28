import { Router } from "express";
import { irnService } from "../services/irn.service.js";

const router = Router();

router.post("/generate", async (req, res, next) => {
  try {
    const result = await irnService.generateIrn(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
