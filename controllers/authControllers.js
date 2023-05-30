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
    const token=user.createJwt()
    res.status(StatusCodes.CREATED).json({user:{name:user.name,email:user.email,lastName:user.lastName},token})
}
export const login=async(req,res,next)=>{
    const {email,password}=req.body;
    if(!email || !password){
        throw new BadRequestError('Please provide all values')
    }
    const user=await User.findOne({email}).select('+password')
    if(!user){
        throw new UnauthenticatedError('Please check your email id')
    }
    const isMatch=await user.comparePasswords(password);
    if(!isMatch){
        throw new UnauthenticatedError('Passwords do not match')
    }
    const token=user.createJwt()
    res.status(StatusCodes.OK).json({user:{name:user.name,email:user.email,lastName:user.lastName},token})
}

