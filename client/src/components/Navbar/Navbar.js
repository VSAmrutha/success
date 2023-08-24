import React from 'react'
import "./Navbar.scss"
import { useSelector,useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/astir-wtb.png"
import { NavLink } from 'react-router-dom';
import {BiUserCircle} from "react-icons/bi"
import {HiOutlineLogout} from "react-icons/hi"
import {Button} from "../index"
import {logoutUser} from "../../redux/slice"
const Navbar = () => {
  const style = { color: "white", fontSize: "2.25rem" }
  const storeState=useSelector(state=>state.slice)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const logoutHandle=()=>{
    dispatch(logoutUser())
    navigate("/register")
  }
  return (
    <header className='navbarwrapper'>
      <div className="logo">
        <img src={logo} alt="logo"/>
      </div>
      <div className="navlinks">
        <ul>
          <li><NavLink to="/" className={({isActive})=>isActive?'nav-active':'nav'}>Home</NavLink></li>
          <li><NavLink to="/ideas" className={({isActive})=>isActive?'nav-active':'nav'}>Ideas</NavLink></li>
          <li><NavLink to="/diary" className={({isActive})=>isActive?'nav-active':'nav'}>Dairy</NavLink></li>
        </ul>
      </div>
      <div className="navUser">
        <div className="iconDiv">
          <BiUserCircle style={style}/>
          <p>{storeState.user?.name || "User"}</p>
        </div>
        <div className="iconDiv" onClick={logoutHandle}>
          <HiOutlineLogout style={style}/>
          <p>Logout</p>
        </div>
      </div>
    </header>
  ) 
}

export default Navbar
