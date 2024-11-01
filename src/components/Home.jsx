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

      {isLoading && (
        <div className="text-center my-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          <p className="mt-2 text-purple-400">Generating README...</p>
        </div>
      )}
      {error && <p className="text-red-400 text-center my-4 bg-red-900 py-2 px-4 rounded">{error}</p>}
      {(formattedReadme || editedReadme) && (
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-purple-400">Generated README</h2>
            <div className="space-x-4">
              {!isEditing && (
                <button
                  onClick={handleStartEditing}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
                >
                  Edit
                </button>
              )}
              {!isEditing && (<button
                onClick={toggleViewMode}
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
              >
                Switch to {viewMode === 'markdown' ? 'Rendered' : 'Markdown'} View
              </button>)}
            </div>
          </div>
          {isEditing ? (
            <EditableOutput 
              content={editedReadme || formattedReadme} 
              onSave={handleSaveEdit} 
            />
          ) : (
            <OutputDisplay 
              content={editedReadme || formattedReadme} 
              viewMode={viewMode} 
            />
          )}
        </div>
      )}
    </>

  );
};

export default Home;
