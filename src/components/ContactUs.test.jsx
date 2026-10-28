import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import emailjs from 'emailjs-com';
import ContactUs from './ContactUs';

jest.mock('emailjs-com', () => ({ send: jest.fn() }));
beforeEach(() => jest.clearAllMocks());

function completeForm() {
  fireEvent.change(screen.getByLabelText(/your name/i), { target: { value: 'Test Visitor' } });
  fireEvent.change(screen.getByLabelText(/your email/i), { target: { value: 'visitor@example.com' } });
  fireEvent.change(screen.getByLabelText(/what’s on your mind/i), { target: { value: 'I would like to discuss a project.' } });
}

test('prevents duplicate sends, announces success, and clears a sent message', async () => {
  let resolveSend;
  emailjs.send.mockImplementation(() => new Promise((resolve) => { resolveSend = resolve; }));
  render(<ContactUs />);
  completeForm();
  const form = screen.getByRole('form', { name: 'Contact Lama' });
  fireEvent.submit(form);
  fireEvent.submit(form);
  expect(emailjs.send).toHaveBeenCalledTimes(1);
  expect(emailjs.send.mock.calls[0][2]).toEqual({
    name: 'Test Visitor', email: 'visitor@example.com', message: 'I would like to discuss a project.',
  });
  expect(screen.getByRole('button', { name: 'Sending…' })).toBeDisabled();
  expect(screen.getByLabelText(/your name/i)).toBeDisabled();
  await act(async () => resolveSend({ status: 200 }));
  expect(screen.getByRole('status')).toHaveTextContent('Your message has been sent');
  expect(screen.getByLabelText(/your name/i)).toHaveValue('');
  expect(screen.getByRole('button', { name: 'Message sent' })).toBeEnabled();
});

test('preserves a failed message and offers direct email and retry', async () => {
  emailjs.send.mockRejectedValueOnce(new Error('Network error')).mockResolvedValueOnce({ status: 200 });
  render(<ContactUs />);
  completeForm();
  fireEvent.submit(screen.getByRole('form', { name: 'Contact Lama' }));
  await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('couldn’t be sent'));
  expect(screen.getByLabelText(/what’s on your mind/i)).toHaveValue('I would like to discuss a project.');
  expect(screen.getByRole('link', { name: 'email me directly' })).toHaveAttribute('href', 'mailto:lamayousef1997@gmail.com');
  fireEvent.click(screen.getByRole('button', { name: 'Send message' }));
  await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Your message has been sent'));
  expect(emailjs.send).toHaveBeenCalledTimes(2);
});
