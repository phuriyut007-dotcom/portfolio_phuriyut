import { fireEvent, render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

beforeEach(() => {
  window.localStorage.clear()
})

test('renders the portfolio home and toggles the color theme', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )

  expect(screen.getByRole('heading', { name: 'Portfolio' })).toBeInTheDocument()
  expect(screen.getByRole('heading', { name: 'Computer Engineering' })).toBeInTheDocument()

  const toggle = screen.getByRole('button', { name: 'Switch to dark mode' })
  fireEvent.click(toggle)

  expect(screen.getByRole('button', { name: 'Switch to light mode' })).toHaveAttribute('aria-pressed', 'true')
  expect(window.localStorage.getItem('portfolio-theme')).toBe('dark')
})
