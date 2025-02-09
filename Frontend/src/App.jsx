import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/loginPage.jsx";
//import LandingPage from "./pages/landingPage.jsx"; // Import LandingPage

import "./App.css";

function App() {
  return (
    <Router>
      <div>     
        <Routes>
          {/* Show LoginPage by default */}
          <Route path="/login" element={<LoginPage />} />
          
          {/* Other routes */}
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
