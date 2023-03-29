export const GameBoardTemplate = (numRows, numCols) => {
    const defaultBoard = [];
    for (let i = 0; i < numRows; i++) {
      const row = new Array(numCols).fill("");
      defaultBoard.push(row);
    }
    return defaultBoard;
  };