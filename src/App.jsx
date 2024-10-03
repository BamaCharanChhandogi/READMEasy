import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import Home from './components/Home';
import GitHubProfileGenerator from './hooks/GitHubProfileGenerator';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
       <Navbar/>
        <div className="container mx-auto px-4 py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profileGenerator" element={<GitHubProfileGenerator />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
