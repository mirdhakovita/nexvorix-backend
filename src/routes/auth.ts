import { Router } from "express";
import { authService } from "../services/auth.service.js";

const router = Router();

router.post("/login", async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const result = await authService.login(username, password);
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;
