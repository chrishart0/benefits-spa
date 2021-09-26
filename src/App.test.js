import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Benefits', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yearly/i);
  expect(linkElement).toBeInTheDocument();
});
