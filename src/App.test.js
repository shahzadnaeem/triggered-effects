import { render, screen } from '@testing-library/react';
import App from './App';

test('renders h1 with Effects!', () => {
  render(<App />);
  const h1El = screen.getByText(/Effects!/i);
  expect(h1El).toBeInTheDocument();
});

test('renders 20 numbered Boxes', () => {
  render(<App />);
  const numsBoxes = screen.getAllByText(/Box - [0-9]+/);
  expect(numsBoxes.length).toBe(20)
});

test('renders 1 Fixed box', () => {
  render(<App />);
  const numsBoxes = screen.getAllByText(/Box - Fixed/);
  expect(numsBoxes.length).toBe(1)
});
