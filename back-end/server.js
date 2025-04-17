import { configDotenv } from "dotenv";
import express from "express";
import cors from "cors";
import connectDb from "./config/database.js";
import userRoutes from "./router/userRoutes.js";
import authRoutes from "./router/authRoutes.js";

const server = express();

configDotenv({ path: "./config/config.env" });
const port = process.env.port; //8009

connectDb();
server.use(cors());
server.get("/", (req, res) => {
    try {
        res.status(200).send("Server Created");
    } catch (error) {
        console.log(error);
    }
})
server.use("/auth", authRoutes);
server.use("/user", userRoutes);
server.listen(port, () => {
    console.log("Server Running..");
})