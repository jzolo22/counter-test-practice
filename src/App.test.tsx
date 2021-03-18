import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';
// import { render } from '@testing-library/dom'

test('renders the correct content', () => {

  const { getByText, getByLabelText } = render(<App />)

  getByText("Counter") // same as line below
  // expect(getByText("Counter")).not.toBeNull()
});

test("allows user to increment counter", () => {
  const { getByText } = render(<App />)

  fireEvent.click(getByText("Click me to Increment"))
  getByText(1)

})

test("allows user to decrement counter", () => {
  const { getByText } = render(<App />)

  fireEvent.click(getByText("Click me to Decrement"))
  fireEvent.click(getByText("Click me to Decrement"))
  getByText(-2)

})

test("allows user to reset counter", () => {
  const { getByText } = render(<App />)

  fireEvent.click(getByText("Click me to Reset"))
  getByText(0)

})



