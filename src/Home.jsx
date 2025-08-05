import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import SkillsSection from "./Components/SkillsSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactSection from "./Components/ContactSection";
import b2 from "./assets/b2.gif";
import ExperienceSection from "./Components/ExperienceSection";

const Home = () => {
  const aboutSectionRef = React.useRef(null);
  const skillsSectionRef = React.useRef(null);
  const projectsSectionRef = React.useRef(null);
  const contactSectionRef = React.useRef(null);
  const experienceSectionRef = React.useRef(null);

  const scrollToSection = (section) => {
    if (section === "about") {
      aboutSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "skills") {
      skillsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects") {
      projectsSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section == "contact") {
      contactSectionRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (section == "experience") {
      experienceSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home-container">
      <Navbar scrollToSection={scrollToSection} />
      <div className="hero-section bg-gradient-to-br from-white via-blue-100 to-white py-20">
        <HeroSection />
        <div className="flex flex-col justify-center items-center">
          <AboutSection ref={aboutSectionRef} />
          <ExperienceSection ref={experienceSectionRef} />
          <SkillsSection ref={skillsSectionRef} />
          <ProjectsSection ref={projectsSectionRef} />
          <ContactSection ref={contactSectionRef} />
        </div>
      </div>
    </div>
  );
};

export default Home;
