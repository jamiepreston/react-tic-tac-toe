import { render, shallow, screen, fireEvent } from '@testing-library/react';
import React from "react";
import App from './App';

describe('App.js', () => {
  test('Displays title', () => {
    render(<App/>);
    const titleElement = screen.getByText(/Noughts and Crosses/i);
  });
});
