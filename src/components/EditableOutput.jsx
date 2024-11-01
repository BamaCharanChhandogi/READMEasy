import React, { useState, useRef } from 'react';
import MarkdownToolbar from './MarkdownToolbar';

const EditableOutput = ({ content, onSave }) => {
  const [editableContent, setEditableContent] = useState(content);
  const [isEditing, setIsEditing] = useState(false);
  const textareaRef = useRef(null);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onSave(editableContent);
    setIsEditing(false);
  };

  const handleCancel = () => {
    onSave(content);
    setIsEditing(false);
  };

  return (
    <>
      <MarkdownToolbar textareaRef={textareaRef} />
      <textarea
        ref={textareaRef}
        value={editableContent}
        onChange={(e) => setEditableContent(e.target.value)}
        className="w-full h-96 p-2 bg-gray-800 text-white border border-gray-600 rounded-b-md resize-none focus:outline-none focus:ring-2 focus:ring-purple-500"
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
  );
};

export default EditableOutput;