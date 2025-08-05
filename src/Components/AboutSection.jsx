import React from "react";

const AboutSection = React.forwardRef((_, ref) => (
  <section
    ref={ref}
    className="relative mx-4 md:mx-auto md:max-w-3xl bg-gradient-to-br from-[#f0faff] to-[#e0f0ff]
 rounded-3xl shadow-xl p-6 md:p-10 mt-10 mb-16 font-mono text-[#1e293b]"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#000066] mb-4 border-b-2 border-[#ff9900] inline-block">
      About Me
    </h2>
    <p className="mt-4 text-base md:text-lg leading-relaxed">
      I am currently pursuing a B.Tech in Computer Science and Engineering at Ajay Kumar Garg Engineering College, expecting to graduate in May 2026.
      <br /><br />
      As a MERN developer with the Computer Society of India, I contribute to technical projects and mentor fellow students.
      <br /><br />
      I have broadened my skill set with Next.js and React Native to prepare for modern web and mobile development.
      <br /><br />
      My technical journey includes solving over 300 coding problems and earning a 97% score in high school.
    </p>
  </section>
));

export default AboutSection;
