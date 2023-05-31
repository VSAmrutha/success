import mongoose from 'mongoose'

const ProductSchema=new mongoose.Schema({
    productName:{
        type:String,
        required:true
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