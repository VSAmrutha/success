import mongoose from 'mongoose'
//ame
description
price
category
brand
image_url
const ProductSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        enum:['men','women','kids'],
        required:true
    },
    ratings:{
        type:Number,
        default:1
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
export default mongoose.model('Product',ProductSchema)