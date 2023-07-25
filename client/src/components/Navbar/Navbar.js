import React from 'react'
import "./Navbar.scss"
import logo from "../../assets/images/astir-wtb.png"
import { NavLink } from 'react-router-dom';
const Navbar = () => {
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
    </header>
  )
}

export default Navbar
