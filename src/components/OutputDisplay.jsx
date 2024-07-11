import React from 'react';
import ReactMarkdown from 'react-markdown';

function OutputDisplay({ content, viewMode }) {
  if (!content) return null;

  const copyToClipboard = () => {
    const textToCopy = typeof content === 'string' ? content : 'Unable to copy complex content';
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        const notification = document.getElementById('copy-notification');
        notification.classList.remove('opacity-0');
        notification.classList.add('opacity-100');
        setTimeout(() => {
          notification.classList.remove('opacity-100');
          notification.classList.add('opacity-0');
        }, 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  // Ensure content is always a string
  const stringContent = typeof content === 'string' ? content : 'Unable to display complex content';

  return (
    <div className="relative">
      <div className="flex justify-end mb-2">
        {viewMode === 'markdown' && (
          <button 
            onClick={copyToClipboard}
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 flex items-center"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
              <path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
            </svg>
            Copy to Clipboard
          </button>
        )}
      </div>
      <div className={`bg-gray-700 p-6 rounded-lg ${viewMode === 'rendered' ? 'prose prose-invert max-w-none' : ''}`}>
        {viewMode === 'markdown' ? (
          <pre className="whitespace-pre-wrap text-gray-300 overflow-x-auto">{stringContent}</pre>
        ) : (
          <ReactMarkdown className="text-gray-300">{stringContent}</ReactMarkdown>
        )}
      </div>
      <div id="copy-notification" className="absolute top-0 right-0 m-4 p-2 bg-green-600 text-white rounded opacity-0 transition-opacity duration-300">
        Copied to clipboard!
      </div>
    </div>
  );
}

export default OutputDisplay;