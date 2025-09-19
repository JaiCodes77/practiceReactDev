import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import Stopwatch from './Stopwatch';

function App() { 

  const [count,setCount] = useState(0); 
  
  let val = useRef(0); 

  let btnRef = useRef();

  function handleIncrement(){ 
    val.current = val.current + 1;
    setCount(count+1);
  } 

  function handleColor(){
    btnRef.current.style.backgroundColor = 'red';
  } 

  function handleColor2(){
    btnRef.current.style.backgroundColor = 'purple';
  }
  return (
    <div>App 

      <button ref={btnRef} onClick={handleIncrement}>Increment</button>  

      <button onClick={handleColor}>color to red</button> 
      <button onClick={handleColor2}>color to purple</button>

      <h4>count is : {count}</h4>
      <h5> val is : {val.current}</h5> 

      <div>
        <Stopwatch/>
      </div>
    </div>
  )
}

export default App