import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {registerUser} from "../../redux/slice"
const Dashboard = () => {
  const {status}=useSelector(state=>state.slice);
  console.log("yesssss!!!!",status)
  return (
    <div>
      Dashboard
    </div>
  )
}

export default Dashboard
