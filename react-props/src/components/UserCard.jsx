import React from 'react';
import './UserCard.css';

function UserCard(props) {
  return (
    <div>
        <h1>{props.heading}</h1>
        <img src={props.image} alt="alt image" />
        <p className='content'>{props.content}</p>
        <div className='footer'>{props.footer}</div>
        {props.children}
    </div>
  )
}

export default UserCard