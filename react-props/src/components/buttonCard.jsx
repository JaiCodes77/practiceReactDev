import React from 'react'
import './buttonCard.css';

function ButtonCard(props) {
  return (
    <div>
        <button className='btn'>{props.name}</button>
    </div>
  )
}

export default ButtonCard