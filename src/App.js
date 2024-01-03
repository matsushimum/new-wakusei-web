import React from 'react';

import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";

import Home from './Component/Home/Home.js';
import FAQ from './Component/FAQ/FAQ.js';
import Mission from './Component/Mission/Mission.js';
import Kiyaku from './Component/Kiyaku/Kiyaku.js';

import './App.css';

function App(){
  return(
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/Mission" element={<Mission />} />
          <Route path="/Kiyaku" element={<Kiyaku />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;