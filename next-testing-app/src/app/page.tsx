'use client'
import AddTodo from "@/components/AddTodo/AddTodo";
import Header from "@/components/Header/Header";
import TodoItem from "@/components/TodoItem/TodoItem";
import React from "react";

type Props = {};

const page = (props: Props) => {
  const [todo, setTodo] = React.useState<string>("");
  const [todos,setTodos]=React.useState<string[]>([]);

  function handleAdd(current: string) {
    const trimmed = current.trim();
    if (!trimmed) return;
    setTodos(prev => [...prev, trimmed]);
    setTodo("");
  }

  return (
    <div className="flex flex-col gap-6">
      <Header />
      <div className="flex flex-row justify-center items-center gap-2">
        <TodoItem value={todo} onChange={setTodo}/>
        <AddTodo todo={todo} onAdd={handleAdd}/>
      </div> 

     <div className="flex justify-center"><ul>
        {todos.map((item, index) => (
          <li key={index} className="text-purple-400">{item}</li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default page;
