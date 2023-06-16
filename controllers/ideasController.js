import Ideas from '../models/Ideas.js';
import {UnauthenticatedError,BadRequestError,NotFoundError} from "../errors/index.js"
import {StatusCodes} from 'http-status-codes'
export const createIdea=async(req,res)=>{
    const {idea,comment}=req.body;
    if(!idea){
        throw new BadRequestError('Please provide value')
    }
    const comments=[]
    comments.push({content:comment})
    console.log("req.user.userId",req.user.userId)
    const ideas=await Ideas.create({idea,comments:[...comments],createdBy:req.user.userId})
    res.status(StatusCodes.OK).json({ideas})
}
export const updateIdea=async(req,res)=>{
    const {idea,ideaId}=req.body;
    if(!idea || !ideaId){
        throw new BadRequestError('Please provide value')
    }
    const ideaDb=await Ideas.findOne({_id:ideaId})
    console.log("ideaDb",ideaDb)
    if(!ideaDb ){
        throw new NotFoundError(`No Idea with id ${ideaId}`)
    }
    const ideaUpdate=await Ideas.findOneAndUpdate({_id:ideaId},{idea},{new:true,runvalidators:true})
    res.status(StatusCodes.OK).json({ideaUpdate})
}
export const getMyIdeas=async(req,res)=>{
   const ideas=await Ideas.find({createdBy:req.user.userId})
    res.status(StatusCodes.OK).json({ideas})
}
export const addComment=async(req,res)=>{
    const {addComment,ideaId}=req.body;
    if(!addComment || !ideaId){
        throw new BadRequestError('Please provide value')
    }
    const ideaDb=await Ideas.findOne({_id:ideaId})
    if(!ideaDb ){
        throw new NotFoundError(`No Idea with id ${ideaId}`)
    }
    const i=await Ideas.updateOne(
        {_id: ideaId }, { $push: { "comments": { "content": addComment }}} 
     )
    res.status(StatusCodes.OK).json({i})
}
export const updateComment=async(req,res)=>{
    const {updateComment,commentId,ideaId}=req.body;
    if(!updateComment ||!commentId || !ideaId){
        throw new BadRequestError('Please provide value')
    }
    const ideaDb=await Ideas.findOne({_id:ideaId})
    if(!ideaDb ){
        throw new NotFoundError(`No Idea with id ${ideaId}`)
    }
    const i=await Ideas.updateOne(
        { _id: ideaId, "comments._id": commentId },
        { $set: { "comments.$.content" : updateComment} }
     )
    res.status(StatusCodes.OK).json({i})
}