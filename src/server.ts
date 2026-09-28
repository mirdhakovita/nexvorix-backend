import "dotenv/config";
import express from "express";
import { config } from "./config/app.js";
import { logger } from "./middleware/logger.js";
import { errorHandler } from "./middleware/errorHandler.js";
import healthRouter from "./routes/health.js";
import authRouter from "./routes/auth.js";
import irnRouter from "./routes/irn.js";
import ewbRouter from "./routes/ewb.js";
import cancelRouter from "./routes/cancel.js";
import qrVerifyRouter from "./routes/qr-verify.js";

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (_req, res) => {
  res.json({
    service: config.appName,
    status: "running",
    environment: config.environment,
    version: config.version,
  });
});

app.use("/health", healthRouter);
app.use("/auth", authRouter);
app.use("/irn", irnRouter);
app.use("/ewb", ewbRouter);
app.use("/cancel", cancelRouter);
app.use("/qr-verify", qrVerifyRouter);

app.use((_req, res) => {
  res.status(404).json({
    status: "error",
    message: "Route not found",
  });
});

app.use(errorHandler);

app.listen(config.port, "0.0.0.0", () => {
  console.log(`${config.appName} running on port ${config.port}`);
});
