import React from 'react'

function ContactUs() {
  return (
    <div> 
        <form>
            <label> 
                first Name : 
                <input type="text"  
                 name='firstname'
                 value={''}/>
            </label> 

            <label>
                last Name : 
                <input type="text"
                name='lastname'
                value={''} />
            </label>  

            <label>
              <input type="text" 
              name = 'email' 
              value = {''} />
            </label> 

            <label>
              <input type="text"
              name = 'password'
              value={''} />
            </label>
            <p>first name : {} , last name : {}</p>
        </form>
    </div>
  )
}

export default ContactUs