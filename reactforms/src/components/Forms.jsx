import React, { useState } from 'react'

function Forms() { 

    const [name,setName] = useState();

    function handleChange(e){
        setName(e.target.value);
    } 

    function handleSubmit(e){
        e.preventDefault();
        alert(name);
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label> Enter your name :- 
                <input type="text" 
                value={name}
                onChange={handleChange} />
            </label> 
            <button type='submit'>Submit</button>
        </form> 
        <p>{name}</p>
    </div>
  )
}

export default Forms