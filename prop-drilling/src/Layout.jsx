import React from 'react'
import Userinfo from './Userinfo'

function Layout({user}) {
  return (
    <div>
        <h1>Layout</h1>
        <Userinfo user={user}/>
    </div>
  )
}

export default Layout