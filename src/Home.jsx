import React, { useState, useRef } from "react";
import "./App.css";
import b2 from "./assets/b2.gif";
import hero from "./assets/hero.png";
import hero4 from "./assets/hero3.png";
import Navbar from "./Components/Navbar";
import { Typewriter } from "react-simple-typewriter";
import cpp from "./assets/Cpp2.png";
import {
  FaInstagram,
  FaGithub,
  FaTwitter,
  FaLinkedin,
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
} from "react-icons/fa";

function Home() {
  const [isHero2, setIsHero2] = useState(false);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const handleImageClick = () => {
    setIsHero2((prev) => !prev);
  };

  const scrollToSection = (section) => {
    switch (section) {
      case "about":
        aboutRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "skills":
        skillsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "projects":
        projectsRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      case "contact":
        contactRef.current?.scrollIntoView({ behavior: "smooth" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <Navbar scrollToSection={scrollToSection} />
      {/* Home Section */}
      <div
        className="bg-cover h-auto"
        style={{ backgroundImage: `url(${b2})` }}
      >
        <div
          className="pt-10 md:hidden flex justify-center"
          onClick={handleImageClick}
        >
          <img
            src={isHero2 ? hero4 : hero}
            className="rounded-full"
            style={{ height: 200, width: 200 }}
          />
        </div>

        <div className="flex md:ml-5">
          <div className="md:pl-20 md:pt-28 pt-5 pl-5 flex-col md:w-[65%]">
            <div className="md:text-[3rem] text-[2rem] text-[#000066] font-semibold font-mono">
              Hi There,
            </div>
            <div className="flex md:gap-3 gap-2 flex-wrap">
              <div className="text-[2rem] md:text-[3rem] text-[#000066] font-semibold font-mono">
                I'm Abhinav
              </div>
              <div className="md:text-[3rem] text-[2rem] text-[#ff9900] font-semibold font-mono">
                Mishra
              </div>
            </div>
            <div className="md:flex flex-wrap ">
              <div className="text-[2rem] md:text-[3rem] text-[#000066] font-semibold font-mono mr-10 md:mr-0">
                I Am Into
              </div>
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
            <div className="">
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
            </div>
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
          <div>
            <div
              className="flex-col pt-10 md:flex hidden"
              onClick={handleImageClick}
            >
              <img
                src={isHero2 ? hero4 : hero}
                className="rounded-full"
                style={{ height: 500 }}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col">
          {/* About Section */}
          <div
            ref={aboutRef}
            className="md:p-10 p-2 md:w-[60%] bg-white mb-10 font-mono font-semibold border-4 rounded-2xl mt-5 ml-2"
          >
            <h2 className="text-3xl font-bold text-[#000066]">About</h2>
            <p className="mt-4 text-lg">
              I am currently pursuing a B.Tech in Computer Science and
              Engineering at Ajay Kumar Garg Engineering College, with an
              expected graduation in June 2026. As a MERN Developer with the
              Computer Society of India, I work on technical projects and mentor
              students. I have also learned Next.js and React Native, expanding
              my expertise in modern web and mobile development. My achievements
              include solving over 300 coding problems and scoring 97% in high
              school.
            </p>
          </div>
          {/* Skills Section */}
          <div
            ref={skillsRef}
            className="md:p-10 p-2 md:w-[60%] bg-white mb-10 font-mono font-semibold border-4 rounded-2xl mt-5"
          >
            <h2 className="text-3xl font-bold text-[#000066]">Skills</h2>
            <div className="flex gap-4 mt-4 justify-evenly">
              <div className="pt-2">
                <FaHtml5 size={42} />
              </div>
              <div className="pt-2">
                <FaCss3 size={42} />
              </div>
              <div className="pt-2">
                <FaJs size={42} />
              </div>
              <div className="pt-2">
                <FaReact size={42} />
              </div>
              <div className="pt-2">
                <FaNode size={42} />
              </div>
              <div>
                <img src={cpp} style={{ width: 55, height: 55 }} />
              </div>
            </div>
          </div>
          {/* Projects Section */}
          <div
            ref={projectsRef}
            className="md:p-10 p-2 md:w-[60%] bg-white mb-10  font-mono font-semibold border-4 rounded-2xl mt-5 mx-2"
          >
            <h2 className="text-3xl font-bold text-[#000066]">Projects</h2>
            <p className="mt-4 text-lg">
              Here are some of the projects I have worked on -
              <p>
                <p className="text-[1.5rem] text-[#ff9900] mt-4">
                  WorkShala-{" "}
                  <p className="text-[1rem]">
                    (React.js,Tailwind CSS,Redux Toolkit)
                  </p>
                </p>{" "}
                Developed and deployed an interactive web application using
                React.js, featuring a component-based architecture with React
                Router for a modular and user-friendly experience.
              </p>
              <div className="flex justify-evenly">
                <a
                  href="https://github.com/abhinav2210103/Internshala-clone"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="border-2 p-2 rounded-xl cursor-pointer">
                    GitHub
                  </p>
                </a>
                <a
                  href="https://workshala-eight.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <p className="border-2 p-2 rounded-xl cursor-pointer">
                    Website
                  </p>
                </a>
              </div>
              <div className="flex gap-4 flex-wrap justify-evenly mb-7">
                <img
                  src="./Work1.png"
                  style={{
                    maxHeight: 250,
                    maxWidth: 380,
                    height: "auto",
                    width: "auto",
                  }}
                />

                <img
                  src="./Work2.png"
                  style={{
                    maxHeight: 250,
                    maxWidth: 380,
                    height: "auto",
                    width: "auto",
                  }}
                />
              </div>
              <div className="flex gap-2 flex-wrap justify-evenly">
                <img
                  src="./Work3.png"
                  style={{
                    maxHeight: 250,
                    maxWidth: 380,
                    height: "auto",
                    width: "auto",
                  }}
                />
                <img
                  src="./Work4.png"
                  style={{
                    maxHeight: 250,
                    maxWidth: 380,
                    height: "auto",
                    width: "auto",
                  }}
                />
              </div>
              <p>
                <p className=" text-[1.5rem] text-[#ff9900] mt-4">
                  Opinio-
                  <p className="text-[1rem]">
                    (Node js, MongoDB, Express, Redis)
                  </p>
                </p>{" "}
                Engineered a thought-sharing platform with Node.js, Express, and
                MongoDB, incorporating Redis for caching and Cluster Nodes for
                scalability, achieving 90% faster API responses and robust
                role-based access control.
              </p>
              <a
                href="https://github.com/abhinav2210103/Thoughts-Canvas"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="border-2 p-2 rounded-xl cursor-pointer w-[5rem]">
                  GitHub
                </p>
              </a>
              <p>
                <p className=" text-[1.5rem] text-[#ff9900] mt-4">
                  Edumarshal-
                  <p className="text-[1rem]">
                    (React.js,Tailwind CSS,Material UI)
                  </p>
                </p>{" "}
                Contributed to a college management software solution using
                React.js and Tailwind CSS, enhancing processes like attendance
                tracking and fee payments, and ensuring mobile responsiveness
                for improved user experience.
              </p>
              <a
                href="https://github.com/abhinav2210103/Edumarshal_web"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="border-2 p-2 rounded-xl cursor-pointer w-[5rem]">
                  GitHub
                </p>
              </a>
            </p>
          </div>
          {/* Contact Section */}
          <div
            ref={contactRef}
            className="p-10 md:w-[60%] bg-white mb-10  font-mono font-semibold border-4 rounded-2xl mt-5"
          >
            <h2 className="text-3xl font-bold text-[#000066]">Contact</h2>
            <p className="mt-4 text-lg">
              <div className="gap-4 mt-4 flex justify-evenly">
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
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
