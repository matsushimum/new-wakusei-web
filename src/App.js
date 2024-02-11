import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Component/Home/Home.js";
import FAQ from "./Component/FAQ/FAQ.js";
import Mission from "./Component/Mission/Mission.js";
import Kiyaku from "./Component/Kiyaku/Kiyaku.js";

import "./CSS/App-PC.css";

function App() {
  return (
    <div className="app">
      <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
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
