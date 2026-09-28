import { Router } from "express";
import { cancelService } from "../services/cancel.service.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await cancelService.cancelIrn(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
