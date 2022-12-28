import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from './routes/Home'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
      </Routes>
    </Router>
  );
}

export default App;