import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import ErrorBoundary from './components/ErrorBoundary';

// Lazy load components
const Home = React.lazy(() => import('./components/Home'));
const GitHubProfileGenerator = React.lazy(() => import('./hooks/GitHubProfileGenerator'));
const NotFound = React.lazy(() => import('./components/NotFound')); // 404 page

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        {/* SEO meta tag */}
        <meta name="description" content="READMEasy: Generate professional GitHub profile readme easily." />

        {/* Navigation bar */}
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

              {/* External GitHub link with aria-label */}
              <a
                href="https://github.com/BamaCharanChhandogi/READMEasy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-400 transition duration-300"
                aria-label="Link to GitHub repository"
              >
                <FaGithub className="w-7 h-7" />
              </a>
            </div>
          </div>
        </nav>

        {/* Main content */}
        <div className="container mx-auto px-4 py-12">
          {/* Suspense wrapper for lazy loaded components */}
          <Suspense fallback={<div className="text-center text-white">Loading...</div>}>
            <ErrorBoundary>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profileGenerator" element={<GitHubProfileGenerator />} />
                {/* 404 Page */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </ErrorBoundary>
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App;
