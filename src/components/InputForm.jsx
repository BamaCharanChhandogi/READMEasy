import React, { useState } from 'react';

const stacks = {
  python: {
    projectName: 'Python Project',
    description: 'A Python-based project designed for various purposes, such as automation, data processing, or web development.',
    features: '- Cross-platform compatibility\n- Extensive library support\n- Ease of use for scripting\n- Ideal for data analysis and AI/ML tasks',
    installation: '1. Clone the repository\n2. Run `pip install -r requirements.txt` to install dependencies\n3. Run `python main.py` to start the project',
    usage: 'To use the Python project, ensure all dependencies are installed and follow the instructions in the README file for setting up and running specific features.',
    contributing: 'Contributions are welcome! Please fork the repository, create a new branch, and open a pull request with your changes.',
    license: 'MIT',
  },
  mern: {
    projectName: 'MERN Stack Project',
    description: 'A full-stack web application using MongoDB, Express, React, and Node.js, offering a dynamic and responsive web experience.',
    features: '- RESTful API with Express and Node.js\n- MongoDB for NoSQL database operations\n- React frontend for a smooth UI/UX\n- Full-stack JavaScript implementation',
    installation: '1. Clone the repository\n2. Run `npm install` in both the root and client directories to install dependencies\n3. Set up your MongoDB database by configuring the `.env` file\n4. Run `npm run dev` to start both the server and the React client simultaneously',
    usage: 'Access the application in your browser after starting the server and client. Refer to the API documentation for backend routes.',
    contributing: 'Contributions are encouraged! Fork the repository, implement new features, and open a pull request. Ensure your code adheres to the project’s guidelines.',
    license: 'MIT',
  },
  django: {
    projectName: 'Django Project',
    description: 'A web application built with the Django framework, focusing on backend development, scalability, and rapid deployment.',
    features: '- Built-in ORM for database interaction\n- Scalable architecture\n- Strong security features\n- Easily integrates with frontend frameworks',
    installation: '1. Clone the repository\n2. Create a virtual environment with `python -m venv venv`\n3. Activate the virtual environment and install dependencies with `pip install -r requirements.txt`\n4. Apply migrations: `python manage.py migrate`\n5. Start the server with `python manage.py runserver`',
    usage: 'Visit `http://localhost:8000` in your browser to interact with the application. Refer to the project’s documentation for further details on available routes and features.',
    contributing: 'We welcome contributions! Please submit a pull request and ensure that your code passes all tests before merging.',
    license: 'MIT',
  },
  react: {
    projectName: 'React Project',
    description: 'A front-end web application built with React, designed to be fast, responsive, and dynamic, focusing on modular and reusable components.',
    features: '- Component-based architecture\n- Virtual DOM for high performance\n- Reusable and modular codebase\n- Efficient state management with hooks or Redux',
    installation: '1. Clone the repository\n2. Run `npm install` to install all necessary packages\n3. Start the development server with `npm start`',
    usage: 'Navigate to `http://localhost:3000` to access the application. Use the development tools available in your browser for debugging and testing.',
    contributing: 'Contributions are welcome! Please open an issue first to discuss what you would like to change, then create a pull request with your modifications.',
    license: 'MIT',
  },
  flask: {
    projectName: 'Flask Project',
    description: 'A lightweight web application built using the Flask framework, ideal for small to medium-scale web applications and APIs.',
    features: '- Minimalistic and flexible\n- Built-in development server\n- Simple routing and request handling\n- Easy to integrate with various databases',
    installation: '1. Clone the repository\n2. Install the dependencies by running `pip install -r requirements.txt`\n3. Run the Flask development server with `flask run`',
    usage: 'To use this Flask project, navigate to `http://localhost:5000` in your browser. Check the API documentation for available endpoints.',
    contributing: 'Contributions are appreciated! Please follow the GitHub flow of forking the repository and creating a pull request with your changes.',
    license: 'MIT',
  },
  angular: {
    projectName: 'Angular Project',
    description: 'A single-page application built using Angular, featuring TypeScript for a strong, scalable frontend solution.',
    features: '- Two-way data binding\n- Component-driven architecture\n- CLI tools for streamlined development\n- Comprehensive documentation',
    installation: '1. Clone the repository\n2. Run `npm install` to set up dependencies\n3. Start the development server with `ng serve`',
    usage: 'Navigate to `http://localhost:4200` in your browser to interact with the application. The project supports modular extensions for scaling.',
    contributing: 'We welcome contributions! Fork the repository, implement new features, and submit a pull request.',
    license: 'MIT',
  },
  vue: {
    projectName: 'Vue Project',
    description: 'A front-end application built with Vue.js, focused on fast rendering and ease of integration with other libraries and projects.',
    features: '- Reactive data binding\n- Component-based structure\n- Virtual DOM for optimized performance\n- Lightweight framework with easy integration',
    installation: '1. Clone the repository\n2. Install dependencies by running `npm install`\n3. Start the development server with `npm run serve`',
    usage: 'Open `http://localhost:8080` in your browser to access the Vue.js application. The project supports dynamic updates and modular expansions.',
    contributing: 'Contributions are encouraged! Fork the repository, add new features, and submit a pull request.',
    license: 'MIT',
  },
  laravel: {
    projectName: 'Laravel Project',
    description: 'A powerful web application built using the Laravel framework, focusing on elegance and speed for backend development.',
    features: '- Eloquent ORM for database interactions\n- Artisan CLI for automated tasks\n- Blade templating engine\n- Built-in authentication system',
    installation: '1. Clone the repository\n2. Run `composer install` to install dependencies\n3. Run `php artisan serve` to start the development server',
    usage: 'Access the application by visiting `http://localhost:8000`. Check the routes file for available endpoints and functionalities.',
    contributing: 'Contributions are appreciated! Please ensure your changes are properly tested before submitting a pull request.',
    license: 'MIT',
  },
  rubyOnRails: {
    projectName: 'Ruby on Rails Project',
    description: 'A web application developed with Ruby on Rails, known for its convention over configuration approach and rapid development.',
    features: '- Active Record for ORM\n- Built-in tools for RESTful routes\n- Easy integration with frontend frameworks\n- Strong community support',
    installation: '1. Clone the repository\n2. Run `bundle install` to install the required gems\n3. Run `rails server` to start the development server',
    usage: 'Access the application at `http://localhost:3000`. Rails provides robust generators for scaffolding and building complex applications.',
    contributing: 'We encourage contributions! Please follow the best practices when submitting a pull request and ensure your code passes all tests.',
    license: 'MIT',
  },
  springBoot: {
    projectName: 'Spring Boot Project',
    description: 'A Java-based web application built using Spring Boot, offering a fast and comprehensive way to develop standalone production-grade apps.',
    features: '- Microservice architecture\n- Embedded servers (Tomcat, Jetty)\n- Seamless data access with JPA and Hibernate\n- Integrated testing framework',
    installation: '1. Clone the repository\n2. Run `mvn install` to install dependencies\n3. Start the application by running `mvn spring-boot:run`',
    usage: 'The Spring Boot application will be available at `http://localhost:8080`. Review the application properties for customizable configurations.',
    contributing: 'Contributions are welcome! Please follow the best practices in code formatting and testing, then submit a pull request.',
    license: 'Apache 2.0',
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
      setProjectInfo(stacks[selectedStack]);
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
            <option key={stack} value={stack} className="text-gray-700">
              {stack.charAt(0).toUpperCase() + stack.slice(1)}
            </option>
          ))}
        </select>
        <div className="absolute right-3 top-2.5 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-300"
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
      Pre-fill
    </button>
  </div>

      {Object.entries(projectInfo).map(([key, value]) => (
        <div key={key}>
          <label htmlFor={key} className="block text-sm font-medium text-purple-300 mb-1 capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()} {key !== 'projectName' && key !== 'description' ? '(Optional)' : ''}
          </label>
          {key === 'description' || key === 'features' || key === 'installation' || key === 'usage' || key === 'contributing' ? (
            <textarea
              id={key}
              name={key}
              value={value}
              onChange={handleChange}
              placeholder={`Enter ${key}`}
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
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-white placeholder-gray-400"
            />
          )}
          {errors[key] && <p className="text-red-500 text-sm mt-1">{errors[key]}</p>}
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
      >
        Generate README
      </button>
    </form>
  );
}

export default InputForm;