import React from "react";
import { Link } from "react-router-dom";
import "../allCss/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">TravelMate</Link> {/* Link to LandingPage */}
      </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <Link to="/destination">Destination</Link>
            <Link to="/travel-packages">Travel-Packages</Link>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
        <div className="auth-links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign-Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
