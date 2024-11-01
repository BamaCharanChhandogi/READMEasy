import React, { useState } from 'react';

const stacks = {
  python: {
    installation: '1. Clone the repository\n2. Create a virtual environment: `python -m venv venv`\n3. Activate the virtual environment:\n   - Windows: `venv\\Scripts\\activate`\n   - macOS/Linux: `source venv/bin/activate`\n4. Install dependencies: `pip install -r requirements.txt`\n5. Run the project: `python main.py`',
    usage: 'To use this Python project:\n1. Ensure all dependencies are installed\n2. Run `python main.py`\n3. Follow the on-screen prompts or refer to the documentation for specific commands and features\n4. For API usage (if applicable), check the `/docs` endpoint for Swagger UI documentation',
    contributing: 'We welcome contributions! To contribute:\n1. Fork the repository\n2. Create a new branch: `git checkout -b feature-branch-name`\n3. Make your changes and commit them: `git commit -m "Add some feature"`\n4. Push to the branch: `git push origin feature-branch-name`\n5. Create a pull request with a detailed description of your changes',
  },
  mern: {
    installation: '1. Clone the repository\n2. Install server dependencies: `npm install` in the root directory\n3. Install client dependencies: `cd client && npm install`\n4. Create a `.env` file in the root directory and add your MongoDB URI and other environment variables\n5. Run the full stack app: `npm run dev` in the root directory',
    usage: 'To use this MERN stack project:\n1. Access the frontend at `http://localhost:3000`\n2. The backend API is available at `http://localhost:5000`\n3. Use tools like Postman to test API endpoints\n4. Refer to the API documentation (typically found at `/api-docs`) for available routes and request/response formats',
    contributing: 'Contributions are welcome! To contribute:\n1. Fork the repository\n2. Create a feature branch: `git checkout -b feature/AmazingFeature`\n3. Commit your changes: `git commit -m "Add some AmazingFeature"`\n4. Push to the branch: `git push origin feature/AmazingFeature`\n5. Open a pull request\n6. Ensure your code follows the project\'s coding standards and passes all tests',
  },
  django: {
    installation: '1. Clone the repository\n2. Create a virtual environment: `python -m venv venv`\n3. Activate the virtual environment:\n   - Windows: `venv\\Scripts\\activate`\n   - macOS/Linux: `source venv/bin/activate`\n4. Install dependencies: `pip install -r requirements.txt`\n5. Run migrations: `python manage.py migrate`\n6. Start the server: `python manage.py runserver`',
    usage: 'To use this Django project:\n1. Ensure all dependencies are installed\n2. Run `python manage.py runserver`\n3. Access the application at `http://localhost:8000`\n4. For API usage (if applicable), check the `/api/docs` endpoint for Swagger UI documentation',
    contributing: 'We welcome contributions! To contribute:\n1. Fork the repository\n2. Create a new branch: `git checkout -b feature-branch-name`\n3. Make your changes and commit them: `git commit -m "Add some feature"`\n4. Push to the branch: `git push origin feature-branch-name`\n5. Create a pull request with a detailed description of your changes',
  },
  react: {
    installation: '1. Clone the repository\n2. Run `npm install` to install dependencies\n3. Run `npm start` to launch the development server',
    usage: 'To use this React project:\n1. Ensure all dependencies are installed\n2. Run `npm start`\n3. Access the application at `http://localhost:3000`\n4. Follow the on-screen prompts or refer to the documentation for specific features',
    contributing: 'We welcome contributions! To contribute:\n1. Fork the repository\n2. Create a new branch: `git checkout -b feature-branch-name`\n3. Make your changes and commit them: `git commit -m "Add some feature"`\n4. Push to the branch: `git push origin feature-branch-name`\n5. Create a pull request with a detailed description of your changes',
  },
  flask: {
    installation: '1. Clone the repository\n2. Create a virtual environment: `python -m venv venv`\n3. Activate the virtual environment:\n   - Windows: `venv\\Scripts\\activate`\n   - macOS/Linux: `source venv/bin/activate`\n4. Install dependencies: `pip install -r requirements.txt`\n5. Run the project: `flask run`',
    usage: 'To use this Flask project:\n1. Ensure all dependencies are installed\n2. Run `flask run`\n3. Access the application at `http://localhost:5000`\n4. Follow the on-screen prompts or refer to the documentation for specific features',
    contributing: 'We welcome contributions! To contribute:\n1. Fork the repository\n2. Create a new branch: `git checkout -b feature-branch-name`\n3. Make your changes and commit them: `git commit -m "Add some feature"`\n4. Push to the branch: `git push origin feature-branch-name`\n5. Create a pull request with a detailed description of your changes',
  },
  angular: {
    installation: '1. Clone the repository\n2. Run `npm install` to install dependencies\n3. Run `ng serve` to launch the development server',
    usage: 'To use this Angular project:\n1. Ensure all dependencies are installed\n2. Run `ng serve`\n3. Access the application at `http://localhost:4200`\n4. Follow the on-screen prompts or refer to the documentation for specific features',
    contributing: 'We welcome contributions! To contribute:\n1. Fork the repository\n2. Create a new branch: `git checkout -b feature-branch-name`\n3. Make your changes and commit them: `git commit -m "Add some feature"`\n4. Push to the branch: `git push origin feature-branch-name`\n5. Create a pull request with a detailed description of your changes',
  },
  vue: {
    installation: '1. Clone the repository\n2. Run `npm install` to install dependencies\n3. Run `npm run serve` to launch the development server',
    usage: 'To use this Vue project:\n1. Ensure all dependencies are installed\n2. Run `npm run serve`\n3. Access the application at `http://localhost:8080`\n4. Follow the on-screen prompts or refer to the documentation for specific features',
    contributing: 'We welcome contributions! To contribute:\n1. Fork the repository\n2. Create a new branch: `git checkout -b feature-branch-name`\n3. Make your changes and commit them: `git commit -m "Add some feature"`\n4. Push to the branch: `git push origin feature-branch-name`\n5. Create a pull request with a detailed description of your changes',
  },
  laravel: {
    installation: '1. Clone the repository\n2. Run `composer install` to install dependencies\n3. Copy `.env.example` to `.env` and configure your environment variables\n4. Run `php artisan key:generate`\n5. Run migrations: `php artisan migrate`\n6. Start the server: `php artisan serve`',
    usage: 'To use this Laravel project:\n1. Ensure all dependencies are installed\n2. Run `php artisan serve`\n3. Access the application at `http://localhost:8000`\n4. Follow the on-screen prompts or refer to the documentation for specific features',
    contributing: 'We welcome contributions! To contribute:\n1. Fork the repository\n2. Create a new branch: `git checkout -b feature-branch-name`\n3. Make your changes and commit them: `git commit -m "Add some feature"`\n4. Push to the branch: `git push origin feature-branch-name`\n5. Create a pull request with a detailed description of your changes',
  },
};

