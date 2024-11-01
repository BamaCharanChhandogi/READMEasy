import React, { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ProfileForm from "../components/ProfileForm";
import EditableOutput from "../components/EditableOutput";
import OutputDisplay from "../components/OutputDisplay";

function GitHubProfileGenerator() {
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    title: "",
    currentWork: "",
    learning: "",
    askMeAbout: "",
    email: "",
    linkedin: "",
    portfolio: "",
    githubUsername: "",
    languages: "",
    frameworks: "",
    tools: "",
  });

  const [hasQuineAccount, setHasQuineAccount] = useState(false);
  const [generatedProfile, setGeneratedProfile] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [viewMode, setViewMode] = useState('markdown');

  const handleChange = (e) => {
    setProfileInfo({ ...profileInfo, [e.target.name]: e.target.value });
  };

  const generateProfile = async () => {
    setGeneratedProfile("");
    setIsLoading(true);
    setError(null);

    const API_KEY = import.meta.env.VITE_API_KEY;
    const MODEL_NAME = import.meta.env.VITE_MODEL_NAME;

    if (!API_KEY) {
      setError("API key is missing. Please check your environment variables.");
      setIsLoading(false);
      return;
    }

    try {
      const genAI = new GoogleGenerativeAI(API_KEY);
      const model = genAI.getGenerativeModel({ model: MODEL_NAME });

      const template = `
<img align="right" src="https://visitor-badge.laobi.icu/badge?page_id=${
        profileInfo.githubUsername
      }.${profileInfo.githubUsername}" />
<div align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?font=Righteous&size=35&center=true&vCenter=true&width=500&height=70&duration=4000&lines=Hi+There!+👋;I'm+${encodeURIComponent(
    profileInfo.name
  )}!;" />
</div>
<h3 align="center">${profileInfo.title}</h3>
<br/>
<div align="center">
 
 🔭 I'm currently working in **${profileInfo.currentWork}**
 
 🌱 I'm currently learning **${profileInfo.learning}**

💬 Ask me about **${profileInfo.askMeAbout}**
 </div>
 
<div align="center"> 
  <a href="mailto:${profileInfo.email}">
    <img src="https://img.shields.io/badge/Gmail-333333?style=for-the-badge&logo=gmail&logoColor=red" />
  </a>
  <a href="${profileInfo.linkedin}" target="_blank">
    <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank" />
  </a>
  <a href="${profileInfo.portfolio}" target="_blank">
     <img src="https://img.shields.io/badge/Portfolio-FF5722?style=for-the-badge&logo=todoist&logoColor=white" target="_blank" />
  </a>
</div>
 <hr/>
 
<h2 align="center">⚒️ Languages-Frameworks-Tools ⚒️</h2>
<div align="center">
    <img src="https://skillicons.dev/icons?i=${profileInfo.languages},${
        profileInfo.frameworks
      },${profileInfo.tools}" />
</div>
<hr/>

<h2 align="center">⚡ Stats ⚡</h2>
<br>
<div align=center>
  <img width=390 src="https://streak-stats.demolab.com?user=${
    profileInfo.githubUsername
  }&theme=react&border_radius=10" alt="streak stats"/>
  <img width=390 src="https://github-readme-stats.vercel.app/api?username=${
    profileInfo.githubUsername
  }&show_icons=true&theme=react&rank_icon=github&border_radius=10" alt="readme stats" />
  <br/>
  <img width=325 align="center" src="https://github-readme-stats.vercel.app/api/top-langs/?username=${
    profileInfo.githubUsername
  }&hide=HTML&langs_count=8&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&exclude_repo=github-readme-stats" alt="top langs" />
</div>
<hr/>
${
  hasQuineAccount
    ? `
<div align=center>
  <img width=390 src="https://stats.quine.sh/${profileInfo.githubUsername}/dependencies?theme=dark" alt="dependencies graph"/>
</div>
<br>
`
    : ""
}
<img src="https://github-readme-activity-graph.vercel.app/graph?username=${
        profileInfo.githubUsername
      }&theme=merko" alt="${profileInfo.name}'s github activity graph"/>
<hr/>
<br/>
      `;

      const prompt = `Generate a GitHub Profile README using the following template and information:
  
  ${template}
  
  Please fill in the template with the provided information. Do not add any additional sections. Stick strictly to the provided template structure.`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  setGeneratedProfile(response.text());
  setIsEditing(false);
} catch (error) {
  setError("Error generating profile README: " + error.message);
  console.error("Error generating profile README:", error);
} finally {
  setIsLoading(false);
}
};

