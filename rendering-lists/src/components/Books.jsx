import React from 'react'

function Books() { 
    const booklist = [{id : 101, name : 'harry potter'},
                     {id : 102, name : 'Sapiens'},
                     {id : 103, name : 'underground world'},
                     {id : 104, name : 'solo leveling'},
                     {id : 105, name : 'demon slayer'}
                    ] 

  return (
    <div>
       {booklist.length > 0 ? (<ul>
        {booklist.map((book)=><li>{book.name}</li>)}
       </ul>) :
       (<p>no books available!</p>)}
    </div>
  )
}

export default Books