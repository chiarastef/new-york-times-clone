import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Section from "./pages/Section";
import SearchResults from "./pages/SearchResults";
import Error from "./pages/Error";

function App() {
  return (
    <div className="container">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/section/:id" element={<Section />} />
          <Route path="/search/:id" element={<SearchResults />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
