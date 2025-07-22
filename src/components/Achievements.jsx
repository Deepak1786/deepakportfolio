import React from "react";
import { motion } from "framer-motion";

const trainings = [
  {
    title: "React.js & Firebase Training",
    org: "Online",
    date: "June 2024 – July 2024",
  },
  {
    title: "PHP Development Training",
    org: "Online",
    date: "June 2023 – July 2023",
  },
];

const certificates = [
  "Outstanding Performance in a Hackathon",
  "Certificate of Achievement in Group Discussion & Web Development Training Program",
];

const Achievements = () => {
  return (
    <section className="min-h-screen bg-[#0f0c29] text-white py-16 px-6">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-12 text-cyan-400"
      >
        Internships, Trainings & Certificates
      </motion.h2>

      {/* Internship Section */}
      <div className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Internship</h3>
        <div className="bg-[#1e1e2f] p-6 rounded-xl border border-cyan-600">
          <p className="text-xl font-semibold">Software Developer Intern – Tripar</p>
          <p className="text-gray-400">May 2025 – Nov 2025 | Remote</p>
          <p className="text-gray-300 mt-2">
            Selected for internship based on skills and interview. First 3 months are unpaid,
            followed by 3 months of paid experience. Working on real-world software development projects.
          </p>
        </div>
      </div>

      {/* Trainings */}
      <div className="max-w-5xl mx-auto mb-12">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Trainings</h3>
        {trainings.map((training, index) => (
          <div
            key={index}
            className="bg-[#1e1e2f] p-5 rounded-xl mb-4 border border-gray-700"
          >
            <p className="text-lg font-semibold text-cyan-200">{training.title}</p>
            <p className="text-sm text-gray-400">{training.org} | {training.date}</p>
          </div>
        ))}
      </div>

      {/* Certificates */}
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4 text-cyan-300">Certificates</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {certificates.map((cert, index) => (
            <li key={index}>{cert}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Achievements;