const handleSaveEdit = (newContent) => {
setGeneratedProfile(newContent);
setIsEditing(false);
};


  return (
    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
  <h2 className="text-2xl font-semibold text-gray-800 mb-7 inline-block relative overflow-hidden group">
    GitHub Profile README Generator
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </h2>
  
  <ProfileForm profileInfo={profileInfo} handleChange={handleChange} />

  <div className="flex items-center my-5">
    <label
      htmlFor="hasQuineAccount"
      className="text-sm font-medium text-gray-700 mr-2"

const toggleViewMode = () => {
setViewMode(prevMode => prevMode === 'markdown' ? 'rendered' : 'markdown');
};

return (
<div className="bg-gray-800 rounded-lg shadow-lg p-8 mb-8">
  <h2 className="text-2xl font-bold text-purple-400 mb-7 inline-block relative overflow-hidden group">
    GitHub Profile README Generator
    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-400 to-pink-500 transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
  </h2>
  <ProfileForm profileInfo={profileInfo} handleChange={handleChange} />
  <div className="flex items-center my-5">
    <label
      htmlFor="hasQuineAccount"
      className="text-sm font-medium text-purple-300 mr-2"

    >
      Do you have a Quine account? (for dependencies graph)
    </label>
    <select
      id="hasQuineAccount"
      value={hasQuineAccount ? "yes" : "no"}
      onChange={(e) => setHasQuineAccount(e.target.value === "yes")}

      className="bg-gray-100 border border-gray-300 text-gray-800 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 px-2 py-1 transition duration-150 ease-in-out hover:bg-gray-200"

      className="bg-gray-700 border border-gray-600 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 px-2 py-1"

    >
      <option value="no">No</option>
      <option value="yes">Yes</option>
    </select>
  </div>


      <button
        type="button"
        onClick={generateProfile}
        className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
      >
        Generate Profile README
      </button>
      {isLoading && (
        <p className="text-purple-400 mt-4">Generating profile README...</p>
      )}
      {error && <p className="text-red-400 mt-4">{error}</p>}
      {generatedProfile && (
       <div className="mt-8 relative">
       <h3 className="text-xl font-bold text-purple-400 mb-2">
         Generated Profile README
       </h3>
       <button
         onClick={copyToClipboard}
         className="absolute top-0 right-0 bg-green-500 text-white py-1 px-3 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition duration-300"
       >
         {copied ? "Copied!" : "Copy"}
       </button>
       <pre className="bg-black p-4 rounded-lg text-white whitespace-pre-wrap">
         {generatedProfile}
       </pre>
     </div>
     

  <button
    type="button"
    onClick={generateProfile}
    className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50 transition duration-300"
  >
    Generate Profile README
  </button>
  {isLoading && (
    <p className="text-purple-400 mt-4">Generating profile README...</p>
  )}
  {error && <p className="text-red-400 mt-4">{error}</p>}
  {generatedProfile && (
    <div className="mt-8 relative">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-purple-400">
          Generated Profile README
        </h3>
        <div className="space-x-4">
          {!isEditing && (
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
            >
              Edit
            </button>
          )}
          {!isEditing && (<button
            onClick={toggleViewMode}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded transition duration-300"
          >
            Switch to {viewMode === 'markdown' ? 'Rendered' : 'Markdown'} View
          </button>)}
        </div>
      </div>
      {isEditing ? (
        <EditableOutput 
          content={generatedProfile} 
          onSave={handleSaveEdit} 
        />
      ) : (
        <OutputDisplay 
          content={generatedProfile} 
          viewMode={viewMode} 
        />

      )}
    </div>
  )}
</div>
);
}

export default GitHubProfileGenerator;

