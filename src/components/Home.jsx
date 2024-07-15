import React, { useState } from 'react';
import InputForm from './InputForm';
import OutputDisplay from './OutputDisplay';
import useReadmeGenerator from '../hooks/useReadmeGenerator';

function Home() {
  const [projectInfo, setProjectInfo] = useState({
    projectName: '',
    description: '',
    features: '',
    installation: '',
    usage: '',
    contributing: '',
    license: '',
  });

  const { formattedReadme, isLoading, error, viewMode, toggleViewMode } = useReadmeGenerator(projectInfo);

  const handleSubmit = (info) => {
    setProjectInfo(info);
  };

  return (
    <>
      <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-purple-400 mb-7 inline-block relative overflow-hidden group">
        README Generator for Project
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
      </h2>
      <InputForm onSubmit={handleSubmit} />
    </div>
      {isLoading && (
        <div className="text-center my-8">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
          <p className="mt-2 text-purple-400">Generating README...</p>
        </div>
      )}
      {error && <p className="text-red-400 text-center my-4 bg-red-900 py-2 px-4 rounded">{error}</p>}
      {formattedReadme && (
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mt-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-semibold text-purple-400">Generated README</h2>
            <button
              onClick={toggleViewMode}
              className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Switch to {viewMode === 'markdown' ? 'Rendered' : 'Markdown'} View
            </button>
          </div>
          <OutputDisplay content={formattedReadme} viewMode={viewMode} />
        </div>
      )}
    </>
  );
}

export default Home;