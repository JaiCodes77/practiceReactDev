import React from 'react'

function Lists() { 

    const todos = [{id : 1001, name : 'walk the dog'},
                  {id : 1002, name : 'talk the dog'},
                  {id : 1003, name : 'get to the store'},
                  {id : 1004, name : 'complete your project'},
                  {id : 1005, name : 'track the money investments'}
                ] 

  return (
    <div> 
        <ul>
            {todos.map((todo)=> <li key='todo.id'>todo : {todo.name}</li>)}  
        </ul>
    </div>
  )
}

export default Lists