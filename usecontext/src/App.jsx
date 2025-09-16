import React from 'react'
import { createContext } from 'react'
import ChildA from './components/ChildA';
import { useState } from 'react';

const UserContext = createContext(); 
const ThemeContext = createContext();
function App() { 
  const [user,setUser] = useState({name : 'Jai', age : 21}) 
  const [theme,setTheme] = useState('light');
  return (
    <div> 
      <UserContext.Provider value={user}>
        <ThemeContext.Provider value={{theme,setTheme}}>
          <div id='container' style={{backgroundColor : theme==='light' ? 'beige' : 'black'}}>
            <ChildA/>
          </div>
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App 
export {UserContext} 
export {ThemeContext}