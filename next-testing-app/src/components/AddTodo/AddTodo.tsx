'use client'
import React from 'react'

type Props = {}

const AddTodo = (props: Props) => {
  return (
    <div>
      <button className='cursor-pointer w-20 border-2 border-white rounded-lg border-dashed p-1 text-purple-400'>
      add Todo</button>
    </div>
  )
}

export default AddTodo