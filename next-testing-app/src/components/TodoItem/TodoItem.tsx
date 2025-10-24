'use client'
import React from 'react'

type Props = {}

const TodoItem = (props: Props) => { 
  

function todochange(){
   
  }
  
  return (
    <div className='flex justify-center items-center'>
      <input className="p-2 border-white border-2 border-dashed rounded-lg w-100 text-purple-400 bg-transparent"
      type="text"
      placeholder='write your todo'
      onChange={todochange} />
    </div>
  )
}

export default TodoItem