import React, { useState } from 'react'
import './ContactUs.css';

function ContactUs() { 

  const [inputs, setInputs] = useState({});

  function handleSubmit(e){
    e.preventDefault()
    alert(JSON.stringify(inputs));
  }

  function handleChange(e){
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values=>({...values, [name]: value}))
  } 

  return (
    <div className='containerdiv'> 
        <form onSubmit={handleSubmit}> 
            <label> 
                first Name : 
                <input type="text"  
                 name='firstname'
                 value={inputs.firstname || ''}
                 onChange={handleChange}/>
            </label> 

            <label>
                last Name : 
                <input type="text"
                name='lastname'
                value={inputs.lastname || ''}
                onChange={handleChange} />
            </label>  

            <label> 
              Email : 
              <input type="email" 
              name = 'email' 
              value = {inputs.email || ''}
              onChange={handleChange} />
            </label> 

            <label> 
              Password : 
              <input type="password"
              name = 'password'
              value={inputs.password || ''}
              onChange={handleChange}/> 
            </label> 

            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default ContactUs