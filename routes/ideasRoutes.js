import {createIdea,getMyIdeas,updateIdea,addComment,updateComment} from "../controllers/ideasController.js"
import {authenticateUser} from "../middleware/authenticateUser.js"
import express from "express"

const router=express.Router()
router.route("/").get(authenticateUser,getMyIdeas)
router.route('/createIdea').post(authenticateUser,createIdea)
router.route('/updateIdea').post(authenticateUser,updateIdea)
router.route('/addComment').post(authenticateUser,addComment)
router.route('/updateComment').post(authenticateUser,updateComment)

export default router;