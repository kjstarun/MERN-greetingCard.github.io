import { Router } from "express";
import { authenticateUser, registerUser } from "./users.controller.js";

const authRouter = Router();

authRouter.post("/login", authenticateUser);
authRouter.post("/register", registerUser);

export default authRouter
