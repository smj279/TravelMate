import React from "react";
import { useState } from 'react';
import { Routes, Route, Link, Navigate } from "react-router-dom";

import Navbar from './pages/navbar.jsx'; 
import Footer from './pages/footer.jsx'; 
import LandingPage from './pages/landingPage.jsx';

import './App.css';
import './styles/main.css';


function App() {
  return (
    <div>     
      <Navbar /> 
      <Routes>

        <Route path="/" element={<LandingPage />} /> 

      </Routes>
      <Footer />
    
    </div>
  );
}

export default App;
