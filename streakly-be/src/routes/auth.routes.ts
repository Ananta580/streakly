import { AuthController } from "controllers/auth.controller";
import express from "express";
import { container } from "tsyringe";

const authRouter = express.Router();

const authController = container.resolve(AuthController);

authRouter.get("/signup", authController.signup);

export default authRouter;
