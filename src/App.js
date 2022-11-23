import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./Home";
import Section from "./Section";
import SearchResults from "./SearchResults";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/:id" element={<Section />} />
          <Route path="/search/:id" element={<SearchResults />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
