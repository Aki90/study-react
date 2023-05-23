import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  render(<App />);
  const textElement = screen.getByText('testing');
  expect(textElement).toBeInTheDocument();
});
