'use client'
import React from 'react'

type Props = {
  value: string
  onChange: (value: string) => void
}

const TodoItem = ({ value, onChange }: Props) => {
  return (
    <div className='flex justify-center items-center'>
      <input
        className="p-2 border-white border-2 border-dashed rounded-lg w-100 text-purple-400 bg-transparent"
        type="text"
        placeholder='write your todo'
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </div>
  )
}

export default TodoItem
