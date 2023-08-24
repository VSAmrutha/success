import {useState,useEffect} from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {Button,FormRow} from "../../components"
import {createIdea,getIdeas} from "../../redux/slice"
import "./Ideas.scss"
const Ideas = () => {
  const storeState=useSelector(state=>state.slice)
  const [idea,setIdea]=useState("")
  const [comments,setComment]=useState("")
  const [displayIdea,setDisplayIdea]=useState(false)
  useEffect(()=>{
    dispatch(getIdeas())

  },[])
const dispatch=useDispatch()
  const handleSubmit=(e)=>{
    e.preventDefault();
    const data={idea,comments}
    console.log(data)
  dispatch(createIdea(data))
  }
  console.log(storeState,"ideas")
  return (
    <div className='ideasWrapper'>
  <div className='buttonDiv'> <Button className ="sec" onClick={()=>setDisplayIdea(displayIdea=>!displayIdea)}>{displayIdea?`Create Idea`:`Show My Ideas`}</Button></div> 
    {displayIdea ?<div></div>:<div className='ideaFirst'>
      <form  onSubmit={handleSubmit} >
        <FormRow type="textarea"  name="idea" value={idea} onChange={(e)=>setIdea(e.target.value)}/>
        <FormRow type="text"  name="comment" value={comments} onChange={(e)=>setComment(e.target.value)}/>
        <Button type="submit">Submit</Button>
      </form>
      </div>}
    </div>
  )
}

export default Ideas;