import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

const EditableOutput = ({ content, onSave }) => {
  const [editableContent, setEditableContent] = useState(content);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(editableContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditableContent(content);
    setIsEditing(false);
  };

  return (
        <>
          <textarea
            value={editableContent}
            onChange={(e) => setEditableContent(e.target.value)}
            className="w-full h-96 p-2 bg-gray-800 text-white border border-gray-600 rounded-md resize-none"
          />
          <div className="flex justify-end mt-4 space-x-4">
            <button
              onClick={handleSave}
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Cancel
            </button>
          </div>
        </>
      )
};

export default EditableOutput;