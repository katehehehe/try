import React from 'react';
import { useNavigate } from "react-router-dom";

export function Setting(props) {
  const navigate = useNavigate();
  return (props.trigger) ? (
    <div className='setting-container'>
      <button className="close-button setting-btn" onClick={() => props.setTrigger(false)}> X </button>
      <h2 className="setting-font">
        Setting
      </h2>
      <button onClick={() => navigate("/hardMode")} className="difficulty-button">
        Hard Mode
      </button>
    </div>
  ) : "";
}

export function HardSetting(props) {
  const navigate = useNavigate();
  return (props.trigger) ? (
    <div className='setting-container'>
      <button className="close-button setting-btn" onClick={() => props.setTrigger(false)}> X </button>
      <h2 className="setting-font">
        Setting
      </h2>
      <button onClick={() => navigate("/")} className="difficulty-button">
        Default Mode
      </button>
    </div>
  ) : "";
}
