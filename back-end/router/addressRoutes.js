import express from "express";
import { addUserAddress, deleteUserAddress, getUserAddress, updateUserAddress } from "../controller/addressControls.js";
const addressRoutes = express.Router();

addressRoutes.get("/getUserAddress", getUserAddress);
addressRoutes.post("/addUserAddress", addUserAddress);
addressRoutes.put("/updateUserAddress", updateUserAddress);
addressRoutes.delete("/deleteUserAddress", deleteUserAddress);

export default addressRoutes;