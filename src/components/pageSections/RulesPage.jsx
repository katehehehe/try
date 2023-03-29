import React, { useContext, createContext } from "react";
import { AppContext } from "../../DefaultMode";
import word from "../../assets/word.webp";

export const RuleContext = createContext();

const RulesPage = () => {

  const { setNewGame } = useContext(AppContext);

  return  (
    <div className="rule-container">
      <div >
        <button className = "close-button"   
        onClick={() => {setNewGame(false);}}
        > X </button>      
      </div>
    <h4 className="rule-header">How To Play</h4>
    <p className="paragraph-margin">
      Guess the <span className="bold-small-font">WORDLE</span> in 6 tries.
    </p>
    <p className="paragraph-margin">
    • Each guess must be a valid 6-letter word.
    </p>
    <p className="paragraph-margin">
    • The color of the tiles will change to show how close your guess was to the word.
    </p>
    <hr />

    <img
      className="rules-img"
      src={word}
      alt=""
    />
     <p className="small-para-margin">
      <span className="bold-small-para">V</span> is in the word and
      in the correct spot.
    </p>
    <p className="small-para-margin">
      <span className="bold-small-para">E, U</span> are in the word but
      is in the wrong spot.
    </p>
    <p className="small-para-margin">
      <span className="bold-small-para">L, I, A</span> are not in the word
      in any spot.
    </p>
    <hr />
    <div className = "start-game-button-container">
      <button className="start-game-button"
        onClick={() => {
          setNewGame(false);
        }}
      >
        Start Game
      </button> 
    </div>
  </div>
) ;
};


export default RulesPage;
