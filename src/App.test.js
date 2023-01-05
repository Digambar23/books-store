import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
const optionsList = [
  {
    "value": "jack",
    "label": "Jack"
  },
  {
    "value": "lucy",
    "label": "Lucy"
  },
  {
    "value": "disabled",
    "label": "Disabled"
  },
  {
    "value": "Yiminghe",
    "label": "yiminghe"
  }
];