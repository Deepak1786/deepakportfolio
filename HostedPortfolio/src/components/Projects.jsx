import React from 'react';
import { Link } from 'react-router-dom';
import projectData from './projectData.json';

function Projects() {
  return (
    <div className="p-10 bg-white  text-black" id="projects">
      <style>{`
        @keyframes slideProjects {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .slider-wrapper {
          overflow: hidden;
          position: relative;
        }

        .slider-track {
          display: flex;
          animation: slideProjects 40s linear infinite;
          width: max-content;
        }

        .slider-wrapper:hover .slider-track {
          animation-play-state: paused;
        }

        .project-card {
          min-width: 10%;
          max-width: 10%;
          flex: 0 0 auto;
          margin-right: 1.5rem;
        }

        @media (max-width: 768px) {
          .project-card {
            min-width: 20%;
            max-width: 20%;
          }
        }
      `}</style>

      <h1 className="text-3xl font-bold mb-6 text-center">My Projects</h1>

      <div className="slider-wrapper">
  <div className="slider-track">
    {[...projectData, ...projectData].map((project, index) => (
      <div key={index} className="project-card">
        <div className="group border rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-4 bg-white">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-48 object-cover rounded-lg transform transition-transform duration-500 group-hover:scale-105"
          />
          <h2 className="text-xl font-semibold mt-3 group-hover:text-indigo-600 transition duration-300">
            {project.title}
          </h2>
          <p className="text-gray-700 mt-1">{project.description}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.tech.map((tech, i) => (
              <span key={i} className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white text-xs px-2 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
          <Link
            to={`/project/${project.id}`}
            className="text-blue-600 hover:text-indigo-800 hover:underline text-sm mt-2 inline-block transition"
          >
            View Details →
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default Projects;