import React, { Suspense, lazy, memo, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { FaGithub, FaBars } from 'react-icons/fa';

const Home = lazy(() => import('./components/Home'));
const GitHubProfileGenerator = lazy(() => import('./hooks/GitHubProfileGenerator'));

const MemoizedHome = memo(Home);
const MemoizedGitHubProfileGenerator = memo(GitHubProfileGenerator);

const getNavLinkClass = ({ isActive }) =>
  isActive ? 'text-purple-400 font-semibold' : 'text-gray-300 hover:text-purple-400 transition duration-300';

function App() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <nav className="bg-gray-800 shadow-lg relative">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            {/* Brand Name */}
            <Link to="/" className="text-3xl font-bold text-purple-400 hover:text-purple-300 transition duration-300">
              READMEasy
            </Link>
            {/* Dropdown Button */}
            <div className="md:hidden">
              <button onClick={toggleDropdown} className="text-gray-300 focus:outline-none">
                <FaBars className="w-7 h-7" />
              </button>
            </div>

            <div className="hidden md:flex space-x-6 items-center">
              <NavLink to="/" className={getNavLinkClass}>
                Home
              </NavLink>
              <NavLink to="/profileGenerator" className={getNavLinkClass}>
                Profile Generator
              </NavLink>
              <a
                href="https://github.com/BamaCharanChhandogi/READMEasy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition duration-300 flex items-center space-x-2"
              >
                <span>GitHub</span>
                <FaGithub className="w-7 h-7" />
              </a>
            </div>

          </div>

          {/* Dropdown Card */}
          {isDropdownOpen && (
            <div className="absolute right-6 top-16 bg-gray-800 shadow-lg rounded-lg p-4 z-50">
              <div className="flex flex-col space-y-4">
                <NavLink
                  to="/"
                  className={getNavLinkClass}
                  onClick={() => setIsDropdownOpen(false)} // Close dropdown after selection
                >
                  Home
                </NavLink>
                <NavLink
                  to="/profileGenerator"
                  className={getNavLinkClass}
                  onClick={() => setIsDropdownOpen(false)} 
                >
                  Profile Generator
                </NavLink>
                <a
                  href="https://github.com/BamaCharanChhandogi/READMEasy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-400 transition duration-300 flex items-center space-x-2"
                  onClick={() => setIsDropdownOpen(false)} 
                >
                  <span>GitHub</span>               
                  <FaGithub className="w-7 h-7" />
                </a>

              </div>
            </div>
          )}
        </nav>

        <div className="container mx-auto px-4 py-12">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<MemoizedHome />} />
              <Route path="/profileGenerator" element={<MemoizedGitHubProfileGenerator />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
