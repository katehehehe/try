
import React from "react";
import Row from "./Row";

const GameBoard = ({ isHard }) => {
  const numRowValues = isHard ? 5 : 6;
  const rowValues = Array.from({ length: numRowValues }, (_, i) => i);

  return (
    <div className="game-board">
      <div className="board">
        {rowValues.map((rowValue, index) => (
          <Row key={index} rowValue={rowValue} isHard={isHard} />
        ))}
      </div>
    </div>
  );
};

export default GameBoard;

