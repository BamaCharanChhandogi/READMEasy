import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import Home from './components/Home';
import GitHubProfileGenerator from './hooks/GitHubProfileGenerator';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 shadow-lg">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-3xl font-bold text-purple-400 hover:text-purple-300 transition duration-300">
              READMEasy
            </Link>
            <div className="flex items-center space-x-8">
              <div className="flex space-x-6">
                <NavLink 
                  to="/" 
                  className={({ isActive }) => 
                    isActive ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-purple-400 transition duration-300"
                  }
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/profileGenerator" 
                  className={({ isActive }) => 
                    isActive ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-purple-400 transition duration-300"
                  }
                >
                  Profile Generator
                </NavLink>
              </div>
              <a 
                href="https://github.com/BamaCharanChhandogi/READMEasy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition duration-300"
              >
                <FaGithub className="w-7 h-7" />
              </a>
            </div>
          </div>
        </nav>
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