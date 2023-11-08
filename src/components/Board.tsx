// Board.tsx
import React from 'react';
import Square from './Square';

interface BoardProps {
  squares: string[];
  onClick: (index: number) => void;
}

function Board(props: BoardProps) {
  const renderSquare = (index: number) => {
    return (
      <>
      <Square
        value={props.squares[index]}
        onClick={() => props.onClick(index)}
      />
    {index}
      </>
    );
  };

  return (
    <div className="board">
      {Array(3)
        .fill(null)
        .map(
            (_, row) => (
          <div key={row} className="board-row">
            {Array(3)
              .fill(null)
              .map((_, col) => {
                const index = 3 * row + col;
                return (
                  <div key={index} className='square-container'>
                    {renderSquare(index)}
                  </div>
                );
              })}
          </div>)
        )}
    </div>
  );
}

export default Board;
