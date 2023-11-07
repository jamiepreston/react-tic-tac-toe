import {
  Alert,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import React from "react";
import findWinner from "../utils/findWinner";

const initialBoard = Array(9).fill(null);
const initialScoreBoard = {'X': 0, 'O': 0}
const findNewPlayer = (player) =>
  player === 'X' ? 'O' : 'X';

// Partials
const winnerPartial = (winner, resetButton) =>
  <Col sm={4}>
    <Alert key="success" variant="success" className="fw-bold" data-testid='winnerText'>
      {winner} WINS!
    </Alert>
    <Button variant="success" onClick={resetButton}>Reset</Button>
  </Col>

function Square({value, onSquareClick, index}) {
  return <button className="square" onClick={onSquareClick} data-testid={`square${index}`}>{value}</button>;
}

export default function Board() {
  const [board, setBoard] = React.useState(initialBoard);
  const [scoreBoard, setScoreBoard] = React.useState(initialScoreBoard);
  const [player, setPlayer] = React.useState('X');
  const [winner, setWinner] = React.useState(null);

  function onSquareClick(value) {
    if(winner) { return }
    const newBoard = board.slice();
    newBoard[value] = player;
    setBoard(newBoard);

    const theWinner = findWinner(newBoard);
    setWinner(theWinner);
    setPlayer(findNewPlayer(player));

    // Increment scoreboard
    if (theWinner) {
      const newScoreBoard = {...scoreBoard};
      newScoreBoard[theWinner]++;
      setScoreBoard(newScoreBoard);
    }
  }
  function resetBoard() {
    setBoard(initialBoard);
    setPlayer(winner);
    setWinner(null);
  }


  const winnerText = winner ?  winnerPartial(winner, () => resetBoard()) : '';

  return (
    <>
      <Row>
        <Col sm={1}>X: {scoreBoard['X']}</Col>
        <Col sm={1}>O: {scoreBoard['O']}</Col>
      </Row>
      <Row>
        <Col sm={3}>
          <div className="board-row">
            <Square index={0} value={board[0]} onSquareClick={() => onSquareClick(0)} />
            <Square index={1} value={board[1]} onSquareClick={() => onSquareClick(1)} />
            <Square index={2} value={board[2]} onSquareClick={() => onSquareClick(2)} />
          </div>
          <div className="board-row">
            <Square index={3} value={board[3]} onSquareClick={() => onSquareClick(3)} />
            <Square index={4} value={board[4]} onSquareClick={() => onSquareClick(4)} />
            <Square index={5} value={board[5]} onSquareClick={() => onSquareClick(5)} />
          </div>
          <div className="board-row">
            <Square index={6} value={board[6]} onSquareClick={() => onSquareClick(6)} />
            <Square index={7} value={board[7]} onSquareClick={() => onSquareClick(7)} />
            <Square index={8} value={board[8]} onSquareClick={() => onSquareClick(8)} />
          </div>
        </Col>
        {winnerText}
      </Row>
      <Row>
        <strong>{player}'s turn</strong>
      </Row>
    </>
  );
}
