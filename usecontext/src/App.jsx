import React from 'react'
import { createContext } from 'react'
import ChildA from './components/ChildA';
import { useState } from 'react';

const UserContext = createContext(); 
function App() { 
  const [user,setUser] = useState({name : 'Jai', age : 21})
  return (
    <div> 
      <UserContext.Provider value={user}>
        <ChildA/>
      </UserContext.Provider>
    </div>
  )
}

export default App 
export {UserContext}