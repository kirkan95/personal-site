import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Aboutpage from "./aboutpage.js";
import Portfoliopage from "./portfoliopage.js";
import Contactpage from "./contactpage.js";
import "../../styles/navbar.css";

let aboutActiveStyle = {
  color: "#A89B9D",
  textDecoration: "none",
};

let portfolioActiveStyle = {
  color: "#B6CCA1",
  textDecoration: "none",
};

let contactActiveStyle = {
  color: "#D0D38F",
  textDecoration: "none",
};

export default function Page() {
  return (
    <Router>
      <div className="navbar">
        <NavLink
          to="/about"
          style={({ isActive }) =>
            isActive
              ? aboutActiveStyle
              : { color: "#fff", textDecoration: "none" }
          }
        >
          about me
        </NavLink>
        <NavLink
          to="/portfolio"
          style={({ isActive }) =>
            isActive
              ? portfolioActiveStyle
              : { color: "#fff", textDecoration: "none" }
          }
        >
          portfolio
        </NavLink>
        <NavLink
          to="/contact"
          style={({ isActive }) =>
            isActive
              ? contactActiveStyle
              : { color: "#fff", textDecoration: "none" }
          }
        >
          contact
        </NavLink>
      </div>
      <Routes>
        <Route index element={<Aboutpage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/portfolio" element={<Portfoliopage />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </Router>
  );
}
