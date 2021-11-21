import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import App from './App';

test('should render Sign In page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Sign In/i);
  expect(linkElement).toBeInTheDocument();
});

test('should NOT successfully login', async () => {
  render(<App />);
  await act(async () => {
    fireEvent.change(screen.getByLabelText(/User Name/i), {
      target: { value: 'a' },
    });

    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'b' },
    })
  });
  await act(async () => {
    // const submitButton = queryByTestId("submit-button")
    let element = document.querySelector("#submitButton");

    if (element) {
      fireEvent.click(element)
    }
  });

  const linkElement = screen.getByText(/Incorrect User Name and Password Combination/i);
  expect(linkElement).toBeInTheDocument();
});

test('should successfully login and display home page', async () => {
  render(<App />);
  await act(async () => {
    fireEvent.change(screen.getByLabelText(/User Name/i), {
      target: { value: 'foo' },
    });

    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'bar' },
    })
  });
  await act(async () => {
    // const submitButton = queryByTestId("submit-button")
    let element = document.querySelector("#submitButton");

    if (element) {
      fireEvent.click(element)
    }
  });
  const navBar = screen.getByText(/Logout/i);
  expect(navBar).toBeInTheDocument();
});

