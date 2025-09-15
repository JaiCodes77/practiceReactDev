import React from 'react'
import {NavLink } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <div className='containerdiv'> 
      <div className='sidebar'> 
        <div className='sidebarcontent'>
       <button><NavLink to='/'>Home</NavLink></button>
      <button><NavLink to='/about'>About</NavLink></button>
      <button><NavLink to='/contact'>Contact</NavLink></button> 
      <button><NavLink to='/dashboard'>Dashboard</NavLink></button>
      </div>
      </div> 
      <div className='maincontent'> 
       
      </div>
    </div>
  )
}

export default Navbar