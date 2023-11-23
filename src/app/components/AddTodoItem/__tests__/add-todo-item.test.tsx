import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ToDoItem from ".."
import AddTodo from ".."



const mockAddTodo = jest.fn()

jest.mock("@/contexts/todo-context", () => ({
  useTodo: () => ({
    addTodo: mockAddTodo,
  })
}))

const mockTodo = { id: 1, title: "Wash the dishes 🚿", completed: false }
describe('TodoItem', () => {

  describe('Render', () => {
    it('should render the input', () => {
      //ARRANGE
      render(<AddTodo />)

      //ACT
      const input = screen.getByPlaceholderText('New ToDo...')

      //ASSERT
      expect(input).toBeInTheDocument()
    })
    it('should render a disabled button', () => {
      //ARRANGE
      render(<AddTodo />)

      //ACT
      const button = screen.getByRole('button', { name: 'Add new ToDo' })

      //ASSERT
      expect(button).toBeDisabled()
    })
  })

  describe('Behavior', () => {
    it('should be able to add text to the input', async () => {
      //ARRANGE
      render(<AddTodo />)

      //ACT
      const input = screen.getByPlaceholderText('New ToDo...')
      await userEvent.type(input, 'Clean the house')

      //ASSERT
      expect(input).toHaveValue('Clean the house')
    })

    it('should enable the button when have text', async () => {
      //ARRANGE
      render(<AddTodo />)

      //ACT
      const input = screen.getByPlaceholderText('New ToDo...')
      await userEvent.type(input, 'Clean the house')
      const button = screen.getByRole('button', { name: 'Add new ToDo' })

      //ASSERT
      expect(button).toBeEnabled()
    })

    it('should call addTodo when "Add new ToDo" button is clicked', async () => {
      //ARRANGE
      render(<AddTodo />)

      //ACT
      const input = screen.getByPlaceholderText('New ToDo...')
      await userEvent.type(input, 'Clean the house')
      const button = screen.getByRole('button', { name: 'Add new ToDo' })
      await userEvent.click(button)

      //ASSERT
      expect(mockAddTodo).toHaveBeenCalled()
    })
  })
})