import Key from "./Key";
import React, { useCallback, useEffect } from "react";
import { acceptedLetters } from "../../data/possibleLetters";

function CommonKeyboard(props) {
  const row1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const row2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const row3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const { onPlayerSelect, onPlayerEnter, onPlayerDelete, disabledLetters } =
    props;

  const onKeyPress = useCallback(
    (event) => {
      if (event.key === "Enter") {
        onPlayerEnter();
      } else if (event.key === "Backspace" || event.key === "Delete") {
        onPlayerDelete();
      } else {
        acceptedLetters.forEach((letter) => {
          if (event.key === letter) {
            onPlayerSelect(letter.toUpperCase());
          }
        });
      }
    },
    [onPlayerDelete, onPlayerEnter, onPlayerSelect]
  );

  useEffect(() => {
    // Listens for keydown events
    document.addEventListener("keydown", onKeyPress);
    return () => {
      document.removeEventListener("keydown", onKeyPress);
    };
  }, [onKeyPress]);

  return (
    <div className="keyboard" onKeyDown={onKeyPress}>
      <div className="keyboard-row">
        {row1.map((key) => {
          return (
            <Key
              keyVal={key}
              letter={key}
              className="key"
              disabled={disabledLetters.includes(key)}
              mode={props.mode}
            />
          );
        })}
      </div>

      <div className="keyboard-row">
        {row2.map((key) => {
          return (
            <Key
              keyVal={key}
              letter={key}
              className="key"
              disabled={disabledLetters.includes(key)}
              mode={props.mode}
            />
          );
        })}
      </div>
      <div className="keyboard-row">
        <Key letter={"ENTER"} className="key big-key" mode={props.mode} />
        {row3.map((key) => {
          return (
            <Key
              keyVal={key}
              letter={key}
              className="key"
              disabled={disabledLetters.includes(key)}
              mode={props.mode}
            />
          );
        })}
        <Key letter={"←"} className="key big-key" mode={props.mode} />
      </div>
    </div>
  );
}

export default CommonKeyboard;
