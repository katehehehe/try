

// export default App;
import './App.css';
import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DefualtMode from './DefaultMode';
import HardMode from './HardMode';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<DefualtMode />} />
          <Route path="/hardMode" element={<HardMode />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App