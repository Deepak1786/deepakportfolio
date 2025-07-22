import React from 'react';

function Tech() {
  const techList = [
    "HTML", "CSS", "JavaScript", "React", "Tailwind", "Firebase",
    "Node.js", "MongoDB", "PHP", "SQL", "Git", "GitHub"
  ];

  return (
    <div className="w-full overflow-hidden mt-10 py-6 bg-white/10 relative text-white">
      <style>{`
        @keyframes seamlessScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .scroll-wrapper {
          display: flex;
          width: max-content;
          animation: seamlessScroll 30s linear infinite;
        }

        .scroll-container:hover .scroll-wrapper {
          animation-play-state: paused;
        }

        .fade {
          position: absolute;
          background: linear-gradient(
            90deg,
            rgba(15, 23, 42, 1) 10%,
            rgba(15, 23, 42, 0) 25%,
            rgba(15, 23, 42, 0) 10%,
            rgba(15, 23, 42, 1) 90%
          );
          inset: 0;
          pointer-events: none;
          z-index: 10;
        }
      `}</style>

      {/* Heading */}
      <h2 className="text-2xl text-black md:text-3xl font-bold mb-6 text-center">🚀 Technologies I Work With</h2>

      <div className="scroll-container relative overflow-hidden px-4 whitespace-nowrap">
        <div className="fade" />

        {/* 2x duplicated tech items inside scroll wrapper */}
        <div className="scroll-wrapper">
          {[...techList, ...techList].map((tech, index) => (
            <div
              key={index}
              className="text-black text-sm md:text-base font-semibold bg-white/30 px-5 py-2 mx-2 rounded-lg shadow-md border border-white/30 hover:scale-105 transition-transform duration-10"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Tech;
