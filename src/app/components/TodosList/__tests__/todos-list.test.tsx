import { render, screen } from "@testing-library/react"
import TodosList from ".."

jest.mock("@/contexts/todo-context", () => ({
  useTodo: () => ({
    todos: [
      { id: 1, title: "Wash the dishes 🚿", completed: false },
      { id: 2, title: "Do the laundry 🧺", completed: false },
      { id: 3, title: "Take out the trash 🗑️", completed: true },
      { id: 4, title: "Make the bed 🛏️", completed: false },
      { id: 5, title: "Feed the cat 🐈", completed: false },
    ]
  })
}))
describe('TodosList', () => {

  // it('should render "No todos yet!" when there are no todos', () => {
  //   // IT REQUIRES THE MOCK VARIABLE "todos" TO BE EMPTY
  //   //ARRANGE
  //   render(<TodosList />)

  //   //ACT
  //   const message = screen.getByText('No todos yet!')

  //   //ASSERT
  //   expect(message).toBeInTheDocument()
  // })
  it('should render the todos list with the correct number of items', () => {
    //ARRANGE
    render(<TodosList />)

    //ACT
    const todosList = screen.getAllByTestId('todo-item')

    //ASSERT
    expect(todosList.length).toBe(5)
  })
})