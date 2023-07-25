import {useEffect,useState} from 'react'
import axios from 'axios'
const Register = () => {
    useEffect(()=>{
        async function fetchdata(){
            const data=await axios("/api/v1/auth/test")
        console.log(data)
        }
        fetchdata()
    },[])
  return (
    <div>
      Register
    </div>
  )
}

export default Register
