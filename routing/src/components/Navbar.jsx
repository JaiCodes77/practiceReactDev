import React from 'react'
import {NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
       <button><NavLink to='/'>Home</NavLink></button>
      <button><NavLink to='/about'>About</NavLink></button>
      <button><NavLink to='/contact'>Contact</NavLink></button> 
      <button><NavLink to='/dashboard'>Dashboard</NavLink></button>
    </div>
  )
}

export default Navbar