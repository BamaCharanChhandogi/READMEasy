import React, { Suspense, lazy, memo } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, NavLink } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import Navbar from './components/Navbar';

const Home = lazy(() => import('./components/Home'));
const GitHubProfileGenerator = lazy(() => import('./hooks/GitHubProfileGenerator'));


const MemoizedHome = memo(Home);
const MemoizedGitHubProfileGenerator = memo(GitHubProfileGenerator);

const getNavLinkClass = ({ isActive }) => 
  isActive ? "text-purple-400 font-semibold" : "text-gray-300 hover:text-purple-400 transition duration-300";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
     <NavLink></NavLink>
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
