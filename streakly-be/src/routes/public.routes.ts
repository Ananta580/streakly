import express from "express";
import authRoutes from "./auth.routes";

const publicRouter = express.Router();

publicRouter.use("/auth", authRoutes);

export default publicRouter;
