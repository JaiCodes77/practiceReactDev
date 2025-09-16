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

    function addToCart(){
        const newItem = {
            name : 'lenovo',
            id : 2,
            price : 5600
        } 
        setCart(prevCart=> [...prevCart, newItem])
    } 
    
    function deleteFromCart(){
        setCart(prevCart=> prevCart.length > 0 ? prevCart.slice(0,prevCart.length-1):prevCart)
    } 

  return (
    <div>ChildC  
        <button onClick={togglecolor}>Change Theme</button>
         <p>data : {user.name}</p>
         <p> data 2 : {user.age}</p> 

            <button onClick={addToCart}>Add Item</button> 
            <button onClick={deleteFromCart}>Delete Item</button>
         <h3> shopping cart : {cart.map(item=> <li key={item.id}>{item.name}-{item.price}</li>)}</h3>
    </div>
  )
}

export default ChildC