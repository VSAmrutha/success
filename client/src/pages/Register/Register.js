import {useEffect,useState} from 'react'
import {Provider} from "react-redux"
import store from "../../redux/store"
import { useDispatch,useSelector } from 'react-redux'
import {registerUser,loginUser} from "../../redux/slice"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import {Button,FormRow} from "../../components"
import "./Register.scss"
import logo from "../../assets/images/astir.png"
const Register = () => {
  const storeState=useSelector(state=>state.slice)
  const dispatch=useDispatch();
  const navigate=useNavigate()
  const [name,setName]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [isMember,setisMember]=useState(false)

    useEffect(()=>{
      if(storeState.user){
        console.log("in useefee");
        navigate("/")
      }
    },[storeState.user,navigate])
    const handleSubmit=(e)=>{
      e.preventDefault();
      const registerUserData={email,password,name}
      const loginUserData={email,password}
      if(isMember){
        dispatch(loginUser(loginUserData))
      }else{
        dispatch(registerUser(registerUserData))
      }
    }
    console.log("yesssss!!!!",storeState)
   
  return (
    //<Provider store={store}>
    <div className='registerWrapper'>
    <div className='registerLogo'>
      <img src={logo} alt='logo'/>
    </div>
      <div className='registerForm'>
      <form onSubmit={handleSubmit}>
     { !isMember && <FormRow type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)}/>}
      <FormRow type='email' name='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
      <FormRow type='password' name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
      <p>Already have an acoount?<Button type="button" className="simple" onClick={()=>setisMember(isMember=>!isMember)}> Click Here</Button> to{isMember?<span> Register</span>:<span> Login</span>} </p>
      <Button type="submit" >{isMember?`Login`:`Register`}</Button>
    
      </form>
      </div>
    </div>
    //</Provider>
  )
}

export default Register
