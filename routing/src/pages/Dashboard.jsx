import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function Dashboard() {
  return (
    <div>
        <button><NavLink to='reports'>Reports</NavLink></button> 
        <Outlet/>
    </div>
  )
}

export default Dashboard