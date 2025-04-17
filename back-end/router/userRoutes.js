import express from "express";
import { addUser, deleteAllUsers, getAllUsers } from "../controller/userControls.js";
const userRoutes = express.Router();

userRoutes.get("/getAllUsers", getAllUsers);
userRoutes.post("/addUser", addUser);
userRoutes.delete("/deleteAllUsers", deleteAllUsers);

export default userRoutes;