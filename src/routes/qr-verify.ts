import { Router } from "express";
import { qrVerifyService } from "../services/qr-verify.service.js";

const router = Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await qrVerifyService.verifyQr(req.body);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
