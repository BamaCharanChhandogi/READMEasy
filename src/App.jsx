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

const Home = lazy(() => import("./components/Home"));
const FAQ = lazy(() => import("./components/FAQ"));
const GitHubProfileGenerator = lazy(() =>
  import("./hooks/GitHubProfileGenerator")
);

const MemoizedHome = memo(Home);
const MemoizedFAQ = memo(FAQ);
const MemoizedGitHubProfileGenerator = memo(GitHubProfileGenerator);

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
