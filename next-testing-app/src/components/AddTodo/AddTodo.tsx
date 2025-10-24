'use client'
import React from 'react'

type Props = {
  todo: string
  onAdd: (todo: string) => void
}

const AddTodo = ({ todo, onAdd }: Props) => {
  return (
    <div>
      <button
        className={`cursor-pointer w-40 h-10 border-2 border-white rounded-lg px-3 ${!todo ? 'opacity-50 pointer-events-none' : ''}`}
        onClick={() => onAdd(todo)}
      >
        Add Todo
      </button>
    </div>
  )
}

export default AddTodo
