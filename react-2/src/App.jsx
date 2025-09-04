import React, { useEffect, useState } from 'react'

function App() { 

    const [count,setCount] = useState(0);

    useEffect(()=>{
      document.title = `Count : ${count}`
    },[count])

  return (
    <div> 
      <button onClick={()=>setCount(c=>c+1)}>Count : {count}</button>
    </div>
  )
}

export default App