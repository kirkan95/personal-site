import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Aboutpage from "./aboutpage.js";
import Portfoliopage from "./portfoliopage.js";
import Contactpage from "./contactpage.js";
import "../../styles/navbar.css";

export default function Navbar() {
  return (
    <Router>
      <div className="navbar">
        <Link to="/about">about me</Link>
        <Link to="/portfolio">portfolio</Link>
        <Link to="/contact">contact</Link>
      </div>
      <Routes>
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/portfolio" element={<Portfoliopage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </Router>
  );
}
