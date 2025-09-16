import React from 'react'
import { createContext } from 'react'
import ChildA from './components/ChildA';
import { useState } from 'react';

const UserContext = createContext(); 
const ThemeContext = createContext(); 
const CartContext = createContext();
function App() { 
  const [user,setUser] = useState({name : 'Jai', age : 21}) 
  const [theme,setTheme] = useState('light'); 

  const [cart,setCart] = useState([{name : "haier", price : 2400}, {name : "huwawei", price : 4000}])
  return (
    <div> 
      <UserContext.Provider value={user}> 
        <CartContext.Provider value={{cart,setCart}}>
        <ThemeContext.Provider value={{theme,setTheme}}>
          <div id='container' style={{backgroundColor : theme==='light' ? 'beige' : 'black'}}>
            <ChildA/>
          </div>
        </ThemeContext.Provider> 
        </CartContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default App 
export {UserContext} 
export {ThemeContext} 
export {CartContext}