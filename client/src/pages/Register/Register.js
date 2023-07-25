import {useEffect,useState} from 'react'
import axios from 'axios'
import {Button,FormRow} from "../../components"
import "./Register.scss"
import logo from "../../assets/images/astir.png"
const Register = () => {
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
    useEffect(()=>{
        async function fetchdata(){
            const data=await axios("/api/v1/auth/test")
        console.log(data)
        }
        fetchdata()
    },[])
    const handleChange=(e)=>{
      console.log(e.target.name)
    }
  return (
    <div className='registerWrapper'>
    <div className='registerLogo'>
      <img src={logo} alt='logo'/>
    </div>
      <div className='registerForm'>
      <form>
      <FormRow type='text' name='name' value={name} handleChange={(e)=>setName(e.target.value)}/>
      <FormRow type='email' name='email' value={email} handleChange={(e)=>setName(e.target.value)}/>
      <FormRow type='password' name='password' value={email} handleChange={(e)=>setName(e.target.value)}/>
      <Button >Register</Button>
      </form>
      </div>
    </div>
  )
}

export default Register
