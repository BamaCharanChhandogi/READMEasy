import React, { useState } from 'react';
import InputForm from './InputForm';
import OutputDisplay from './OutputDisplay';
import EditableOutput from './EditableOutput';
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
  const [editedReadme, setEditedReadme] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const handleSubmit = (info) => {
    setProjectInfo(info);
    setEditedReadme(''); // Reset edited content when generating new README
    setIsEditing(false); // Exit edit mode when generating new README
  };

  const handleSaveEdit = (newContent) => {
    setEditedReadme(newContent);
    setIsEditing(false);
  };

  const handleStartEditing = () => {
    setIsEditing(true);
  };

  return (
    <>
<div className="bg-white rounded-lg shadow-lg p-8 mb-8 border border-gray-200">
  <h2 className="text-2xl font-bold text-gray-900 mb-7 inline-block relative overflow-hidden group">
    README Generator for Project
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-blue-600 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </h2>
  <InputForm onSubmit={handleSubmit} />
</div>

{isLoading && (
  <div className="text-center my-8">
    <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-blue-500"></div>
    <p className="mt-2 text-gray-800">Generating README...</p>
  </div>
)}

{error && <p className="text-red-600 text-center my-4 bg-red-100 py-2 px-4 rounded-lg border border-red-300">{error}</p>}

{(formattedReadme || editedReadme) && (
  <div className="bg-white rounded-lg shadow-lg p-8 mt-8 border border-gray-200">
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-3xl font-semibold text-gray-900">Generated README</h2>
      <div className="space-x-4">
        {!isEditing && (
          <button
            onClick={handleStartEditing}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
          >
            Edit
          </button>
        )}
        <button
          onClick={toggleViewMode}
          className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out"
        >
          Switch to {viewMode === 'markdown' ? 'Rendered' : 'Markdown'} View
        </button>
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
}

export default Home;
