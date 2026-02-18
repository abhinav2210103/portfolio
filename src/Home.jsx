import React from "react";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutSection from "./Components/AboutSection";
import SkillsSection from "./Components/SkillsSection";
import ProjectsSection from "./Components/ProjectsSection";
import ContactSection from "./Components/ContactSection";
import ExperienceSection from "./Components/ExperienceSection";
import SocietySection from "./Components/SocietySection"; // ✅ ADD

const Home = () => {
  const aboutSectionRef = React.useRef(null);
  const skillsSectionRef = React.useRef(null);
  const projectsSectionRef = React.useRef(null);
  const contactSectionRef = React.useRef(null);
  const experienceSectionRef = React.useRef(null);
  const societySectionRef = React.useRef(null); // ✅ ADD

  const scrollToSection = (section) => {
    if (section === "about") {
      aboutSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "skills") {
      skillsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "projects") {
      projectsSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "contact") {
      contactSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "experience") {
      experienceSectionRef.current?.scrollIntoView({ behavior: "smooth" });
    } else if (section === "society") {
      societySectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const gradientBg = {
    backgroundColor: "#1a1b1c",
    backgroundImage:
      "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.14) 0%, transparent 35%), radial-gradient(circle at 85% 30%, rgba(99,102,241,0.12) 0%, transparent 40%), linear-gradient(to bottom right, #1a1b1c 0%, #151617 55%, #101112 100%)",
  };

  return (
    <div
      className="home-container w-full min-h-screen font-sans"
      style={gradientBg}
    >
      <Navbar scrollToSection={scrollToSection} />

      <div className="w-full">
        {/* ✅ IMPORTANT: pass scrollToSection to HeroSection */}
        <HeroSection scrollToSection={scrollToSection} />

        <div className="flex flex-col justify-center items-center w-full">
          <AboutSection ref={aboutSectionRef} />
          <ExperienceSection ref={experienceSectionRef} />

          {/* ✅ NEW SECTION */}
          {/* <SocietySection ref={societySectionRef} /> */}

          <SkillsSection ref={skillsSectionRef} />
          <ProjectsSection ref={projectsSectionRef} />
          <ContactSection ref={contactSectionRef} />
        </div>
      </div>
    </div>
  );
};

export default Home;
