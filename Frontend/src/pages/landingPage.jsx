import React from "react";
import { Link } from "react-router-dom";
import "../allCss/landingPage.css"; // Import the external CSS file

const LandingPage = () => {
  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1 className="landing-title">Welcome to TravelMate</h1>
        <p className="landing-description">
          Discover the best travel destinations and packages tailored just for you.
        </p>
        <Link to="/login">
          <button className="landing-button">Login</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
