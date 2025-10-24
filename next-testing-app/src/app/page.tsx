import AddTodo from '@/components/AddTodo/AddTodo'
import Header from '@/components/Header/Header'
import TodoItem from '@/components/TodoItem/TodoItem'
import React from 'react'


type Props = {}

const page = (props: Props) => {
  const [todo, setTodo] = React.useState<string>('');
  
  return (
    <div className='flex flex-col gap-6'><Header/>
   <div className='flex flex-row justify-center items-center gap-2'><TodoItem/>
    <AddTodo/></div>
    </div>
  )
}

export default page