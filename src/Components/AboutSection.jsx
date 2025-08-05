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
      I'm a Computer Science undergraduate at Ajay Kumar Garg Engineering
      College, passionate about full-stack development and modern software
      architecture—including backend, frontend, and cross-platform application
      development.
      <br />
      <br />
      Over the past year, I've worked in real-world production environments
      where I’ve contributed to the full development lifecycle—from building
      responsive UIs and scalable backend systems to deploying on cloud
      infrastructure like AWS and optimizing performance.
      <br />
      <br />
      Outside of development, I enjoy diving into Data Structures & Algorithms
      and competitive programming, having solved 300+ problems across platforms
      like LeetCode and Codeforces.
      <br />
      <br />
      I'm always looking for new challenges that push me to learn, build, and
      grow as a developer.
    </p>
  </section>
));

export default AboutSection;
