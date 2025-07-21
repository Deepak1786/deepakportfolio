import React from 'react';

const About = () => {
  return (
    <div className='h-screen relative px-8 py-6 bg-white' id="about">
      <div className='h-full w-full rounded-[30px] overflow-hidden bg-black relative'>
        <video
          autoPlay
          muted
          loop
          className='w-full h-full object-cover absolute top-0 left-0 z-0'
          src="moon.mp4"
        ></video>

        {/* Content container */}
        <div className="relative z-10 p-[5vw]">
          <h1 className='text-white text-[10vw] font-[font1] mb-6'>About Me</h1>
          <p className='text-white text-lg'>
            Hi! I'm <span className="text-white ">Deepak Kumar</span>, a passionate<br></br> Computer Science & Engineering student<br></br> and aspiring Full-Stack Web Developer.<br></br>I’ve done hands-on work in healthcare,<br></br> e-commerce, and animated sites — <br></br>blending tech and creativity.<br></br> I’m currently interning as a Software Developer Intern at Tripar,<br></br> gaining real-world experience in remote teams. <br></br>Currently diving deep into the <span className="text-cyan-400 font-medium">MERN stack</span><br></br> I'm building real-world projects<br></br> that solve problems and offer great user experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;

