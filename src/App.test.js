import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Yearly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yearly/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Your Benefits', () => {
  render(<App />);
  const linkElement = screen.getByText(/Your Benefits/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Monthly', () => {
  render(<App />);
  const linkElement = screen.getByText(/Monthly/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders One-Off', () => {
  render(<App />);
  const linkElement = screen.getByText(/One-Off/i);
  expect(linkElement).toBeInTheDocument();
});