
import React from "react";

const Hireme = () => {
  return (
    <div className="min-h-screen px-4 sm:px-6 py-12 bg-gray-100  flex justify-center items-start">
      <div className="w-full max-w-6xl bg-white  rounded-2xl  shadow-2xl relative p-6 md:p-12 flex flex-col lg:flex-row gap-10">
       {/* Logo */}
<img
  src="/Hire.png"
  alt="Logo"
  className="absolute top-6 left-60 w-24 h-auto"
/>

{/* Vertical line */}
<div className="hidden lg:block absolute top-0 bottom-0 left-1/2 w-[1px] bg-gray-300"></div>

{/* Horizontal line */}
<div className="absolute top-36 left-0 w-1/2 h-[1px] bg-gray-300"></div>

{/* Left Side: Contact Info and Map */}
<div className="lg:w-1/2 w-full z-10 mt-30 px-6 space-y-6">

  <div>
    <p className="font-semibold">📍 Address:</p>
    <p>Jalandhar City, Punjab</p>
  </div>

  <div>
    <p className="font-semibold">📞 Call Me:</p>
    <p>+91 9779209898</p>
  </div>

  <div>
    <p className="font-semibold">📧 Email:</p>
    <p>deepakkumar2002786@gmail.com</p>
  </div>

  <div className="mt-4">
    <iframe
  title="map"
  src="https://maps.google.com/maps?q=31.3632481,75.5894659&z=17&output=embed"
  className="w-full h-64 rounded-xl border"
  allowFullScreen=""
  loading="lazy"
/>

  </div>
</div>


        {/* Right Side: Contact Form */}
        <div className="lg:w-1/2 w-full space-y-6 z-10">
         
          <img src="r.png" alt="" className="h-[40vh]"/>
          {/* svg Logos  */}
   <div className="flex items-center justify-center space-x-4 mt-4 ">
  <a href="https://www.linkedin.com/in/deepak-kumar-369293265/" target="_blank" rel="noopener noreferrer">
    <img src="/svg/linkedin-svgrepo-com.svg" alt="LinkedIn" className="w-15 h-16" />
  </a>
  <a href="https://x.com/Deepakx__17" target="_blank" rel="noopener noreferrer">
    <img src="/svg/twitter_x_new_logo_x_icon_256077.svg" alt="Twitter" className="w-15 h-16" />
  </a>
  <a href="https://www.fiverr.com/deepakx_17" target="_blank" rel="noopener noreferrer">
    <img src="/svg/fiverr-svgrepo-com.svg" alt="Fiverr" className="w-15 h-16" />
  </a>
  <a href="https://github.com/Deepak1786" target="_blank" rel="noopener noreferrer">
    <img src="/svg/github-logo_icon-icons.com_73546.svg" alt="Instagram" className="w-13 h-12" />
  </a>
</div>
      {/* svg logos ends  */}
        </div>

        
      </div>
    </div>
  );
};

export default Hireme;