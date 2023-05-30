import mongoose from 'mongoose';
import validator from 'validator';
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'Please Provide Name'],
        minlength:3,
        maxlength:25,
        trim:true
    },
    lastname:{
        type:String,
        trim:true        
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
    },
})
export default mongoose.model('User',UserSchema)