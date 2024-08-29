import React, { useState } from 'react';
import Board from '../Board'; // Import the Board component

function App() {
  // Initialize the state for the game
  const [history, setHistory] = useState([{ squares: Array(9).fill(null) }]);
  const [stepNumber, setStepNumber] = useState(0);
  const [xIsNext, setXIsNext] = useState(true);

  // Get the current squares from history
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  // Handle click on a square
  const handleClick = (i) => {
    const historyCopy = history.slice(0, stepNumber + 1);
    const currentCopy = historyCopy[historyCopy.length - 1];
    const squares = currentCopy.squares.slice();

    // Ignore click if game is won or square is filled
    if (winner || squares[i]) return;

    // Update squares based on current player
    squares[i] = xIsNext ? 'X' : 'O';
    setHistory(historyCopy.concat([{ squares }]));
    setStepNumber(historyCopy.length);
    setXIsNext(!xIsNext);
  };

  // Jump to a specific step in history
  const jumpTo = (step) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };

  // Determine the status of the game
  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div>
      <h1>Tic Tac Toe</h1>
      <div>{status}</div>
      <Board squares={current.squares} onClick={handleClick} />
      <button onClick={() => jumpTo(0)}>Start New Game</button>
      <ol>
        {history.map((_, move) => (
          <li key={move}>
            <button onClick={() => jumpTo(move)}>
              {move ? `Go to move #${move}` : 'Go to game start'}
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

// Function to calculate winner
function calculateWinner(squares) {
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
}

export default App;
