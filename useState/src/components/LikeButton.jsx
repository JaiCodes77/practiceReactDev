import React from 'react'
import { useState } from 'react'
import './LikeButton.css'

function LikeButton() { 

    const [count,setCount] = useState(0);

    const [text,setText] = useState();

  return (
    <div>  
        <input type="text" 
        placeholder='type here...'
        onChange={(e)=>{setText(e.target.value)}}
        />

        <p>texts : {text} </p>

        <p>number of likes : {count}</p>
        <button id='likeBtn' onClick={()=>{setCount(count+1)}}>♡</button>
        <button id='dislikeBtn' onClick={()=>{setCount(count-1)}}>𑁤</button>
    </div>
  )
}

export default LikeButton