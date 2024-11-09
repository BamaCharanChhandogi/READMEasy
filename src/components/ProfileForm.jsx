import React, { useState } from 'react';
import Picker from '@emoji-mart/react';
import data from '@emoji-mart/data';

function ProfileForm({ profileInfo, handleChange }) {
  const [showPicker, setShowPicker] = useState(false);
  const [currentField, setCurrentField] = useState(null);
  const [hoveredField, setHoveredField] = useState(null);
  const [imageLink, setImageLink] = useState('');
  const [imageHeight, setImageHeight] = useState('');
  const [alignment, setAlignment] = useState('left');

  const emojis = {
    name: ["😊", "😄", "😁", "😎"],
    title: ["🌟", "✨", "🎯", "💥"],
    currentWork: ["💻", "📱", "🖥️", "🖨️"],
    learning: ["🚀", "📚", "💡", "🧠"],
    email: ["📧", "✉️", "💌", "📩"],
    askMeAbout: ["💬", "🗣️", "🧩", "💭"],
  };

  const [emojiIndex, setEmojiIndex] = useState({
    name: 0,
    title: 0,
    currentWork: 0,
    learning: 0,
    email: 0,
    askMeAbout: 0,
  });

  const openEmojiPicker = (field) => {
    setCurrentField(field);
    setShowPicker((prev) => !prev);
  };

  const handleEmojiSelect = (emoji) => {
    if (currentField) {
      handleChange({
        target: {
          name: currentField,
          value: profileInfo[currentField] + emoji.native,
        },
      });
      setShowPicker(false);
    }
  };

  const renderInputField = (label, id, placeholder, type = "text", isTextArea = false, rows = 1, withEmoji = true) => (
    <div className='col-span-1'>
      <label htmlFor={id} className="block text-sm font-medium text-purple-300 mb-1">
        {label}
      </label>
      <div className="flex items-center relative">
        {withEmoji && (
          <div
            onClick={() => openEmojiPicker(id)}
            onMouseEnter={() => {
              setHoveredField(id); 
              setEmojiIndex((prev) => {
                const nextIndex = (prev[id] + 1) % emojis[id].length;
                return { ...prev, [id]: nextIndex };
              });
            }}
            onMouseLeave={() => setHoveredField(null)}
            className="bg-gray-700 border border-gray-600 text-white px-3 py-2 flex items-center justify-center cursor-pointer"
            style={{ height: '100%', width: '50px', borderRadius: '0.375rem 0 0 0.375rem' }} // Rounded left side
          >
            {/* Show the emoji based on the index */}
            {emojis[id][emojiIndex[id]]}
          </div>
        )}
        {isTextArea ? (
          <textarea
            id={id}
            name={id}
            value={profileInfo[id]}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            rows={rows}
            style={withEmoji ? { borderRadius: '0 0.375rem 0.375rem 0' } : { borderRadius: '0.375rem' }} // Rounded right side or full for non-emoji
          />
        ) : (
          <input
            type={type}
            id={id}
            name={id}
            value={profileInfo[id]}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            style={withEmoji ? { borderRadius: '0 0.375rem 0.375rem 0' } : { borderRadius: '0.375rem' }} // Rounded right side or full for non-emoji
          />
        )}
        {showPicker && currentField === id && (
          <div className="absolute top-full mt-2 z-10">
            <Picker data={data} onEmojiSelect={handleEmojiSelect} />
          </div>
        )}
      </div>
    </div>
  );

  const handleImageLinkChange = (e) => {
    setImageLink(e.target.value);
  };

  const handleImageHeightChange = (e) => {
    setImageHeight(e.target.value);
  };

  const handleAlignmentChange = (e) => {
    setAlignment(e.target.value);
  };

  return (
    <form>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {renderInputField("Name", "name", "e.g. John Doe")}
        {renderInputField("Title (tagline)", "title", "e.g. A passionate web developer")}
        {renderInputField("Current Work (intern/fulltime)", "currentWork", "e.g. TechCorp (fulltime)", "text", false, 1, false)}
        {renderInputField("Currently Learning", "learning", "e.g. GraphQL, Docker")}
        {renderInputField("Email", "email", "your.email@example.com", "email")}
        {renderInputField("Ask Me About", "askMeAbout", "e.g. Web development, JavaScript, React")}
        {renderInputField("LinkedIn", "linkedin", "https://www.linkedin.com/in/yourprofile", "url", false, 1, false)}
        {renderInputField("Portfolio", "portfolio", "https://yourportfolio.com", "url", false, 1, false)}
        {renderInputField("GitHub Username", "githubUsername", "your-github-username", "text", false, 1, false)}
      </div>

      {/* New Fields aligned side by side with Image URL */}
      <div className="flex space-x-4 mt-5">
        {/* Image/GIF URL */}
        <div className="flex-1:gap-4">
          <label htmlFor="imageLink" className="block text-sm font-medium text-purple-300 mb-1">
            Image/GIF URL
          </label>
          <input
            type="text"
            id="imageLink"
            name="imageLink"
            value={imageLink}
            onChange={handleImageLinkChange}
            placeholder="Enter image or GIF URL"
            className="w-100 px-3 py-2 bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 rounded-lg"
          />
        </div>

        {/* Image Height */}
        <div className="flex-1:gap-4">
          <label htmlFor="imageHeight" className="block text-sm font-medium text-purple-300 mb-1">
            Image Height (px)
          </label>
          <input
            type="number"
            id="imageHeight"
            name="imageHeight"
            value={imageHeight}
            onChange={handleImageHeightChange}
            placeholder="Height (px)"
            min="50"
            className="w-32 px-3 py-2 bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 rounded-lg" // Smaller width
          />
        </div>

        {/* Image Alignment */}
        <div className="flex-1">
          <label htmlFor="alignment" className="block text-sm font-medium text-purple-300 mb-1">
            Image Alignment
          </label>
          <select
            id="alignment"
            name="alignment"
            value={alignment}
            onChange={handleAlignmentChange}
            className="w-32 px-3 py-2 bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500 text-white rounded-lg"
          >
            <option value="left">Left</option>
            <option value="center">Center</option>
            <option value="right">Right</option>
          </select>
        </div>
      </div>

      {/* Render Image Preview */}
      {imageLink && (
        <div className="col-span-1 mt-4">
          <img
            src={imageLink}
            alt="Preview"
            style={{
              height: imageHeight ? `${imageHeight}px` : 'auto',
              maxWidth: '300px', // Adjust the width to make it smaller
              borderRadius: '8px', // Add rounded corners
              display: alignment === 'center' ? 'block' : 'inline-block',
              marginLeft: alignment === 'right' ? 'auto' : '0',
              marginRight: alignment === 'left' ? 'auto' : '0',
              marginTop: '10px', // Space from top
            }}
          />
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {renderInputField("Languages", "languages", "e.g. javascript,python,java", "text", true, 3, false)}
        {renderInputField("Frameworks", "frameworks", "e.g. react,nodejs,express", "text", true, 3, false)}
        {renderInputField("Tools", "tools", "e.g. git,docker,vscode", "text", true, 3, false)}
      </div>
    </form>
  );
}

export default ProfileForm;
