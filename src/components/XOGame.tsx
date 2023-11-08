import React, { useState } from "react";
import Board from "./Board";

export default function XOGame() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [XPlayerScore, setXPlayerScore] = useState(0);
  const [OPlayerScore, setOPlayerScore] = useState(0);
  const winner = calculateWinner(squares);

  const handleClick = (index: number) => {
    // If a square is already filled or there's a winner, do nothing
    if (squares[index] || winner) return;

    const newSquares = [...squares];
    newSquares[index] = currentPlayer;
    setSquares(newSquares);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
  };

  function calculateWinner(squares: any) {
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

    for (const [a, b, c] of lines) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        // All squares got the same letter X/O then return any of the squares don't matter
        return squares[a];
      }
    }

    return null;
  }

  const reset = ()=>{
  setCurrentPlayer("X");
  setSquares([null]);
  }
  let status;

  if (winner) {
    status = `Winner: ${winner}`;
    // if(winner==="X") setXPlayerScore(XPlayerScore + 1)
    // else setOPlayerScore(OPlayerScore+1)

  } else if (squares.every((square) => square)) {
    status = "It's a draw !";
  } else {
    status = `Next player: ${currentPlayer}`;
  }

  return (
    <div>
      <div className="status">
       <span> {status}</span>
       <br />
       <span>Player X {XPlayerScore} - {OPlayerScore} Player O </span>
        <Board squares={squares} onClick={handleClick} />
      </div>
        <button onClick={reset} className="play-again">Play Again</button>
    </div>
  );
}
