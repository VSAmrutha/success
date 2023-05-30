import User from "../models/User.js";
import {UnauthenticatedError,BadRequestError,NotFoundError} from "../errors/index.js"
import {StatusCodes} from 'http-status-codes'
export const register=async(req,res,next)=>{
    const {name,email,password}=req.body
    if(!name || !email || !password){
        throw new BadRequestError('Please provide all values')
    }
    const userAlreadyExits=await User.findOne({email})
    if(userAlreadyExits){
        throw new BadRequestError('Email already exists')
    }
    const user=await User.create({name,email,password})
    res.status(StatusCodes.CREATED).json(user)
}

