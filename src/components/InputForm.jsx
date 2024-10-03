import React, { useState } from "react";

function InputForm({ onSubmit }) {
  const [projectInfo, setProjectInfo] = useState({
    projectName: "",
    description: "",
    features: "",
    installation: "",
    usage: "",
    contributing: "",
    license: "",
  });

  const handleChange = (e) => {
    setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(projectInfo);
  };

  return (
    <form onSubmit={handleSubmit} className='space-y-6'>
      {Object.entries(projectInfo).map(([key, value]) => (
        <div key={key}>
          {key == "projectName" || key == "description" ? (
            <label
              htmlFor={key}
              className='block text-sm font-medium text-purple-300 mb-1 capitalize'
            >
              {key.replace(/([A-Z])/g, " $1").trim()}
            </label>
          ) : (
            <label
              htmlFor={key}
              className='block text-sm font-medium text-purple-300 mb-1 capitalize'
            >
              {key.replace(/([A-Z])/g, " $1").trim()} (Optional)
            </label>
          )}
          {key === "description" ||
          key === "features" ||
          key === "installation" ||
          key === "usage" ||
          key === "contributing" ? (
            <textarea
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              placeholder={`Enter ${key}`}
              className='w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400'
              rows='4'
            />
          ) : (
            <input
              type='text'
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              placeholder={`Enter ${key}`}
              className='w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400'
            />
          )}
        </div>
      ))}
      <button
        type='submit'
        className='w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300'
      >
        Generate README
      </button>
    </form>
  );
}

export default InputForm;
