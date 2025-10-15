import React, { useState } from 'react'

function App({initialCount}) { 
  const [count,setCount] = useState({initialCount})

  function increment(){
    setCount(count+1)
  } 

  function decrement(){
    setCount(count-1)
  } 

  function reset(){
    setCount(0)
  } 

  return (
    <div>
      <h3>{count}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App