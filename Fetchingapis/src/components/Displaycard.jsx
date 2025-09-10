import React from 'react'

function Displaycard(props) {
  return (
    <div className='containerdiv'>
        <h3>{props.title}</h3>
        <p>{props.body}</p>
    </div>
  )
}

export default Displaycard