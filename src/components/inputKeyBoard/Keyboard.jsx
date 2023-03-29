
import React, { useContext } from "react";
import CommonKeyboard from "./CommonKeyBoard";
import { AppContext } from "../../DefaultMode";

function Keyboard() {
const { onPlayerSelect, onPlayerEnter, onPlayerDelete, disabledLetters } =
useContext(AppContext);

return (
<CommonKeyboard
   onPlayerSelect={onPlayerSelect}
   onPlayerEnter={onPlayerEnter}
   onPlayerDelete={onPlayerDelete}
   disabledLetters={disabledLetters}
   mode="default"
 />
);
}

export default Keyboard;

