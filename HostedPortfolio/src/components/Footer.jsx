// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white text-center p-4">
//       <p>&copy; {new Date().getFullYear()} Deepak Kumar. All rights reserved.</p>
//       <div className="flex justify-center space-x-4">
//         <a href="https://github.com" className="hover:text-blue-500">GitHub</a>
//         <a href="https://linkedin.com" className="hover:text-blue-500">LinkedIn</a>
//       </div>
//     </footer>
//   );
// };
// export default Footer;
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-300 py-10 mt-10 shadow-2xl">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">

        {/* Logo and Description */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">Deepak Kumar</h1>
          <p className="text-sm">
            MERN Stack Developer | Creating clean and powerful digital experiences.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li><a href="#about" className="hover:text-white">About Me</a></li>
            <li><a href="#projects" className="hover:text-white">Projects</a></li>
            <li><a href="#contact" className="hover:text-white">Contact</a></li>
            <li><a href="/hireme" className="hover:text-white">Hire Me</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">Contact</h2>
          <ul className="space-y-2 text-sm">
            <li>📍 Jalandhar, Punjab, India</li>
            <li>📞 +91 9779209898</li>
            <li>📧 deepakkumar2002786@gmail.com</li>
            <li>
              <div className="flex space-x-4 mt-2">
                <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a>
                <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-gray-400 text-xs mt-10 border-t border-gray-600 pt-4">
        © {new Date().getFullYear()} Deepak Kumar. All rights reserved.
      </div>
    </footer>
    
  );
};

export default Footer;
