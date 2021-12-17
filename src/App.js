import React from 'react';
import "./lista.css";
import List from './components/List'
import SocialMedia from "./components/SocialMedia";
import { Routes, Route, Link } from "react-router-dom";
import Timer from './components/Timer';
import Count from './components/Count';
// import CountdownOld from "./components/Countdowm";
// import Countdown from './components/Countdown.js';
import Javascript from './components/Javascript';
import Form from './components/Form';



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SocialMedia />} />
        <Route path="list" element={<List />} />
        <Route path="timer" element={<Timer />} />
        <Route path="counter" element={<Count />} />
        {/* <Route path="countdown" element={<CountdownOld />} /> */}
        {/* <Route path="contador" element={<Countdown />} /> */}
        <Route path="javascript" element={<Javascript />} />
        <Route path="form" element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
