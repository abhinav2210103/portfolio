import React, { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import hero from "../assets/hero.png";
import hero4 from "../assets/hero3.png";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  const [isHero2, setIsHero2] = useState(false);

  const handleImageClick = () => {
    setIsHero2((prev) => !prev);
  };

  return (
    <div className="hero-section bg-cover h-auto">
      <div className="pt-10 md:hidden flex justify-center" onClick={handleImageClick}>
        <img src={isHero2 ? hero4 : hero} className="rounded-full" style={{ height: 200, width: 200 }} />
      </div>

      <div className="flex md:ml-5">
        <div className="md:pl-20 md:pt-28 pt-5 pl-5 flex-col md:w-[65%]">
          <div className="md:text-[3rem] text-[2rem] text-[#000066] font-semibold font-mono">
            Hi There,
          </div>
          <div className="flex md:gap-3 gap-2 flex-wrap">
            <div className="text-[2rem] md:text-[3rem] text-[#000066] font-semibold font-mono">I'm Abhinav</div>
            <div className="md:text-[3rem] text-[2rem] text-[#ff9900] font-semibold font-mono">Mishra</div>
          </div>
          <div className="md:flex flex-wrap">
            <div className="text-[2rem] md:text-[3rem] text-[#000066] font-semibold font-mono mr-10 md:mr-0">I Am Into</div>
            <span className="w-50 overflow-hidden">
              <span className="md:pl-4 text-[#ff9900] md:text-[3rem] text-[2rem] font-semibold font-mono">
                <Typewriter
                  words={["Web Development", "Competitive Coding"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={130}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </span>
          </div>
          <div>
            <a
              href="/Abhinav_Resume.pdf"
              download
              className="border-2 bg-[#000066] text-white px-5 py-3 text-[1.5rem] font-medium rounded-3xl font-mono inline-block"
              onClick={(e) => {
                e.preventDefault();
                window.open("/Abhinav_Resume.pdf", "_blank");
                setTimeout(() => {
                  const link = document.createElement("a");
                  link.href = "/Abhinav_Resume.pdf";
                  link.setAttribute("download", "Abhinav_Resume.pdf");
                  document.body.appendChild(link);
                  link.click();
                  link.remove();
                }, 1000);
              }}
            >
              Resume
            </a>
            <div className="gap-4 mt-4 flex">
        <div>
          <a
            href="https://www.linkedin.com/in/abhinav-mishra-b95301258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={42} />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/abhinav_mishra29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={42} />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/abhinav2210103"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={42} />
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/abhinavetw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={42} />
          </a>
        </div>
      </div>
          </div>
        </div>
        <div className="flex-col pt-10 md:flex hidden" onClick={handleImageClick}>
          <img src={isHero2 ? hero4 : hero} className="rounded-full" style={{ height: 500 }} />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
