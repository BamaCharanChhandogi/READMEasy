// ProfileForm.jsx
import React, { useState } from 'react';

function ProfileForm({ profileInfo, handleChange }) {
  // State variables for form fields
  const [name, setName] = useState(profileInfo.name || '');
  const [title, setTitle] = useState(profileInfo.title || '');
  const [currentWork, setCurrentWork] = useState(profileInfo.currentWork || '');
  const [learning, setLearning] = useState(profileInfo.learning || '');
  const [askMeAbout, setAskMeAbout] = useState(profileInfo.askMeAbout || '');
  const [email, setEmail] = useState(profileInfo.email || '');
  const [linkedin, setLinkedin] = useState(profileInfo.linkedin || '');
  const [portfolio, setPortfolio] = useState(profileInfo.portfolio || '');
  const [githubUsername, setGithubUsername] = useState(profileInfo.githubUsername || '');

  // State variables for language selection
  const [selectedLanguages, setSelectedLanguages] = useState(profileInfo.languages || []);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [otherLanguage, setOtherLanguage] = useState('');
  const [isOtherChecked, setIsOtherChecked] = useState(false);

  // Popular languages (replace with your desired languages)
  const popularLanguages = ['Python', 'C++', 'Java', 'HTML', 'CSS', 'JavaScript', 'ReactJS', 'NodeJS', 'MongoDB'];

  // Function to toggle the dropdown visibility
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguages((prevSelected) =>
      prevSelected.includes(language)
        ? prevSelected.filter((lang) => lang !== language)
        : [...prevSelected, language]
    );
  };

  // Function to handle "Other" checkbox input and text input
  const handleOtherInput = () => {
    setIsOtherChecked(!isOtherChecked);
    if (!isOtherChecked) {
      setOtherLanguage('');
    }
  };

  // Function to remove a language from the selected list
  const handleRemoveLanguage = (language) => {
    if (language === otherLanguage) {
      setOtherLanguage('');
      setIsOtherChecked(false);
    }
    setSelectedLanguages((prevSelected) => prevSelected.filter((lang) => lang !== language));
  };

  // Function to handle other language input
  const handleOtherLanguageInput = (e) => {
    setOtherLanguage(e.target.value);
    if (!selectedLanguages.includes(e.target.value)) {
      setSelectedLanguages([...selectedLanguages, e.target.value]);
    }
  };

  // Function to handle form submission (replace with your logic)
  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedProfileInfo = {
      name,
      title,
      currentWork,
      learning,
      askMeAbout,
      email,
      linkedin,
      portfolio,
      githubUsername,
      languages: selectedLanguages,
    };
    handleChange(updatedProfileInfo); // Pass updated info to the parent component
    console.log('Form submitted:', updatedProfileInfo); // Optional: Log for debugging
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
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="e.g. John Doe"
          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className='col-span-1'>
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


        <div className='col-span-1'>
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

        <div className='col-span-1'>
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


        <div className='col-span-1'>
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

        <div className='col-span-1 md:col-span-2'>
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

        <div className='col-span-1 md:col-span-2'>
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

        <div className='col-span-1 md:col-span-2'>
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

      {/* Language selector */}
      <div>
        <label htmlFor="languages" className="block text-sm font-medium text-purple-300 mb-1">
          Languages:
        </label>

        {/* Display selected languages with cross to remove */}
        <div className="flex flex-wrap gap-2 items-center border p-2 rounded-md cursor-pointer" onClick={toggleDropdown}>
          {selectedLanguages.length > 0 ? (
            selectedLanguages.map((language, idx) => (
              <div key={idx} className="bg-gray-700 px-2 py-1 rounded-full flex items-center gap-1">
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
          <div className="border mt-2 p-2 rounded-md shadow-lg bg-gray-800 max-h-48 overflow-y-auto">
            {popularLanguages.map((language, idx) => (
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
              <input type="checkbox" checked={isOtherChecked} onChange={handleOtherInput} />
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
        <div className='col-span-1'>
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

        <div className='col-span-1'>
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
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mt-4'>
        <div className='col-span-1'>
          <label htmlFor="languages" className="block text-sm font-medium text-purple-300 mb-1">
            Languages
          </label>
          <textarea
            id="languages"
            name="languages"
            value={profileInfo.languages}
            onChange={handleChange}
            placeholder="e.g. javascript,python,java"
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            rows = "3"
          />
        </div>
        
        <div className='col-span-1'>
          <label htmlFor="frameworks" className="block text-sm font-medium text-purple-300 mb-1">
            Frameworks
          </label>
          <textarea
            id="frameworks"
            name="frameworks"
            value={profileInfo.frameworks}
            onChange={handleChange}
            placeholder="e.g. react,nodejs,express"
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            rows= "3"
          />
        </div>

        <div className='col-span-1'>
          <label htmlFor="tools" className="block text-sm font-medium text-purple-300 mb-1">
            Tools
          </label>
          <textarea
            id="tools"
            name="tools"
            value={profileInfo.tools}
            onChange={handleChange}
            placeholder="e.g. git,docker,vscode"
            className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            rows = "3"
          />
        </div>
      </div>
    </form>
  );
}

export default ProfileForm;
