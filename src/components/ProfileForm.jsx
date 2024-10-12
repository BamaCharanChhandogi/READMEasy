// ProfileForm.jsx
import React from 'react';

function ProfileForm({ profileInfo, handleChange }) {
  const popularLanguages = ['Python', 'C++', 'Java', 'HTML', CSS', 'Bootstrap', 'JavaScript', 'NodeJS', 'ReactJS', 'MongoDB'];

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    const newLanguages = checked
      ? [...profileInfo.languages, value]
      : profileInfo.languages.filter(language => language !== value);

    handleChange({ target: { name: 'languages', value: newLanguages } });
  };

  return (
    <form className="space-y-4 mb-2">
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

      <div>
        <label className="block text-sm font-medium text-purple-300 mb-1">
          Languages
        </label>
        <div className="space-y-2">
          {popularLanguages.map((language, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`language-${index}`}
                name="languages"
                value={language}
                checked={profileInfo.languages.includes(language)}
                onChange={handleCheckboxChange}
                className="h-4 w-4 text-purple-500 border-gray-300 rounded focus:ring-purple-400"
              />
              <label htmlFor={`language-${index}`} className="ml-2 block text-white">
                {language}
              </label>
            </div>
          ))}
        </div>
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
    </form>
  );
}

export default ProfileForm;
