
import React, { useContext } from "react";
import CommonKeyboard from "./CommonKeyBoard";
import { HardAppContext } from "../../HardMode";

function HardKeyboard() {
  const { onPlayerSelect, onPlayerEnter, onPlayerDelete, disabledLetters } =
    useContext(HardAppContext);

  return (
    <CommonKeyboard
      onPlayerSelect={onPlayerSelect}
      onPlayerEnter={onPlayerEnter}
      onPlayerDelete={onPlayerDelete}
      disabledLetters={disabledLetters}
      mode=""
    />
  );
}

export default HardKeyboard;