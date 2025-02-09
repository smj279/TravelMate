import React from 'react';
import '../allCss/navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#">TravelMate</a>
      </div>
      <div className="nav-container">
        <ul className="nav-links">
          <li>
            <a href="#">Destination</a>
            <a href="#">Travel-Packages</a>
            <a href="#">Contact</a>
          </li>
        </ul>
        <div className="auth-links">
          <a href="#">Login</a>
          <a href="#">Sign-Up</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
