
// import React, {useContext} from "react";
// import { AppContext } from "../../DefaultMode";
// import { HardAppContext } from "../../HardMode";

// const Key = ({ key, className, letter, disabled, props }) => {
//   // Subscribes to context created in App.js and uses the states previously defined
//   const { mode } = props || {};
//   const context = mode === "default" ? AppContext : HardAppContext;
//   const { onPlayerSelect, onPlayerEnter, onPlayerDelete } = useContext(context);


//   // Onclick when player selects a key on keyboard
//   const inputLetter = () => {
//     if (letter === "ENTER") {
//       onPlayerEnter();
//     } else if (letter === "←") {
//       onPlayerDelete();
//     } else {
//       onPlayerSelect(letter);
//     }
//   };

//   return (
//     <div
//       className={className}
//       key={key}
//       onClick={inputLetter}
//       id={disabled ? "disabled" : ""}
//     >
//       {letter}
//     </div>
//   );
// };

// export default Key;


// import React, { useContext } from "react";
// import { AppContext } from "../../DefaultMode";

// const Key = ({ key, className, letter, disabled }) => {
//   // Subscribes to context created in App.js and uses the states previously defined
//   const { onPlayerSelect, onPlayerEnter, onPlayerDelete } =
//     useContext(AppContext);

//   // Onclick when player selects a key on keyboard
//   const inputLetter = () => {
//     if (letter === "ENTER") {
//       onPlayerEnter();
//     } else if (letter === "←") {
//       onPlayerDelete();
//     } else {
//       onPlayerSelect(letter);
//     }
//   };

//   return (
//     <div
//       className={className}
//       key={key}
//       onClick={inputLetter}
//       id={disabled ? "disabled" : ""}
//     >
//       {letter}
//     </div>
//   );
// };

// export default Key;

import React, { useContext } from "react";
import { AppContext } from "../../DefaultMode";
import { HardAppContext } from "../../HardMode";

const Key = ({ key, className, letter, disabled, mode }) => {
  // Subscribes to context created in App.js and uses the states previously defined
  const context = mode === "default" ? AppContext : HardAppContext;
  // const { onPlayerSelect, onPlayerEnter, onPlayerDelete } = useContext(context);
  const contextValue = useContext(context);

  // Check if the contextValue is undefined
  if (!contextValue) {
    console.warn(`Unable to find context for mode: ${mode}`);
    return null;
  }

  const { onPlayerSelect, onPlayerEnter, onPlayerDelete } = contextValue;

  // Onclick when player selects a key on keyboard
  const inputLetter = () => {
    if (letter === "ENTER") {
      onPlayerEnter();
    } else if (letter === "←") {
      onPlayerDelete();
    } else {
      onPlayerSelect(letter);
    }
  };

  return (
    <div
      className={className}
      key={key}
      onClick={inputLetter}
      id={disabled ? "disabled" : ""}
    >
      {letter}
    </div>
  );
};

export default Key;