function InputForm({ onSubmit }) {
  const [projectInfo, setProjectInfo] = useState({
    projectName: '',
    description: '',
    features: '',
    installation: '',
    usage: '',
    contributing: '',
    license: '',
  });
  const [errors, setErrors] = useState({});
  const [selectedStack, setSelectedStack] = useState('');

  const handleChange = (e) => {
    setProjectInfo({ ...projectInfo, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleStackChange = (e) => {
    setSelectedStack(e.target.value);
  };

  const handlePreFill = () => {
    if (selectedStack && stacks[selectedStack]) {
      setProjectInfo(prevInfo => ({
        ...prevInfo,
        installation: stacks[selectedStack].installation || '',
        usage: stacks[selectedStack].usage || '',
        contributing: stacks[selectedStack].contributing || '',
      }));
      setErrors({});
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!projectInfo.projectName) newErrors.projectName = 'Project Name is required';
    if (!projectInfo.description) newErrors.description = 'Description is required';
    if (Object.keys(newErrors).length) {
      setErrors(newErrors);
      return;
    }
    onSubmit(projectInfo);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="flex space-x-4 items-end">
        <div className="flex-grow">
          <label htmlFor="stack" className="block text-sm font-medium text-purple-300 mb-1">
            Select Stack
          </label>
          <div className="relative">
            <select
              id="stack"
              value={selectedStack}
              onChange={handleStackChange}
              className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 transition duration-300 ease-in-out appearance-none"
            >
              <option value="" disabled>
                Choose a stack
              </option>
              {Object.keys(stacks).map((stack) => (
                <option key={stack} value={stack} className="text-white-700">
                  {stack.charAt(0).toUpperCase() + stack.slice(1)}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-2.5 pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white-300"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.707a1 1 0 011.414 0L10 11.414l3.293-3.707a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
    
        <button
          type="button"
          onClick={handlePreFill}
          className="bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
          disabled={!selectedStack}
        >
          Pre-fill Installation, Usage & Contributing
        </button>
      </div>

      {Object.entries(projectInfo).map(([key, value]) => (
        <div key={key}>
          <label htmlFor={key} className="block text-sm font-medium text-gray-700 mb-1 capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()} {key !== 'projectName' && key !== 'description' ? '(Optional)' : ''}
          </label>
          {key === 'description' || key === 'features' || key === 'installation' || key === 'usage' || key === 'contributing' ? (
            <textarea
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              placeholder={`Enter ${key}`}

              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"

              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400 resize-vertical"

              rows="4"
            />
          ) : (
            <input
              type="text"
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              placeholder={`Enter ${key}`}
              className="w-full px-3 py-2 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 placeholder-gray-500"
            />
          )}
          {errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
      >
        Generate README
      </button>
    </form>
  );
}

export default InputForm;
