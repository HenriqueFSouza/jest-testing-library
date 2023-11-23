'use client'
import { createContext, useState, useContext, useEffect } from "react";
import { ToDo } from "@/types/todo";


interface TodoContextProps {
  todos: ToDo[];
  addTodo: (todo: ToDo) => void;
  removeTodo: (id: number) => void;
  toggleTodo: (id: number, checked: boolean) => void;
}

const TodoContext = createContext({} as TodoContextProps);

export function ToDoProvider({ children }: { children: React.ReactNode }) {
  const [todos, setTodos] = useState<ToDo[]>([]);

  useEffect(() => {
    const loadTodos = async () => {
      const data = await localStorage.getItem('nextTodoList')

      if (data) {
        setTodos(JSON.parse(data))
      }
    }

    loadTodos()
  }, [])

  async function updateLocalStorage(todos: ToDo[]) {
    await localStorage.setItem('nextTodoList', JSON.stringify(todos))
  }

  async function addTodo(todo: ToDo) {
    const newTodo = [...todos, todo]
    setTodos(newTodo)

    await updateLocalStorage(newTodo)
  }

  async function removeTodo(id: number) {
    const newTodos = todos.filter(todo => todo.id !== id);

    setTodos(newTodos);

    await updateLocalStorage(newTodos)
  }

  async function toggleTodo(id: number, checked: boolean) {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = checked
      }

      return todo;
    })

    setTodos(newTodos);

    await updateLocalStorage(newTodos)
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggleTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodo = () => useContext(TodoContext)