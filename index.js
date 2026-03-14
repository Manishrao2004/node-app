import express from "express"
import dotenv from "dotenv"
dotenv.config()
const PORT = process.env.PORT
const app = express()
app.set("view engine", "ejs")
app.set("views", "views")

import productRouter from "./routes/productRoute.js"
const startServer=()=>{
    app.listen(PORT,()=>{
        console.log(`Server started on port ${PORT}`);
    })
}

app.use("/admin/products", productRouter)
startServer()