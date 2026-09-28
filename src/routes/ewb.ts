import { Router } from "express";
import { ewbService } from "../services/ewb.service.js";

const router = Router();

router.post("/generate", async (req, res, next) => {
  try {
    const result = await ewbService.generateEwb(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
