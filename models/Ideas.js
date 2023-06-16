import mongoose from "mongoose";
const IdeasSchema=mongoose.Schema({
    idea:{
        type:String,
        required:true,
        trim:true
    },
    //check : need to work on updatedAt
    comments:[{content:String,createdAt:Date, updatedAt:Date}],
    createdBy:{
       type:mongoose.Types.ObjectId,
       ref:'User',
       required:[true,'Please Provide User']
    }
},{timestamps:true})

export default mongoose.model('Ideas',IdeasSchema)
