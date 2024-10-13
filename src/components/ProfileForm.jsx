// ProfileForm.jsx
import React, { useState } from 'react';

function ProfileForm({ profileInfo, handleChange }) {
  const LanguageSelector = () => {
    const popularLanguages = ['Python', 'C++', 'Java', 'HTML', CSS', 'Bootstrap', 'JavaScript', 'NodeJS', 'ReactJS', 'MongoDB']; 
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Controls dropdown visibility
    const [selectedLanguages, setSelectedLanguages] = useState([]); // Stores selected languages
    const [otherLanguage, setOtherLanguage] = useState(""); // Stores custom language input
    const [isOtherChecked, setIsOtherChecked] = useState(false); // Tracks if "Other" is selected
  
    const toggleDropdown = () => {
      setIsDropdownOpen(!isDropdownOpen);
    };
  
    // Toggle a language from the selection
    const handleLanguageSelect = (language) => {
      setSelectedLanguages((prevSelected) =>
        prevSelected.includes(language) ? prevSelected.filter((lang) => lang !== language) : [...prevSelected, language]
      );
    };
  
    // Handle "Other" input checkbox and text input
    const handleOtherInput = (e) => {
      setIsOtherChecked(!isOtherChecked);
      if (!isOtherChecked) {
        setOtherLanguage("");
      }
    };
  
    // Remove a language from the selected list
    const handleRemoveLanguage = (language) => {
      if (language === otherLanguage) {
        setOtherLanguage("");
        setIsOtherChecked(false);
      }
      setSelectedLanguages((prevSelected) => prevSelected.filter((lang) => lang !== language));
    };
  
    // Handle other language input field
    const handleOtherLanguageInput = (e) => {
      setOtherLanguage(e.target.value);
      if (!selectedLanguages.includes(e.target.value)) {
        setSelectedLanguages([...selectedLanguages, e.target.value]);
      }
  };

  return (
    <form className="space-y-4 mb-2" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-purple-300 mb-1">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={profileInfo.name}
          placeholder='e.g. John Doe'
          onChange={handleChange}
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-purple-300 mb-1">
          Title (tagline)
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={profileInfo.title}
          onChange={handleChange}
          placeholder="e.g. A passionate web developer"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="currentWork" className="block text-sm font-medium text-purple-300 mb-1">
          Current Work (intern/fulltime)
        </label>
        <input
          type="text"
          id="currentWork"
          name="currentWork"
          value={profileInfo.currentWork}
          onChange={handleChange}
          placeholder="e.g. TechCorp (fulltime)"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="learning" className="block text-sm font-medium text-purple-300 mb-1">
          Currently Learning
        </label>
        <input
          type="text"
          id="learning"
          name="learning"
          value={profileInfo.learning}
          onChange={handleChange}
          placeholder="e.g. GraphQL, Docker"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="askMeAbout" className="block text-sm font-medium text-purple-300 mb-1">
          Ask Me About
        </label>
        <input
          type="text"
          id="askMeAbout"
          name="askMeAbout"
          value={profileInfo.askMeAbout}
          onChange={handleChange}
          placeholder="e.g. Web development, JavaScript, React"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-purple-300 mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={profileInfo.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="linkedin" className="block text-sm font-medium text-purple-300 mb-1">
          LinkedIn
        </label>
        <input
          type="url"
          id="linkedin"
          name="linkedin"
          value={profileInfo.linkedin}
          onChange={handleChange}
          placeholder="https://www.linkedin.com/in/yourprofile"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="portfolio" className="block text-sm font-medium text-purple-300 mb-1">
          Portfolio
        </label>
        <input
          type="url"
          id="portfolio"
          name="portfolio"
          value={profileInfo.portfolio}
          onChange={handleChange}
          placeholder="https://yourportfolio.com"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="githubUsername" className="block text-sm font-medium text-purple-300 mb-1">
          GitHub Username
        </label>
        <input
          type="text"
          id="githubUsername"
          name="githubUsername"
          value={profileInfo.githubUsername}
          onChange={handleChange}
          placeholder="your-github-username"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>

      <div className="w-full max-w-md mx-auto mt-8">
      <label className="block font-semibold mb-2">Languages:</label>

      {/* Display selected languages with cross to remove */}
      <div className="flex flex-wrap gap-2 items-center border p-2 rounded-md cursor-pointer" onClick={toggleDropdown}>
        {selectedLanguages.length > 0 ? (
          selectedLanguages.map((language, idx) => (
            <div
              key={idx}
              className="bg-green-200 px-2 py-1 rounded-full flex items-center gap-1"
            >
              {language}
              <button onClick={(e) => { e.stopPropagation(); handleRemoveLanguage(language); }}>
                &times;
              </button>
            </div>
          ))
        ) : (
          <span className="text-gray-500">Select languages...</span>
        )}
      </div>

      {/* Dropdown with checkboxes */}
      {isDropdownOpen && (
        <div className="border mt-2 p-2 rounded-md shadow-lg bg-white max-h-48 overflow-y-auto">
          {availableLanguages.map((language, idx) => (
            <div key={idx} className="flex items-center space-x-2 mb-1">
              <input
                type="checkbox"
                checked={selectedLanguages.includes(language)}
                onChange={() => handleLanguageSelect(language)}
              />
              <label>{language}</label>
            </div>
          ))}
          {/* "Other" option with input */}
          <div className="flex items-center space-x-2 mt-2">
            <input
              type="checkbox"
              checked={isOtherChecked}
              onChange={handleOtherInput}
            />
            <label>Other</label>
            {isOtherChecked && (
              <input
                type="text"
                value={otherLanguage}
                onChange={handleOtherLanguageInput}
                className="border rounded-md p-1"
                placeholder="Enter language"
              />
            )}
          </div>
        </div>
      )}
    </div>

      <div>
        <label htmlFor="frameworks" className="block text-sm font-medium text-purple-300 mb-1">
          Frameworks
        </label>
        <input
          type="text"
          id="frameworks"
          name="frameworks"
          value={profileInfo.frameworks}
          onChange={handleChange}
          placeholder="e.g. react,nodejs,express"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>

      <div>
        <label htmlFor="tools" className="block text-sm font-medium text-purple-300 mb-1">
          Tools
        </label>
        <input
          type="text"
          id="tools"
          name="tools"
          value={profileInfo.tools}
          onChange={handleChange}
          placeholder="e.g. git,docker,vscode"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>
      
      <button
        type="submit"
        className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
      >
        Submit
      </button>
    </form>
  );
}

export default ProfileForm;
