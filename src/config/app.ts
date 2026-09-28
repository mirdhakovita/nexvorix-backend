export const config = {
  port: Number(process.env.PORT) || 3000,
  environment: process.env.NODE_ENV || "development",
  appName: process.env.APP_NAME || "NEXVORIX Backend",
  version: process.env.APP_VERSION || "1.0.0",
};
