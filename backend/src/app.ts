import express from "express";
import cors from "cors";
import env from "./config/env";
import routes from "./routes";
import mongoose from "mongoose";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./swagger";
export const app = express();
try {
  app.use(cors());
  app.use(express.json());
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  app.use("/api", routes.TaskRouter);
  mongoose
    .connect(env.mongodb_uri)
    .then(() => console.log("MongoDB is connected"));
  app.listen(env.port, () => {
    console.log(`🚀 Server running on port ${env.port}`);
  });
} catch (e) {
  console.error("Server error:", e);
  mongoose.disconnect();
}
