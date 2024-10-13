import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar, FaCodeBranch } from 'react-icons/fa'; // Importing specific icons

const StarForkButton = () => {
  const [repoData, setRepoData] = useState({ stars: 0, forks: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/BamaCharanChhandogi/READMEasy');
        setRepoData({
          stars: response.data.stargazers_count,
          forks: response.data.forks_count,
        });
        setLoading(false);
      } catch (error) {
        console.error("Error fetching GitHub repo data:", error);
      }
    };

    fetchRepoData();
  }, []);

  const handleStarClick = () => {
    window.location.href = 'https://github.com/BamaCharanChhandogi/READMEasy/stargazers';
  };

  const handleForkClick = () => {
    window.location.href = 'https://github.com/BamaCharanChhandogi/READMEasy/fork';
  };

  return (
    <div className="flex flex-col items-center justify-center mt-5 bg-gray-900">
      {loading ? (
        <p className="text-white">Loading...</p>
      ) : (
        <div className="flex space-x-4">
          <button 
            onClick={handleStarClick} 
            className="bg-gradient-to-l from-purple-400 to-purple-600 bg-opacity-60 text-white py-2 px-4 rounded-lg shadow-lg backdrop-blur-lg border border-purple-700 
              hover:bg-opacity-80 hover:scale-105 hover:rotate-1 transition-all duration-300 ease-in-out flex items-center"
          >
            <FaStar className="text-2xl text-yellow-300 mr-1" />
            <span className="text-2xl font-extrabold text-yellow-300">Star {repoData.stars}</span>
          </button>
          <button 
            onClick={handleForkClick} 
            className="bg-gradient-to-l from-purple-400 to-purple-600 bg-opacity-60 text-white py-2 px-4 rounded-lg shadow-lg backdrop-blur-lg border border-purple-700 
              hover:bg-opacity-80 hover:scale-105 hover:-rotate-1 transition-all duration-300 ease-in-out flex items-center"
          >
            <FaCodeBranch className="text-2xl text-green-300 mr-1" />
            <span className="text-2xl font-extrabold text-green-300">Fork {repoData.forks}</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default StarForkButton;
