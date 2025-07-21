import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import projectData from './projectData.json';

function Projectdetail() {
  const { id } = useParams();
  const project = projectData.find((p) => p.id === id);
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    let animationFrameId;

    const scroll = () => {
      if (track.scrollLeft >= track.scrollWidth / 2) {
        track.scrollLeft = 0;
      } else {
        track.scrollLeft += 1;
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  if (!project) {
    return <div className="text-center text-red-500 text-xl mt-20">Project not found.</div>;
  }

  return (
    <div className="p-10 min-h-screen bg-white text-black">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-700 mb-4">{project.descriptionn}</p>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Tech Stack:</h2>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech, i) => (
            <span key={i} className="bg-black text-white text-xs px-3 py-2 rounded-full">{tech}</span>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Certificate:</h2>
        <a href={project.certificate} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
          View Certificate
        </a>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Screenshots:</h2>

        <style>{`
          .slider-wrapper {
            overflow: hidden;
            position: relative;
            width: 100%;
          }

          .slider-track {
            display: flex;
            width: max-content;
            animation: scrollInfinite 60s linear infinite;
          }
          .slider-wrapper:hover .slider-track {
                    animation-play-state: paused;
                  }
          @keyframes scrollInfinite {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }

          .project-card {
            flex: 0 0 auto;
            width: 10%;
            padding: 1px;
            box-sizing: border-box;
            transition: transform 0.3s ease;
          }

          .project-card:hover {
            transform: translateX(10px);
          }
          .project-card:hover img {
            object-fit: contain;
          }
          .project-card .group {
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }

          .project-card:hover .group {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
          }

          @media (max-width: 768px) {
            .project-card {
              width: 100%;
            }
          }
        `}</style>

        <div className="slider-wrapper hidden md:block">
          <div className="slider-track">
            {[...project.screenshots, ...project.screenshots].map((img, index) => (
              <div key={index} className="project-card">
                <div className="group border rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 p-4 bg-white">
                  <img
                    src={img}
                    alt={`Screenshot ${index + 1}`}
                    className=" h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-150 group-hover:h-[300px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
        <div className="grid gap-4 md:hidden">
  {project.screenshots.map((img, index) => (
    <div key={index} className="border rounded-xl shadow-md p-4 bg-white">
      <img
        src={img}
        alt={`Screenshot ${index + 1}`}
        className="h-48 w-full object-cover rounded-lg"
      />
    </div>
  ))}
</div>


      <Link to="/" className="inline-block mt-6 text-blue-600 hover:underline">← Back to Projects</Link>
    </div>
  );
}

export default Projectdetail;
