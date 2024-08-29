import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNode } from "react-icons/fa";
import cpp from "../assets/Cpp2.png";

const SkillsSection = React.forwardRef((_, ref) => (
  <div ref={ref} className="skills-section md:p-10 p-2 md:w-[60%] bg-white mb-10 font-mono font-semibold border-4 rounded-2xl mt-5">
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
));

export default SkillsSection;
