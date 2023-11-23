'use client'
import { useTodo } from "@/contexts/todo-context";
import { ToDo } from "@/types/todo";

export default function ToDoItem({ todo }: { todo: ToDo }) {
  const { removeTodo, toggleTodo } = useTodo()

  return (
    <div data-testid="todo-item" className="h-[90px] w-full flex items-center justify-between shadow-lg p-8 rounded-lg border border-[#1B4561]/40 hover:shadow-xl duration-300">

      <div className="flex items-center gap-16">
        <input
          type="checkbox"
          className="h-[30px] w-[30px] rounded-md border-2 border-[#011F33] outline-none cursor-pointer"
          checked={todo.completed}
          onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        />

        <div className="flex flex-col justify-center gap-1">
          <h2 data-testid="todo-title" className="text-xl font-bold">{todo.title}</h2>
        </div>
      </div>

      <button
        data-testeid="delete-button"
        type="button"
        className="bg-[#c04242] rounded-lg px-6 py-2  text-white hover:opacity-90"
        onClick={() => removeTodo(todo.id)}
      >
        Delete
      </button>

    </div>
  )
}