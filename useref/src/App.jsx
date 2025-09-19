import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function App() { 

  const [count,setCount] = useState(0); 
  
  let val = useRef(0);

  function handleIncrement(){ 
    val.current = val.current + 1;
    setCount(count+1);
  }
  return (
    <div>App 

      <button onClick={handleIncrement}>Increment</button> 

      <h4>count is : {count}</h4>
      <h5> val is : {val.current}</h5>
    </div>
  )
}

export default App