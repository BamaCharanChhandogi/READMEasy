import React, { Suspense, lazy, memo, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { FaGithub, FaChevronUp } from "react-icons/fa";

import StarForkButton from './components/StarFork';

const Home = lazy(() => import('./components/Home'));
const GitHubProfileGenerator = lazy(() => import('./hooks/GitHubProfileGenerator'));

const MemoizedHome = memo(Home);
const MemoizedGitHubProfileGenerator = memo(GitHubProfileGenerator);

const getNavLinkClass = ({ isActive }) => 
  isActive ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-purple-400 transition duration-300";

function App() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Handle scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
                <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
                <NavLink to="/profileGenerator" className={getNavLinkClass}>Profile Generator</NavLink>
              </div>
              {/* <a 
                href="https://github.com/BamaCharanChhandogi/READMEasy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition duration-300"
              >
                <FaGithub className="w-7 h-7" />
              </a> */}
               <div className="hidden md:block"> 
                <StarForkButton />
              </div>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-4 py-12">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<MemoizedHome />} />
              <Route path="/profileGenerator" element={<MemoizedGitHubProfileGenerator />} />
            </Routes>
          </Suspense>
        </div>

        {/* Scroll to Top Button */}
        {showScrollToTop && (
          <button 
            id="back-to-top" 
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition duration-300"
          >
            <FaChevronUp className="text-xl" />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
