import {authenticateUser} from "../middleware/authenticateUser.js"
import express from "express";
import {getProduct} from "../controllers/productController.js"
const router=express.Router();
router.route("/getProducts").get(authenticateUser,getProduct)

export default router;