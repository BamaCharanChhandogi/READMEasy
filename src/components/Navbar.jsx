import { useState } from "react";
import { FaGithub, FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold text-purple-400 hover:text-purple-300 transition duration-300">
          READMEasy
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-purple-400 transition duration-300">
            {isOpen ? <FaTimes className="w-7 h-7" /> : <FaBars className="w-7 h-7" />}
          </button>
        </div>

        {/* Links for larger screens */}
        <div className="hidden md:flex items-center space-x-8">
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

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-6 pb-4">
          <div className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              onClick={() => setIsOpen(false)} 
              className="text-gray-300 hover:text-purple-400 transition duration-300"
            >
              Home
            </NavLink>
            <NavLink 
              to="/profileGenerator" 
              onClick={() => setIsOpen(false)} 
              className="text-gray-300 hover:text-purple-400 transition duration-300"
            >
              Profile Generator
            </NavLink>
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
      )}
    </nav>
  );
}
