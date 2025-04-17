import express from "express";
import { sendMail } from "../controller/authControls.js";
const authRoutes = express.Router();

authRoutes.post("/send-mail", sendMail);

export default authRoutes;