import express from "express";
import { addProduct, getProductsByCategory } from "../controller/productControls.js";
const productRoutes = express.Router();

productRoutes.get("/getProductsByCategory", getProductsByCategory);
productRoutes.post("/addProduct", addProduct);

export default productRoutes;