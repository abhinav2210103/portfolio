import React from "react";

const ProjectsSection = React.forwardRef((_, ref) => (
  <div
    ref={ref}
    className="projects-section md:p-10 p-2 md:w-[60%] bg-white mb-10 font-mono font-semibold border-4 rounded-2xl mt-5 mx-2"
  >
    <h2 className="text-3xl font-bold text-[#000066]">Projects</h2>
    <p className="mt-4 text-lg">
      Here are some of the projects I have worked on:
      <p className="text-[1.5rem] text-[#ff9900] mt-4">
        WorkShala -{" "}
        <span className="text-[1rem]">(React.js, Tailwind CSS, Redux Toolkit)</span>
      </p>
      Developed and deployed an interactive web application using React.js, featuring a component-based architecture with React Router for a modular and user-friendly experience.
    </p>
    <div className="flex justify-evenly mb-4">
      <a
        href="https://github.com/abhinav2210103/Internshala-clone"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="border-2 p-2 rounded-xl cursor-pointer">GitHub</p>
      </a>
      <a
        href="https://workshala-eight.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="border-2 p-2 rounded-xl cursor-pointer">Website</p>
      </a>
    </div>
    <div className="flex gap-4 flex-wrap justify-evenly mb-7">
      <img
        src="./Work1.png"
        className="max-h-64 max-w-[18rem] sm:max-w-sm md:max-w-[25rem]"
        style={{ height: "auto", width: "auto" }}
        alt="Work 1"
      />
      <img
        src="./Work2.png"
        className="max-h-64 max-w-[18rem] sm:max-w-sm md:max-w-[25rem]"
        style={{ height: "auto", width: "auto" }}
        alt="Work 2"
      />
    </div>
    <div className="flex gap-2 flex-wrap justify-evenly mb-7">
      <img
        src="./Work3.png"
        className="max-h-64 max-w-[18rem] sm:max-w-sm md:max-w-[25rem]"
        style={{ height: "auto", width: "auto" }}
        alt="Work 3"
      />
      <img
        src="./Work4.png"
        className="max-h-64 max-w-[18rem] sm:max-w-sm md:max-w-[25rem]"
        style={{ height: "auto", width: "auto" }}
        alt="Work 4"
      />
    </div>
    <p className="text-[1.5rem] text-[#ff9900] mt-4">
      Opinio -{" "}
      <span className="text-[1rem]">(Node.js, MongoDB, Express, Redis)</span>
    </p>
    Engineered a thought-sharing platform with Node.js, Express, and MongoDB, incorporating Redis for caching and Cluster Nodes for scalability, achieving 90% faster API responses and robust role-based access control.
    <a
      href="https://github.com/abhinav2210103/Thoughts-Canvas"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="border-2 p-2 rounded-xl cursor-pointer mt-2 w-[5rem]">GitHub</p>
    </a>
    <p className="text-[1.5rem] text-[#ff9900] mt-4">
      Edumarshal -{" "}
      <span className="text-[1rem]">(React.js, Tailwind CSS, Material UI)</span>
    </p>
    Contributed to a college management software solution using React.js and Tailwind CSS, enhancing processes like attendance tracking and fee payments, and ensuring mobile responsiveness for improved user experience.
    <a
      href="https://github.com/abhinav2210103/Edumarshal_web"
      target="_blank"
      rel="noopener noreferrer"
    >
      <p className="border-2 p-2 rounded-xl cursor-pointer w-[5rem] mt-2">GitHub</p>
    </a>
  </div>
));

export default ProjectsSection;
