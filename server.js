import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from "./db/connect.js"
import morgan from "morgan"
//needed in order to avoid adding try and catch blocks to the controller
import 'express-async-errors'
const app=express();
import cookieParser from 'cookie-parser'
//middlewares
import notFoundMiddleware from "./middleware/not-found.js"
import errorHandlerMiddleware from "./middleware/error-handler.js"
import authRouter from "./routes/authRoutes.js"
import ideaRouter from "./routes/ideasRoutes.js"
import productRouter from "./routes/ProductRoutes.js"
import cors from 'cors';

process.env.NODE_ENV !=='production' && app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
app.use(cors());
app.use("/api/v1/auth",authRouter)
app.use("/api/v1/idea",ideaRouter)
app.use("/api/v1/product",productRouter)
app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port=process.env.PORT || 5000;
const start=async()=>{
    try{
        await connectDB(process.env.MONGO_URL)
        app.listen(port,()=>{
        console.log(`Listening to Port ${port}`)
        })
    }catch(err){
        console.log(err)
    }
}
start();