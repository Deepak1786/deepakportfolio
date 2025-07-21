// Page2.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Page2 = () => {
  const containerRef = useRef();

  useEffect(() => {
    const words = containerRef.current.querySelectorAll(".word");

    words.forEach((word) => {
      gsap.fromTo(
        word,
        {
          rotateX: -90,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          rotateX: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          transformOrigin: "bottom center",
          scrollTrigger: {
            trigger: word,
            start: "top 90%",
            end: "top 60%",
            scrub: true,
          },
        }
      );
    });
  }, []);

  // magnetic hover effect
  const handleMouseMove = (e, el) => {
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 20;
    const y = (e.clientY - rect.top - rect.height / 2) / 20;
    gsap.to(el, {
      rotateX: -y,
      rotateY: x,
      duration: 0.3,
      ease: "power1.out",
    });
  };

  const resetTilt = (el) => {
    gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.3 });
  };

  return (
    <div className="text-center p-10">
        <h3>© deepakportfolio.com | Design and Developed by Deepak</h3>

 <div
      ref={containerRef}
      className="relative py-8"
      style={{ perspective: "1200px", overflow: "hidden" }}
    >
      {["Building", "web", "experiences", "that", "matter"].map((word, i) => (
        <div key={i}>
          <h1
            className="word text-black text-[20vw] font-[font1] uppercase leading-[16vw]"
            style={{
              transformStyle: "preserve-3d",
              backfaceVisibility: "hidden",
              willChange: "transform",
              transition: "transform 0.2s ease-out",
              display: "inline-block",
              cursor: "default",
            }}
            onMouseMove={(e) => handleMouseMove(e, e.currentTarget)}
            onMouseLeave={(e) => resetTilt(e.currentTarget)}
          >
            {word}
          </h1>
        </div>
      ))}
    </div>
      {/* svg Logos  */}
   <div className="flex items-center justify-center space-x-4 mt-4 " id="contact">
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


      <div className="h-1 w-1/3 relative mt-5 left-1/3 -translate-x-1/2 bg-black">

      </div>
    </div>
   
  );
};

export default Page2;
