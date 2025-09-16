import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'

function ChildC() {
    const user = useContext(UserContext);
  return (
    <div>ChildC
         <p>data : {user.name}</p>
         <p> data 2 : {user.age}</p>
    </div>
  )
}

export default ChildC