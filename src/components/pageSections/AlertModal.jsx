
import React, { createContext, useContext } from "react";
import { AppContext } from "../../DefaultMode";
import { HardAppContext } from "../../HardMode";

export const AlertModelContext = createContext();
export const HardAlertModelContext = createContext();

export const AlertModel = ({ message }) => {
    const {setModalOpen} = useContext(AppContext);
    return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={() => setModalOpen(false)}>Close</button>
      </div>
    </div>
  );
};

export const HardAlertModel = ({ message }) => {
    const {setHardModalOpen} = useContext(HardAppContext);
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <button onClick={() => setHardModalOpen(false)}>Close</button>
      </div>
    </div>
  );
};
