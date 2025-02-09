import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../allCss/landingPage.css"; // Import the external CSS file

const LandingPage = () => {
  useEffect(() => {
    console.log("LandingPage component rendered");
  }, []);

  return (
    <div className="landing-container">
      <div className="landing-box">
        <h1 className="landing-title">Welcome to TravelMate</h1>
        <p className="landing-description">
          Discover the best travel destinations and packages tailored just for you.
        </p>
        
      </div>
    </div>
  );
};

export default LandingPage;
