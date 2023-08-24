import User from "../models/User.js";
import {UnauthenticatedError,BadRequestError,NotFoundError} from "../errors/index.js"
import {StatusCodes} from 'http-status-codes'
const oneDay=1000*60*60*24
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
    res.cookie('token',token,{httpOnly:true,expires:new Date(Date.now() + oneDay)})
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
    res.cookie('token',token,{httpOnly:true,expires:new Date(Date.now() + oneDay)})
    res.status(StatusCodes.OK).json({user:{name:user.name,email:user.email,lastName:user.lastName},token})
}
export const updateUser=async(req,res,next)=>{
    const {email, name, lastName}=req.body;
    if(!name || !email || !lastName){
        throw new BadRequestError('Please provide all values')
    }
    const user=await User.findOne({email})
    user.lastName=lastName
    user.email=email
    user.name=name
    await user.save()
    res.status(StatusCodes.OK).json({user})
}
export const test=(req,res)=>{
    res.status(StatusCodes.OK).json({msg:"hello"})
}


