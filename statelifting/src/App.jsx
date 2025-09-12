import React, { useState } from 'react'
import Todoadd from './components/todoadd';
import Tododisplay from './components/tododisplay';

function App() { 

  const [todo,setTodo] = useState();
  return (
    <div> 
      <Todoadd onChange={setTodo}/>
      <Tododisplay value={todo}/>
    </div>
  )
}

export default App