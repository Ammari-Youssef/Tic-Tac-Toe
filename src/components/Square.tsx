import React from 'react';

interface SquareProps{
    value:string|null,
    onClick:() => void 
}

function Square(props:SquareProps) {
  return (
    <button className="square" onClick={props.onClick} title='board square'>
      {props.value}
    </button>
  );
}

export default Square;
