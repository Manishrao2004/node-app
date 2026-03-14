import productModel from "../models/productModel.js";

const showProducts = async ()=> {
    const products = await productModel.find()
    res.render("products/index",{products})
}

export {showProducts}