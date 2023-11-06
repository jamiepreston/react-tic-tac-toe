import { render, shallow, screen, fireEvent } from '@testing-library/react';
import React from "react";
import App from './App';

describe('tic-tac-toe', () => {
  test('Alternates turn', () => {
    render(<App/>);
    const titleElement = screen.getByText(/Noughts and Crosses/i);
    expect(titleElement).toBeInTheDocument();

    // Play two moves
    fireEvent.click(screen.getByTestId('square0'));
    const turnElement1 = screen.getByText(/O's turn/i);
    expect(turnElement1).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('square1'));
    const turnElement2 = screen.getByText(/X's turn/i);
    expect(turnElement2).toBeInTheDocument();
  });

  test('Displays winner', () => {
    render(<App/>);
    const titleElement = screen.getByText(/Noughts and Crosses/i);
    expect(titleElement).toBeInTheDocument();

    // Play until winner
    fireEvent.click(screen.getByTestId('square0'));
    fireEvent.click(screen.getByTestId('square3'));
    fireEvent.click(screen.getByTestId('square1'));
    fireEvent.click(screen.getByTestId('square4'));
    fireEvent.click(screen.getByTestId('square2'));
    const winnerElement = screen.getByText(/X WINS!/i);
    expect(winnerElement).toBeInTheDocument();
  });
});
