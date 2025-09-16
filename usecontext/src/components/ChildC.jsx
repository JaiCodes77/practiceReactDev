import React from 'react'
import { UserContext,ThemeContext, CartContext } from '../App'
import { useContext } from 'react'

function ChildC() {
    const user = useContext(UserContext);
    const {theme,setTheme}= useContext(ThemeContext);  
    const {cart,setCart} = useContext(CartContext);

    function togglecolor(){
        if(theme==='light'){
            setTheme('dark');
        } else {
            setTheme('light');
        }
    } 

    
  return (
    <div>ChildC  
        <button onClick={togglecolor}>Change Theme</button>
         <p>data : {user.name}</p>
         <p> data 2 : {user.age}</p> 

         <h3> shopping cart : {cart[0].name}-{cart[0].price}</h3>
    </div>
  )
}

export default ChildC