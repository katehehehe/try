import React from "react";
import { Letter, HardLetter } from "./Letter";

const Row = ({ rowValue, isHard }) => {
  const LetterComponent = isHard ? HardLetter : Letter;
  const letterPositions = isHard ? [0, 1, 2, 3, 4, 5, 6] : [0, 1, 2, 3, 4, 5];

  return (
    <div className="row">
      {letterPositions.map((letterPosition) => (
        <LetterComponent
          key={letterPosition}
          letterPosition={letterPosition}
          value={rowValue}
        />
      ))}
    </div>
  );
};

export default Row;
