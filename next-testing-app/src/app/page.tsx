'use client'
import React from 'react'
import TodoItem from '../TodoItem/TodoItem'
import AddTodo from '../AddTodo/AddTodo'

const Todos = () => {
  const [current, setCurrent] = React.useState('')
  const [todos, setTodos] = React.useState<string[]>([])

  function handleAdd(todo: string) {
    const trimmed = todo.trim()
    if (!trimmed) return
    setTodos(prev => [...prev, trimmed])
    setCurrent('')
  }

  return (
    <div className='space-y-4'>
      <TodoItem value={current} onChange={setCurrent} />
      <AddTodo todo={current} onAdd={handleAdd} />
      <ul className='mt-4 space-y-2'>
        {todos.map((t, i) => (
          <li key={i} className='text-white'>{t}</li>
        ))}
      </ul>
    </div>
  )
}

export default Todos