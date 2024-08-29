import React from "react";

const ProjectsSection = React.forwardRef((_, ref) => (
  <div ref={ref} className="projects-section md:p-10 p-2 md:w-[60%] bg-white mb-10 font-mono font-semibold border-4 rounded-2xl mt-5 mx-2">
    <h2 className="text-3xl font-bold text-[#000066]">Projects</h2>
    <p className="mt-4 text-lg">
      Here are some of the projects I have worked on -
      <p className="text-[1.5rem] text-[#ff9900] mt-4">
        WorkShala- <p className="text-[1rem]">(React.js,Tailwind CSS,Redux Toolkit)</p>
      </p>{" "}
      Developed and deployed an interactive web application using React.js, featuring a component-based architecture with React Router for a modular and user-friendly experience.
    </p>
    <div className="flex justify-evenly">
      <a href="https://github.com/abhinav2210103/Internshala-clone" target="_blank" rel="noopener noreferrer">
        <p className="border-2 p-2 rounded-xl cursor-pointer">GitHub</p>
      </a>
      <a href="https://workshala-eight.vercel.app/" target="_blank" rel="noopener noreferrer">
        <p className="border-2 p-2 rounded-xl cursor-pointer">Website</p>
      </a>
    </div>
    <div className="flex gap-4 flex-wrap justify-evenly mb-7">
  <img
    src="./Work1.png"
    className="max-h-64 max-w-[18rem] sm:max-w-sm md:max-w-[25rem]"
    style={{ height: "auto", width: "auto" }}
  />
  <img
    src="./Work2.png"
    className="max-h-64 max-w-[18rem] sm:max-w-sm md:max-w-[25rem]"
    style={{ height: "auto", width: "auto" }}
  />
</div>
<div className="flex gap-2 flex-wrap justify-evenly">
  <img
    src="./Work3.png"
    className="max-h-64 max-w-[18rem]sm:max-w-sm md:max-w-[25rem]"
    style={{ height: "auto", width: "auto" }}
  />
  <img
    src="./Work4.png"
    className="max-h-64 max-w-[18rem] sm:max-w-sm md:max-w-[25rem]"
    style={{ height: "auto", width: "auto" }}
  />
</div>

    <p className="text-[1.5rem] text-[#ff9900] mt-4">
      Opinio- <p className="text-[1rem]">(Node js, MongoDB, Express, Redis)</p>
    </p>{" "}
    Engineered a thought-sharing platform with Node.js, Express, and MongoDB, incorporating Redis for caching and Cluster Nodes for scalability, achieving 90% faster API responses and robust role-based access control.
    <a href="https://github.com/abhinav2210103/Thoughts-Canvas" target="_blank" rel="noopener noreferrer">
      <p className="border-2 p-2 rounded-xl cursor-pointer">GitHub</p>
    </a>
  </div>
));

export default ProjectsSection;
