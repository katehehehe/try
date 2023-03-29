import React, { useContext, useEffect } from "react";
import { AppContext } from "../../DefaultMode";
import { HardAppContext } from "../../HardMode";
const Letter = ({ letterPosition, value }) => {
  const { board, correctWord, cursorPos, setDisabledLetters } =
    useContext(AppContext);
  const letter = board[value][letterPosition];

  const letterState = useLetterState(
    letter,
    letterPosition,
    value,
    correctWord,
    cursorPos
  );

  useEffect(() => {
    if (letterState === "incorrect") {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [cursorPos.rowPosition, letter, letterState, setDisabledLetters]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};

const HardLetter = ({ letterPosition, value }) => {
  const { board, correctWord, cursorPos, setDisabledLetters } =
    useContext(HardAppContext);
  const letter = board[value][letterPosition];

  const letterState = useLetterState(
    letter,
    letterPosition,
    value,
    correctWord,
    cursorPos
  );

  useEffect(() => {
    if (letterState === "incorrect") {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [cursorPos.rowPosition, letter, letterState, setDisabledLetters]);

  return (
    <div className="letter" id={letterState}>
      {letter}
    </div>
  );
};


function useLetterState(letter, letterPosition, value, correctWord, cursorPos) {
  const lowerCaseLetter = letter ? letter.toLowerCase() : "";

  const correctLetter = correctWord[letterPosition] === lowerCaseLetter;

  const partialCorrect =
    !correctLetter && letter !== "" && correctWord.includes(lowerCaseLetter);

  let letterState;

  if (cursorPos.rowPosition > value) {
    if (correctLetter) {
      letterState = "correct";
    } else if (partialCorrect) {
      letterState = "partial";
    } else {
      letterState = "incorrect";
    }
  }

  return letterState;
}




export { Letter, HardLetter };
