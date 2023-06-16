import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please Provide Name'],
        minlength:3,
        maxlength:25,
        trim:true
    },
    lastName:{
        type:String,
        trim:true,
        default:'lastName'    
    },
    email:{
        type:String,
        required:[true, 'Please Provide email'],
        unique:true,
        validate:{
            validator:validator.isEmail,
            message:'Please Provide Valid Email'
        }
    },
    password:{
        type:String,
        required:[true, 'Please Provide password'],
        minlength:5,
        maxlength:25,
        select: false
    },
})
UserSchema.pre('save',async function(){
    if(!this.isModified('password')) return;
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt)
})
UserSchema.methods.createJwt=function(){
    return jwt.sign({userId:this._id},process.env.JWT_SECRET,{expiresIn:process.env.JWT_LIFETIME})
}
UserSchema.methods.comparePasswords=async function(currentPassword){
    const isMatch=await bcrypt.compare(currentPassword,this.password);
    return isMatch;
}
export default mongoose.model('User',UserSchema)