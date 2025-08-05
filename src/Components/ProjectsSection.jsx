import React from "react";

const ProjectsSection = React.forwardRef((_, ref) => (
  <div
    ref={ref}
    className="projects-section md:p-10 p-4 bg-gradient-to-br from-[#f0faff] to-[#e0f0ff] mb-10 font-mono font-semibold border-4 rounded-2xl mt-5 mx-2"
  >
    <h2 className="text-3xl font-bold text-[#000066] mb-6">Projects</h2>
    <p className="text-lg mb-8">Here are some of the projects I have worked on:</p>

    {/* Cine Portal Project */}
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 mb-6">
      <h3 className="text-2xl font-semibold text-[#ff9900]">
        Cine Portal{" "}
        <span className="text-base font-normal text-gray-600">
          (Next.js, TypeScript, Redux Toolkit)
        </span>
      </h3>
      <p className="mt-2 text-gray-700">
        Collaboratively developed and deployed “Cine Portal,” an exam portal for student recruitment, using Next.js and Redux Toolkit.
        Built a scalable, component-based architecture with server-side rendering, enhancing application maintainability by 40% and
        boosting load performance by 35%, leading to an improved user experience.
        Enabled examination facilitation for over 300 students, resulting in a 50% increase in qualified candidate recruitment.
      </p>

      <a
        href="https://github.com/abhinav2210103/Cine-Portal"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="border-2 p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition mt-4 w-[5rem] text-center">
          GitHub
        </p>
      </a>
    </div>

    {/* Opinio Project */}
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 mb-6">
      <h3 className="text-2xl font-semibold text-[#ff9900]">
        Opinio{" "}
        <span className="text-base font-normal text-gray-600">
          (Node.js, Express, MongoDB, React Native, Expo)
        </span>
      </h3>
      <p className="mt-2 text-gray-700">
        Engineered and deployed a thought-sharing platform for my college, developing a full-stack mobile application using a Node.js,
        Express, and MongoDB backend and React Native with Expo for the frontend, achieving a 60% improvement in user engagement.
        Leveraged Redis for caching and IP-based rate limiting, achieving 90% faster API response times and reducing system load
        by 45% to enhance overall application performance.
      </p>

      <div className="flex flex-wrap gap-4 mt-4">
        <a
          href="https://github.com/abhinav2210103/Thoughts-Canvas"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="border-2 p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition w-[6rem] text-center">
            Backend
          </p>
        </a>
        <a
          href="https://github.com/abhinav2210103/Opinio-RN"
          target="_blank"
          rel="noopener noreferrer"
        >
          <p className="border-2 p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition w-[6rem] text-center">
            Frontend
          </p>
        </a>
      </div>
    </div>

    {/* Edumarshal Project */}
    <div className="bg-white rounded-xl shadow-md border border-gray-200 p-5 mb-2">
      <h3 className="text-2xl font-semibold text-[#ff9900]">
        Edumarshal{" "}
        <span className="text-base font-normal text-gray-600">
          (React.js, Tailwind CSS, Material UI)
        </span>
      </h3>
      <p className="mt-2 text-gray-700">
        Contributed to a college management software solution using React.js and Tailwind CSS, enhancing processes like attendance
        tracking and fee payments, and ensuring mobile responsiveness for improved user experience.
      </p>

      <a
        href="https://github.com/abhinav2210103/Edumarshal_web"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="border-2 p-2 rounded-xl cursor-pointer hover:bg-gray-100 transition mt-4 w-[5rem] text-center">
          GitHub
        </p>
      </a>
    </div>
  </div>
));

export default ProjectsSection;
