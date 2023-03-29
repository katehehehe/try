import information from "../../assets/information.png";
import setting from "../../assets/setting.png";
import React, { useState } from "react";
import RulesPage from "./RulesPage";
import { AppContext } from "../../DefaultMode";
import { Setting, HardSetting } from "./Setting";

function Navbar({ gameMode }) {
  const [newGame, setNewGame] = useState(false);
  const [buttonPopUp, setButtonPopUp] = useState(false);

  const handleCloseSetting = () => {
    setButtonPopUp(false);
  };

  return (
    <div className="navbar">
      <img
        src={information}
        className="navbar-img left-img"
        alt="information-img"
        onClick={() => {
          setNewGame(true);
        }}
      />
      <h1 className="full-width">Wordle</h1>
      <img
        src={setting}
        className="navbar-img right-img"
        alt="setting-img"
        onClick={() => {
          setButtonPopUp(true);
        }}
      />
      {gameMode === "hard" ? (
        <Setting trigger={buttonPopUp} setTrigger={handleCloseSetting} />
        
      ) : (
        <HardSetting trigger={buttonPopUp} setTrigger={handleCloseSetting} />
      )}
      <AppContext.Provider value={{ newGame, setNewGame }}>
        {newGame && <RulesPage />}
      </AppContext.Provider>
    </div>
  );
}

export default Navbar;
