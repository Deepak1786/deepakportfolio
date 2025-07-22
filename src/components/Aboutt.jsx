import React from 'react';

function Aboutt() {
  return (
    <div className='h-screen relative px-8 py-6 bg-white' id="about">
    
      <div className='h-full w-full rounded-[30px] overflow-hidden bg-black relative'>
        <video
          autoPlay
          muted
          loop
          className='w-full h-full object-cover'
          src="file.mp4"
        ></video>
      </div>

     
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        <div className="w-[90%] md:w-[65%] max-h-[90vh] overflow-y-auto bg-white/5 backdrop-blur-md border border-white/20 rounded-xl p-6 shadow-md">
          <h2 className="text-2xl text-white md:text-3xl font-bold mb-6 text-center">My Journey</h2>
          <h1 className="text-xl md:text-2xl font-bold flex items-center justify-center text-white">DEEPAK KUMAR</h1>
          <div className="flex flex-wrap gap-4 items-center justify-center mb-4 text-sm md:text-base text-white">
            <p>📞 +91-9779209898</p>
            <p>📧 deepakkumar2002786@gmail.com</p>
            <p>
              🔗 <a
                href="https://www.linkedin.com/in/deepak-kumar-369293265"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-300"
              >
                LinkedIn Profile
              </a>
            </p>
          </div>

          
          <div className="text-white">
            <h2 className="text-xl font-semibold mt-4">PROFESSIONAL SUMMARY</h2>
            <p className="mb-4 text-sm">
              Motivated and detail-oriented Computer Science and Engineering student with a strong analytical mindset and a passion for research, data 
              analysis, and project coordination. Skilled in programming, web development, and database management. Seeking an internship opportunity to 
              apply my expertise, contribute to innovative projects, and gain industry experience. Eager to collaborate across teams, contribute innovative 
              ideas, and support business growth.
            </p>

            <h2 className="text-xl font-semibold mt-4">SKILLS & COMPETENCIES</h2>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>Programming Languages: C, C++, Python (Basic), Java</li>
              <li>Web Development: HTML, CSS, Tailwind, JavaScript, PHP, React, Firebase, Node.js, Express.js, MongoDB</li>
              <li>Database Management: SQL</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">WORK EXPERIENCE & TRAINING</h2>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>React.js and Firebase – June 2024 - July 2024</li>
              <li>PHP – June 2023 - July 2023</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">PROJECTS</h2>
            <p className="mb-2 text-sm">
              🔗 <a href="https://github.com/Deepak1786" target="_blank" rel="noopener noreferrer" className="underline text-blue-300">GitHub: Deepak1786</a>
            </p>
            <ul className="list-disc list-inside text-sm mb-4 space-y-2">
              <li><strong> Flight & Trip Booking Platform with Smart Sharing MERN Stack (Ongoing Project) </strong></li>
              <p>
                Designed and developed a full-stack flight and trip booking system with React.js, Tailwind CSS, and RESTful APIs, featuring a user dashboard, 
                admin controls, and vendor booking management. 
                Added smart trip-sharing functionality where users can connect with others traveling to the same destination, enabling cost-effective shared 
                trips after mutual agreement. 
                Integrated real-time status tracking, and UI animations for enhanced user interaction, with reusable components for clean and scalable UI 
                architecture.</p> 
              <li><strong>Blood Donation Website</strong></li>
              <p>Designed and developed a user-friendly healthcare website to promote and facilitate blood donation. The platform enables users to register as 
              donors, find nearby blood banks, and request emergency donations from hospitals and individuals. Integrated real-time donor matching, secure 
              authentication, and an intuitive UI for seamless navigation. Built using HTML, CSS, JavaScript, React, and Firebase. </p>
              <li><strong>Clone The Neu Cup</strong></li>
              <p>Created a user-friendly healthcare website for cup therapy, helping people find certified practitioners and book sessions easily. The platform lets 
              professionals register, while users can browse a directory, schedule appointments, and learn about the benefits of therapy.</p>
              <li><strong>E-Commerce Website</strong></li>
              <p>Developed a full-stack e-commerce website using PHP and MySQL. Implemented features such as user authentication, product listing, and cart 
              functionality to enhance the shopping experience.</p>
            </ul>

            <h2 className="text-xl font-semibold mt-4">CERTIFICATIONS & AWARDS</h2>
            <ul className="list-disc list-inside text-sm mb-4">
              <li>Outstanding Hackathon Performance</li>
              <li>Web Dev & Group Discussion Certificates</li>
            </ul>

            <h2 className="text-xl font-semibold mt-4">EDUCATION</h2>
            <p className="text-sm">
              <strong>B.Tech in Computer Science and Engineering</strong><br />
              DAV University, Jalandhar City, Punjab<br />
              Expected Graduation: May 2026
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aboutt;