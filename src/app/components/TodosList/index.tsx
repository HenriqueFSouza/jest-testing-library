'use client'

import { useTodo } from "@/contexts/todo-context"
import ToDoItem from "../TodoItem"

export default function TodosList() {
  const { todos } = useTodo()
  return (
    <div className="mt-12 flex flex-col gap-6">
      {todos.length === 0 && (
        <h2 className="text-xl font-bold text-center opacity-50">No todos yet!</h2>
      )}
      {todos.map(todo => (
        <ToDoItem key={todo.id} todo={todo} />
      ))
      }
    </div>
  )
}