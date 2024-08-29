import React from "react";

const AboutSection = React.forwardRef((_, ref) => (
  <div ref={ref} className="about-section md:p-10 p-2 md:w-[60%] bg-white mb-10 font-mono font-semibold border-4 rounded-2xl mt-5 mx-2">
    <h2 className="text-3xl font-bold text-[#000066]">About</h2>
    <p className="mt-4 text-lg">
      I am currently pursuing a B.Tech in Computer Science and Engineering at Ajay Kumar Garg Engineering College, with an expected graduation in June 2026.
      As a MERN Developer with the Computer Society of India, I work on technical projects and mentor students.
      I have also learned Next.js and React Native, expanding my expertise in modern web and mobile development.
      My achievements include solving over 300 coding problems and scoring 97% in high school.
    </p>
  </div>
));

export default AboutSection;
