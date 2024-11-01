import React, { Suspense, lazy, memo, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import { FaGithub, FaChevronUp } from "react-icons/fa";
import Navbar from "./components/Navbar";


// Lazy load components
const Home = lazy(() => import('./components/Home'));
const README = lazy(() => import('./components/readme'));
const GitHubProfileGenerator = lazy(() => import('./hooks/GitHubProfileGenerator'));
const Home = lazy(() => import("./components/Home"));
const FAQ = lazy(() => import("./components/FAQ"));
const GitHubProfileGenerator = lazy(() =>
  import("./hooks/GitHubProfileGenerator")
);



const MemoizedHome = memo(Home);
const MemoizedFAQ = memo(FAQ);
const MemoizedGitHubProfileGenerator = memo(GitHubProfileGenerator);
const MemoizedREADME = memo(README);


const getNavLinkClass = ({ isActive }) => 
  isActive ? "text-black font-semibold border-b-2 border-black" : "text-gray-600 hover:text-black hover:border-black transition duration-300";
=======
const getNavLinkClass = ({ isActive }) =>
  isActive
    ? "text-purple-400 font-semibold"
    : "text-gray-300 hover:text-purple-400 transition duration-300";


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

      <div className="min-h-screen bg-gray-100 text-gray-900">
        {/* GitHub-like Navbar */}
        <nav className="bg-white border-b border-gray-300 shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link 
              to="/" 
              className="text-2xl font-semibold text-gray-800 hover:text-black transition duration-300"
            >
              READMEasy
            </Link>
            <div className="flex items-center space-x-8">
              <div className="flex space-x-6">
                <NavLink to="/" className={getNavLinkClass}>Home</NavLink>
                <NavLink to="/readme" className={getNavLinkClass}>README Generator</NavLink>
                <NavLink to="/profileGenerator" className={getNavLinkClass}>Profile Generator</NavLink>
                 {/* New link */}
              </div>
              <a 
                href="https://github.com/BamaCharanChhandogi/READMEasy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-black transition duration-300"
              >
                <FaGithub className="w-7 h-7" />
              </a>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-12 bg-white shadow-md border border-gray-300 rounded-lg">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<MemoizedHome />} />
              <Route path="/profileGenerator" element={<MemoizedGitHubProfileGenerator />} />
              <Route path="/readme" element={<MemoizedREADME />} /> {/* New route */}

      <div className="min-h-screen bg-gray-900 text-white">
        <Navbar />
        <div className="container mx-auto px-4 py-12">
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<MemoizedHome />} />
              <Route path="/faq" element={<MemoizedFAQ />} />
              <Route
                path="/profileGenerator"
                element={<MemoizedGitHubProfileGenerator />}
              />

            </Routes>
          </Suspense>
        </div>

        {/* Scroll to Top Button */}
        {showScrollToTop && (
          <button
            id="back-to-top"
            onClick={scrollToTop}

            className="fixed bottom-8 right-8 p-3 bg-gray-200 border border-gray-300 text-gray-800 rounded-full shadow hover:bg-gray-300 hover:border-gray-400 transition duration-300"

            className="fixed bottom-[80px] right-6 p-3 bg-purple-500 text-white rounded-full shadow-lg hover:bg-purple-600 transition duration-300"

          >
            <FaChevronUp className="text-xl" />
          </button>
        )}
      </div>
    </Router>
  );
}

export default App;
