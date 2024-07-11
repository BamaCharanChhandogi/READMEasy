import React, { useState } from 'react';
import InputForm from './components/InputForm';
import OutputDisplay from './components/OutputDisplay';
import useReadmeGenerator from './hooks/useReadmeGenerator';

function App() {
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
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold mb-8 text-center text-purple-400">README Generator</h1>
        <div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
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
      </div>
    </div>
  );
}

export default App;