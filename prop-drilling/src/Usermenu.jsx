import React from 'react'

function Usermenu({user}) {
  return (
    <div>
        <h3>Usermenu</h3>
        <p>{user.name}</p>
        <p>{user.age}</p>
    </div>
  )
}

export default Usermenu