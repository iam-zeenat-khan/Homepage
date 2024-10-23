import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'; // Importing icons for edit and delete
import 'animate.css'; // For animations

function Projects() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Marketing Campaign",
      description: "Develop and execute a marketing campaign for our new product.",
      icon: "https://via.placeholder.com/64",
    },
    {
      id: 2,
      title: "Website Redesign",
      description: "Revamp our website to improve user experience and SEO.",
      icon: "https://via.placeholder.com/64",
    },
  ]);

  const handleAddProject = () => {
    const newProjectId = projects.length + 1;
    const newProject = {
      id: newProjectId,
      title: `New Project ${newProjectId}`,
      description: "",
      icon: "https://via.placeholder.com/64",
    };
    setProjects([...projects, newProject]);
  };

  return (
    <div className="projects-section bg-tan p-4 rounded-md shadow-md animate__animated animate__fadeIn">
      <h2 className="text-xl font-bold mb-2 text-brown">Projects</h2>
      <ul className="space-y-4">
        {projects.map((project) => (
          <li
            key={project.id}
            className="flex items-center justify-between py-3 px-4 border-b border-gray-200 bg-white rounded-md animate__animated animate__fadeInUp"
          >
            <div className="flex items-center">
              <img
                src={project.icon}
                alt={project.title}
                className="w-8 h-8 mr-3 rounded-full"
              />
              <span className="text-brown">{project.title}</span>
            </div>
            <div className="flex items-center">
              <button className="text-blue-500 hover:text-blue-700 mr-3">
                <FaEdit />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="bg-brown text-white px-4 py-2 rounded-md mt-4 hover:bg-brown-dark transition-colors animate__animated animate__pulse"
        onClick={handleAddProject}
      >
        + New Project
      </button>
    </div>
  );
}

export default Projects;
