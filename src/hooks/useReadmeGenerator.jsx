import { useState, useEffect } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

const useReadmeGenerator = ({ projectName, description, image, features, installation, usage, contributing, license }) => {
  const [readmeContent, setReadmeContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [viewMode, setViewMode] = useState('markdown');
  // const MODEL_NAME = import.meta.env.VITE_MODEL_NAME;
  // const API_KEY = import.meta.env.VITE_API_KEY;
  const MODEL_NAME = 'gemini-1.0-pro';
  const API_KEY = 'AIzaSyAB3Bdey5tQ2x_PTa6qq6tuviIQUldDIbE';

  useEffect(() => {
    if (!projectName || !description) {
      return;
    }

    const generateReadme = async () => {
      setIsLoading(true);
      setError(null);

      if (!API_KEY) {
        setError("API key is missing. Please check your environment variables.");
        setIsLoading(false);
        return;
      }

      if (!MODEL_NAME) {
        setError("Model name is missing. Please check your environment variables.");
        setIsLoading(false);
        return;
      }

      try {
        const genAI = new GoogleGenerativeAI(API_KEY);
        const model = genAI.getGenerativeModel({ model: MODEL_NAME });

        let prompt = `Generate a comprehensive README.md file for a project named "${projectName}" with the following description: "${description}". Include sections for introduction, features, installation, usage, and contribution guidelines.`;

        if (image) {
          prompt += ` Include the following image in the README: ${image}`;
        }

        if (features) prompt += ` The features are: ${features}`;
        if (installation) prompt += ` The installation instructions are: ${installation}`;
        if (usage) prompt += ` The usage instructions are: ${usage}`;
        if (contributing) prompt += ` The contribution guidelines are: ${contributing}`;
        if (license) prompt += ` The license is: ${license}`;

        const result = await model.generateContent(prompt);
        
        const response = await result.response;
        setReadmeContent(response.text());
      } catch (error) {
        setError("Error generating README: " + error.message);
        console.error("Error generating README:", error);
      } finally {
        setIsLoading(false);
      }
    };

    generateReadme();
  }, [projectName, description, image, features, installation, usage, contributing, license]);

  const toggleViewMode = () => {
    setViewMode(prevMode => prevMode === 'markdown' ? 'rendered' : 'markdown');
  };

  return { formattedReadme: readmeContent, isLoading, error, viewMode, toggleViewMode };
};

export default useReadmeGenerator;