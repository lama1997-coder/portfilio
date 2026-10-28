import { fireEvent, render, screen, within } from '@testing-library/react';
import App from './App';

test('exposes the portfolio, working section destinations, and the existing resume', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Thoughtful code.');
  expect(screen.getByRole('heading', { name: 'MoneyMov' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Humam' })).toBeInTheDocument();
  const nav = screen.getByRole('navigation', { name: 'Main navigation' });
  ['Work', 'About', 'Contact'].forEach((name) => {
    const link = within(nav).getByRole('link', { name, exact: true });
    expect(document.querySelector(link.getAttribute('href'))).toBeInTheDocument();
  });
  expect(screen.getByRole('link', { name: 'Download my CV' }))
    .toHaveAttribute('href', expect.stringContaining('Lama-Abdellatif-Yousif-Hussein-Full-Stack.pdf'));
});

test('navigation closes after choosing a section and with Escape', () => {
  render(<App />);
  const nav = screen.getByRole('navigation', { name: 'Main navigation' });
  const button = within(nav).getByRole('button', { name: 'Open navigation' });
  fireEvent.click(button);
  expect(button).toHaveAttribute('aria-expanded', 'true');
  fireEvent.click(within(nav).getByRole('link', { name: 'About', exact: true }));
  expect(button).toHaveAttribute('aria-expanded', 'false');
  fireEvent.click(button);
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(button).toHaveAttribute('aria-expanded', 'false');
  expect(button).toHaveFocus();
});
