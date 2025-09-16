import React from 'react'
import Usermenu from './Usermenu'

function Userinfo({user}) {
  return (
    <div>
        <h2>Userinfo</h2>
        <Usermenu user={user}/>
    </div>
  )
}

export default Userinfo