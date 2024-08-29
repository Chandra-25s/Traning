import React from 'react';
import Square from './Square';// Import the Square component

function Board({ squares, onClick }) {
  return (
    <div>
      {[0, 1, 2].map((row) => (
        <div key={row} style={{ display: 'flex' }}>
          {[0, 1, 2].map((col) => {
            const i = row * 3 + col;
            return (
              <Square
                key={i}
                value={squares[i]}
                onClick={() => onClick(i)}
              />
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default Board;
