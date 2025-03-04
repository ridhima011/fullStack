// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";  // Import Loader
import Start from "./components/start";  // Import Start page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loader />} />  {/* Loader page */}
        <Route path="/start" element={<Start />} />  {/* Start page */}
      </Routes>
    </Router>
  );
}

export default App;
