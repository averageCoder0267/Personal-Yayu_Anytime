import express from "express";
import { addProduct, getProductsByCategory, updateProduct } from "../controller/productControls.js";
const productRoutes = express.Router();

productRoutes.get("/getProductsByCategory", getProductsByCategory);
productRoutes.post("/addProduct", addProduct);
productRoutes.put("/updateProduct", updateProduct);

export default productRoutes;