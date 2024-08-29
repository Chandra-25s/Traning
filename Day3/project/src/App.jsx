import React, { useState } from 'react';
import './App.css';

const calculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};

const Square = ({ value, onClick }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
);

const Board = ({ squares, onClick }) => (
  <div>
    {[0, 1, 2].map((row) => (
      <div key={row} className="board-row">
        {[0, 1, 2].map((col) => (
          <Square
            key={row * 3 + col}
            value={squares[row * 3 + col]}
            onClick={() => onClick(row * 3 + col)}
          />
        ))}
      </div>
    ))}
  </div>
);

const App = () => {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  const current = history[stepNumber];
  const winner = calculateWinner(current);
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (current.every((square) => square !== null)) {
    status = 'Draw!';
  } else {
    status = `Next player: ${xIsNext ? 'X' : 'O'}`;
  }

  const handleClick = (i) => {
    if (current[i] || winner) return;

    const newHistory = history.slice(0, stepNumber + 1);
    const newSquares = current.slice();
    newSquares[i] = xIsNext ? 'X' : 'O';

    setHistory(newHistory.concat([newSquares]));
    setStepNumber(newHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={current} onClick={handleClick} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <button onClick={() => jumpTo(0)}>Restart Game</button>
      </div>
    </div>
  );
};

export default App;
