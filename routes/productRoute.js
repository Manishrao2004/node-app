import express from "express"
import { showProducts } from "../controllers/productController"
const ProductRouter= express.Router()

productRouter.get("/", showProducts)

export default productRouter