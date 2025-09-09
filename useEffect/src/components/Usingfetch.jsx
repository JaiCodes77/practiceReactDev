import React from 'react'
import { useEffect,useState } from 'react'

function Usingfetch() { 

    const [data,setData] = useState();
    const [loading,setLoading] = useState(true); 

    useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => {
        setData(data)
        setLoading(false)
      });
    }, [])
    
  return (
    <div> 
        { loading ? (<h1>Loading...</h1>): (<ul>
            {data.map(posts=>{<li>{posts.title}</li>})}
        </ul>)}
    </div>
  )
}

export default Usingfetch