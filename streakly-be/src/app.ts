import "reflect-metadata";
import cors from "cors";
import express from "express";
import privateRoutes from "routes/private.routes";
import publicRoutes from "routes/public.routes";
import { secondsToFormat } from "utilities/datetime.helper";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) =>
  res.status(200).json({
    status: "Healthy",
    message: "Streakly server is healthy",
    timestamp: new Date().toISOString(),
    uptime: secondsToFormat(Math.floor(process.uptime())),
  })
);
app.use("/api", publicRoutes);
app.use("/api/secure", privateRoutes);

export default app;
