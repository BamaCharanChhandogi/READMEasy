import React from 'react';
import { FaBookOpen, FaUser, FaRocket } from "react-icons/fa";
import './home.css'; // Ensure your custom CSS file includes styles for animations

const Home = () => {
  return (
    <div className="home-container text-gray-800 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-gray-900 mb-6 animate-fadeIn">
        Welcome to <span className="text-purple-500">READMEasy</span>
      </h1>
      <p className="text-lg mb-8 max-w-2xl text-center animate-fadeIn">
        READMEasy is a powerful tool that helps you create engaging and informative GitHub profile README files. With just a few inputs, you can showcase your projects, skills, and interests in a professional manner.
      </p>
      
      <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4 animate-fadeIn">
        How to Use READMEasy
      </h2>
      <div className="bg-gray-100 rounded-lg p-6 shadow-md mb-8 animate-fadeIn max-w-2xl w-full">
        <ol className="list-decimal list-inside space-y-4">
          <li className="flex items-center animate-slideIn">
            <FaUser className="text-purple-500 w-5 h-5 mr-2" />
            <span>
              <strong>Create Your Profile:</strong> Click on the <em>Profile Generator</em> tab in the navigation menu to get started.
            </span>
          </li>
          <li className="flex items-center animate-slideIn">
            <FaBookOpen className="text-purple-500 w-5 h-5 mr-2" />
            <span>
              <strong>Fill in Your Details:</strong> Input your GitHub username, skills, projects, and any other information you want to display.
            </span>
          </li>
          <li className="flex items-center animate-slideIn">
            <FaRocket className="text-purple-500 w-5 h-5 mr-2" />
            <span>
              <strong>Generate Your README:</strong> Click on the <em>Generate</em> button, and voila! Your README is ready to be copied to your GitHub profile.
            </span>
          </li>
        </ol>
      </div>
      
      <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4 animate-fadeIn">
        Key Features of READMEasy
      </h2>
      <div className="flex justify-center mb-8">
  <ul className="list-disc list-inside space-y-2 max-w-2xl w-full">
    <li className="animate-bounce">✨ Create stunning GitHub profile READMEs with ease.</li>
    <li className="animate-bounce">🎨 Customizable templates to match your style.</li>
    <li className="animate-bounce">📈 Visual elements to showcase your projects and skills.</li>
    <li className="animate-bounce">🛠️ Easy to use with a friendly user interface.</li>
  </ul>
</div>
      
      <h2 className="text-3xl font-semibold text-gray-800 mt-8 mb-4 animate-fadeIn">
        Ready to Get Started?
      </h2>
      <p className="mb-4 max-w-2xl text-center animate-fadeIn">
        Dive into the README generator now and enhance your GitHub presence!
      </p>
      <p className="mb-4 max-w-2xl text-center animate-fadeIn">
        If you have any questions or need help, feel free to reach out through the GitHub repository linked in the navigation bar.
      </p>
      <p className="text-gray-600 text-sm text-center animate-fadeIn">
        Happy coding! 🚀
      </p>
    </div>
  );
};

export default Home;
