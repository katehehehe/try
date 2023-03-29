import "./App.css";
import React, { useState, useEffect, createContext } from "react";
import { GameBoardTemplate } from "./data/GameBoardTemplate";
import GameBoard from "./components/grid/GameBoard";
import Keyboard from "./components/inputKeyBoard/Keyboard";
import RulesPage from "./components/pageSections/RulesPage";
import Footer from "./components/pageSections/Footer";
import Navbar from "./components/pageSections/Navbar";
import GameEndPageWrapper from "./components/pageSections/GameEndPage";
import { generateWordSet } from "./data/wordSetGenerator";
// import Setting from "./components/pageSections/Setting";
import {Setting} from "./components/pageSections/Setting";
import wordFile from "./data/words.txt";
import {AlertModel} from "./components/pageSections/AlertModal";

export const AppContext = createContext();

function DefualtMode() {
  // The rule page pops up if this is the first time a user plays the game
  const maxLetter = 6;
  const [newGame, setNewGame] = useState(true);
  // set the board
  const [board, setBoard] = useState(GameBoardTemplate(6, 6));
  const [disabledLetters, setDisabledLetters] = useState([]);
  // Represents the current game's word
  const [correctWord, setCorrectWord] = useState("");

  // all the available words - inital state is empty Set
  const [words, setWords] = useState(new Set());

  // word set as an array
  const [wordArray, setWordArray] = useState([]);
  // sets the initial position for the cursor, it's at the first position
  const [cursorPos, setCursorPos] = useState({
    rowPosition: 0,
    letterPosition: 0,
  });

  // state for end of game page
  const [gameEnd, setGameEnd] = useState({ gameOver: false, playerWon: false });

  const [modalOpen, setModalOpen] = useState(false);

  // UseEffect to set words and generate new word from the array
  useEffect(() => {
    generateWordSet(wordFile).then((words) => {
      setWords(words.wordSet);
      setWordArray(words.wordArray);
      setCorrectWord(
        words.wordArray[Math.floor(Math.random() * words.wordArray.length)]
      );
    });
  }, []);
  console.log(correctWord);

  // Player moves
  // Adds letter to current board and then updates the current board position
  const onPlayerSelect = (letter) => {
    if (cursorPos.letterPosition === 6) return;
    const updatedBoard = [...board];
    updatedBoard[cursorPos.rowPosition][cursorPos.letterPosition] = letter;
    setBoard(updatedBoard);
    setCursorPos({
      ...cursorPos,
      letterPosition: cursorPos.letterPosition + 1,
    });
  };



  const onPlayerEnter = () => {
    // Cannot enter if player is not on the last letter position
    if (cursorPos.letterPosition !== 6) {
      // alert("The word is 6-letter long");
      setModalOpen({ isOpen: true, message: "The word is 6-letter long" });
      return;
    }
    // get the string of the current trial
    const wordGuess = board[cursorPos.rowPosition].join("").toLowerCase();

    // Check if word guessed is in the given list
    if (words.has(wordGuess)) {
      // If player presses enter on the last letter of the row, go to the next row
      setCursorPos({
        rowPosition: cursorPos.rowPosition + 1,
        letterPosition: 0,
      });
    } else {
      setModalOpen({ isOpen: true, message: "Not a word. Please try again." });
    }
    if (wordGuess === correctWord) {
      setGameEnd({ gameOver: true, playerWon: true });
      return;
    }
    if (cursorPos.rowPosition === 5) {
      setGameEnd({ gameOver: true, playerWon: false });
    }
  };

  const onPlayerDelete = () => {
    // Cannot delete if player is in the first letter position
    if (cursorPos.letterPosition === 0) return;
    // If player presses delete, go to the previous position and set tile to blank
    const boardInMotion = [...board];
    boardInMotion[cursorPos.rowPosition][cursorPos.letterPosition - 1] = "";
    setBoard(boardInMotion);
    setCursorPos({
      ...cursorPos,
      letterPosition: cursorPos.letterPosition - 1,
    });
  };

  return (
    <>
      <div>
        <Navbar gameMode="hard"/>
        <Setting />
        <section>
          <AppContext.Provider
            value={{
              board,
              setBoard,
              modalOpen,
              setModalOpen,
              newGame,
              setNewGame,
              cursorPos,
              setCursorPos,
              onPlayerEnter,
              onPlayerDelete,
              onPlayerSelect,
              correctWord,
              setCorrectWord,
              wordArray,
              disabledLetters,
              setDisabledLetters,
              gameEnd,
              setGameEnd,
            }}
          >
            {modalOpen.isOpen && (
              <AlertModel
                message={modalOpen.message}
                setModalOpen={setModalOpen}
              />
            )}
            <GameBoard numRows={maxLetter} numberOfLetters={maxLetter} />

            <Keyboard mode="default" />
            {newGame && <RulesPage />}
            {gameEnd.gameOver && <GameEndPageWrapper context={AppContext} />}
          </AppContext.Provider>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default DefualtMode;
