import { StatusCodes } from "http-status-codes"

export const getProduct=async (req,res,next)=>{
    res.status(StatusCodes.OK).json({msg:"success...!!"})
}