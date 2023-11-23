import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ToDoItem from ".."



const mockRemoveTodo = jest.fn()
const mockToggleTodo = jest.fn()

jest.mock("@/contexts/todo-context", () => ({
  useTodo: () => ({
    removeTodo: mockRemoveTodo,
    toggleTodo: mockToggleTodo
  })
}))

const mockTodo = { id: 1, title: "Wash the dishes 🚿", completed: false }
describe('TodoItem', () => {

  describe('Render', () => {
    it('should render the checkbox', () => {
      //ARRANGE
      render(<ToDoItem todo={mockTodo} />)

      //ACT
      const checkbox = screen.getByRole('checkbox')

      //ASSERT
      expect(checkbox).toBeInTheDocument()
    })
    it('should render the title', () => {
      //ARRANGE
      render(<ToDoItem todo={mockTodo} />)

      //ACT
      const todoTitle = screen.getByTestId('todo-title')

      //ASSERT
      expect(todoTitle).toBeInTheDocument()
    })
    it('should render the delete button', () => {
      //ARRANGE
      render(<ToDoItem todo={mockTodo} />)

      //ACT
      const deleteButton = screen.getByRole('button', { name: 'Delete' })

      //ASSERT
      expect(deleteButton).toBeInTheDocument()
    })
  })

  describe('Behavior', () => {
    it('should call toggleTodo when checkbox is clicked', async () => {
      //ARRANGE
      render(<ToDoItem todo={mockTodo} />)

      //ACT
      const checkbox = screen.getByRole('checkbox')
      await userEvent.click(checkbox)

      //ASSERT
      expect(mockToggleTodo).toHaveBeenCalled()
    })

    it('should call removeTodo when delete button is clicked', async () => {
      //ARRANGE
      render(<ToDoItem todo={mockTodo} />)

      //ACT
      const deleteButton = screen.getByRole('button', { name: 'Delete' })
      await userEvent.click(deleteButton)

      //ASSERT
      expect(mockRemoveTodo).toHaveBeenCalled()
    })
  })
})