'use client'
import React from 'react'

type Props = {
  todo:string;
  onAdd: (current:string)=>void;
}

const AddTodo = ({todo,onAdd}: Props) => {
  return (
    <div>
      <button className='cursor-pointer w-20 border-2 border-white rounded-lg border-dashed p-1 text-purple-400'
      onClick={()=>onAdd(todo)}>
      add Todo</button>
    </div>
  )
}

export default AddTodo