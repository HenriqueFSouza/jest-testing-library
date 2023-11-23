'use client'

import { useTodo } from '@/contexts/todo-context'
import { useState } from 'react'
export default function AddTodo() {
  const [todoTitle, setTodoTitle] = useState<string>('')
  const { addTodo } = useTodo()

  function handleAddNewToDo() {
    const newTodo = {
      id: Math.random(),
      title: todoTitle,
      completed: false,
    }

    addTodo(newTodo)
    setTodoTitle('')
  }


  return (
    <div className="flex align-center gap-2">
      <input
        autoFocus
        type="text"
        value={todoTitle}
        className="h-[45px] w-[70%] rounded-md  outline-none px-4 text-lg text-[#011F33]"
        placeholder="New ToDo..."
        onChange={(e) => setTodoTitle(e.target.value)}
      />

      <button
        type="button"
        className="bg-[#257db8] rounded-lg px-6 w-[30%] text-white hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={!todoTitle || todoTitle === ''}
        onClick={handleAddNewToDo}
      >
        Add new <strong>ToDo</strong>
      </button>

    </div>
  )
}