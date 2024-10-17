import React, { useState, useEffect } from 'react';
import { Github } from 'lucide-react';
import axios from 'axios';

export default function GitHubStarButton() {
  const [stars, setStars] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepoData = async () => {
      try {
        const response = await axios.get('https://api.github.com/repos/BamaCharanChhandogi/READMEasy');
        setStars(response.data.stargazers_count);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching GitHub repo data:', err);
        setError('Failed to load repository data');
        setLoading(false);
      }
    };

    fetchRepoData();
  }, []);

  const handleStarClick = () => {
    window.open('https://github.com/BamaCharanChhandogi/READMEasy/stargazers', '_blank');
  };

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="flex justify-center">
      <button
        onClick={handleStarClick}
        className="flex items-center bg-opacity-50 bg-[#21262d] backdrop-blur-lg text-white text-sm font-semibold  rounded-xl shadow-md hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-opacity-75 hover:border border-purple-400"
        style={{
          border: '1px solid rgba(192, 132, 252, 1)',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        }}
        
      >
        <div className="flex items-center space-x-2 px-3 py-1 border-r border-gray-600">
          <Github size={16} color='#ffdf00' />
          <span>Star</span>
        </div>
        <div className="px-3 py-1">
          {stars.toLocaleString()}
        </div>
      </button>
    </div>
  );
}
