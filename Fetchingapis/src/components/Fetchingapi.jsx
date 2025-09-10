import React, { useEffect, useState } from 'react'
import Displaycard from './Displaycard';

function Fetchingapi() { 
    const [data,setData] = useState();

    useEffect(() => {
      const fetchdata = ()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setData(data)) 
        .catch((error)=>console.error('error fetching data',error))
      }
    
      fetchdata();
    }, [])
    
  return (
    <div> 
        {
            data ? (data.map((e)=><Displaycard key={e.id} title={e.title} body={e.body}/>)): (<p> no Data</p>)
        }
    </div>
  )
}

export default Fetchingapi