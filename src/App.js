import React from 'react';
import "./lista.css";
import List from './components/List'
import SocialMedia from "./components/SocialMedia";
import { Routes, Route, Link } from "react-router-dom";
import Timer from './components/Timer';


import Form from './components/Form';
import Home from './components/Home';
import Login from './pages/Login/Login'
import Users from './components/User';

import User from "./components/User";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/countdowm" element={<SocialMedia />} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/form" element={<Form />} />
        <Route path="/user" element={<User />} />
      </Routes>
    </div>
  );
}

export default App;
