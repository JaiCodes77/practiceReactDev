import React from 'react'
import { UserContext,ThemeContext } from '../App'
import { useContext } from 'react'

function ChildC() {
    const user = useContext(UserContext);
    const {theme,setTheme}= useContext(ThemeContext); 

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
    </div>
  )
}

export default ChildC