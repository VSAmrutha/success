import {UnauthenticatedError} from "../errors/index.js" 
import jwt from 'jsonwebtoken'
export const authenticateUser=(req,res,next)=>{
    const token=req.cookies.token
    if(token){
        try{
            const payload=jwt.verify(token,process.env.JWT_SECRET);
            req.user={userId:payload.userId}         
        }catch(err){
            throw new UnauthenticatedError("Not authorized..!!")
        }
        next()
    }else{
        throw new UnauthenticatedError("Not authorized..!!") 
    }  
}