import React from "react";
import {
  FaHtml5, FaCss3, FaJs, FaReact, FaNode, FaPython, FaJava, FaAws,
  FaGit, FaLinux, FaCloud, FaLock
} from "react-icons/fa";
import {
  SiCplusplus, SiC, SiTypescript, SiNextdotjs, SiExpress, SiRedux,
  SiTailwindcss, SiPostman, SiVercel, SiNetlify, SiExpo, SiFastapi,
  SiMongodb, SiRedis, SiSqlite, SiVisualstudiocode
} from "react-icons/si";
import { FaWind } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";

const skills = [
  { icon: <SiCplusplus size={36} />, name: "C++" },
  { icon: <SiC size={36} />, name: "C" },
  { icon: <FaJava size={36} />, name: "Java" },
  { icon: <FaHtml5 size={36} />, name: "HTML5" },
  { icon: <FaCss3 size={36} />, name: "CSS3" },
  { icon: <FaJs size={36} />, name: "JavaScript" },
  { icon: <FaPython size={36} />, name: "Python" },
  { icon: <SiTypescript size={36} />, name: "TypeScript" },
  { icon: <FaNode size={36} />, name: "Node.js" },
  { icon: <SiNextdotjs size={36} />, name: "Next.js" },
  { icon: <SiExpress size={36} />, name: "Express" },
  { icon: <SiFastapi size={36} />, name: "FastAPI" },
  { icon: <FaReact size={36} />, name: "React" },
  { icon: <SiRedux size={36} />, name: "Redux Toolkit" },
  { icon: <MdDesignServices size={36} />, name: "Material UI" },
  { icon: <SiTailwindcss size={36} />, name: "Tailwind CSS" },
  { icon: <FaWind size={36} />, name: "NativeWind" },
  { icon: <SiExpo size={36} />, name: "Expo" },
  { icon: <FaAws size={36} />, name: "AWS" },
  { icon: <SiVisualstudiocode size={36} />, name: "VS Code" },
  { icon: <FaGit size={36} />, name: "Git" },
  { icon: <SiVercel size={36} />, name: "Vercel" },
  { icon: <SiNetlify size={36} />, name: "Netlify" },
  { icon: <SiPostman size={36} />, name: "Postman" },
  { icon: <FaCloud size={36} />, name: "Cloudinary" },
  { icon: <FaLinux size={36} />, name: "Linux" },
  { icon: <FaLock size={36} />, name: "JWT" },
  { icon: <SiMongodb size={36} />, name: "MongoDB" },
  { icon: <SiRedis size={36} />, name: "Redis" },
  { icon: <SiSqlite size={36} />, name: "SQLite3" }
];

const SkillsSection = React.forwardRef((_, ref) => (
  <section
    ref={ref}
    className="relative mx-4 md:mx-auto md:max-w-5xl bg-gradient-to-br from-[#f0faff] to-[#e0f0ff] rounded-3xl shadow-xl p-6 md:p-10 mt-4 mb-20 font-mono text-[#1e293b]"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#000066] mb-6 border-b-2 border-[#ff9900] inline-block">
      Skills
    </h2>
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 justify-items-center mt-8">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex flex-col items-center p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition"
        >
          {skill.icon}
          <span className="text-sm mt-2 text-center">{skill.name}</span>
        </div>
      ))}
    </div>
  </section>
));

export default SkillsSection;
