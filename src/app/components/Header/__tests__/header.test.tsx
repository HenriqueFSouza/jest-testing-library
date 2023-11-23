import { render, screen } from '@testing-library/react'
import Header from '..'
import "@testing-library/jest-dom"

describe('Header', () => {

  it('should render the "Next ToDo" text and two lins', () => {
    //ARRANGE
    render(<Header />)

    //ACT
    const header = screen.getByRole('heading', { name: "Next ToDo" })
    const github = screen.getByTestId('github-link')
    const linkedin = screen.getByTestId('linkedin-link')

    //ASSERT
    expect(header).toBeInTheDocument()
    expect(github).toBeInTheDocument()
    expect(linkedin).toBeInTheDocument()

  })
})