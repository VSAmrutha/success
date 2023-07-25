
import express from 'express';
import {register,login,updateUser,test} from "../controllers/authControllers.js"
const router=express.Router();
router.route("/register").post(register)
router.route("/login").post(login)
router.route("/updateUser").post(updateUser)
router.route("/test").get(test)

export default router;