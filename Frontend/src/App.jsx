import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LoginPage from "./pages/loginPage.jsx";
import Navbar from './pages/navbar.jsx'; 
import Footer from './pages/footer.jsx'; 
import Signup from './pages/signUp.jsx'; 
import LandingPage from './pages/landingPage.jsx';  

import "./App.css";

function App() {
  return (
    <Router>
      <div id="root">
        <Navbar />
        <div className="main-content">
          <Routes>
          <Route path="/" element={<LandingPage />} /> {/* Home route for LandingPage */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
