import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./navbar/Navbar";
import Home from "./home/Home";
import Section from "./page/Section";
import SearchResults from "./page/SearchResults";
import Error from "./error/Error";
import Footer from "./footer/Footer";

function App() {
  // Set container to stop body from scrolling when nav menu is open
  const container = React.useRef();

  return (
    <div className="container" ref={container}>
      <Router>
        <Navbar container={container} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/section/:sectionName" element={<Section />} />
          <Route path="/search/:query" element={<SearchResults />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
