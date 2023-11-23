import AddTodo from './components/AddTodoItem'
import TodosList from './components/TodosList'

export default function Home() {
  return (
    <div className='w-full mt-4 h-[calc(100vh-110px)] px-12 py-8 flex flex-col bg-[#E6F2FA]/80 rounded-md text-[#011F33]  overflow-y-auto'>
      <AddTodo />

      <TodosList />
    </div>
  )
}
