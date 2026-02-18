import React from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNode,
  FaPython,
  FaJava,
  FaAws,
  FaGit,
  FaCloud,
  FaLock,
} from "react-icons/fa";

import {
  SiCplusplus,
  SiC,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiRedux,
  SiTailwindcss,
  SiPostman,
  SiVercel,
  SiNetlify,
  SiExpo,
  SiFastapi,
  SiMongodb,
  SiRedis,
  SiPostgresql,
  SiVisualstudiocode,
  SiDocker,
  SiGithubactions,
  SiGraphql,
} from "react-icons/si";

import { MdDesignServices } from "react-icons/md";

const skillGroups = [
  {
    title: "Languages",
    subtitle: "Core programming + web fundamentals",
    skills: [
      { icon: <SiCplusplus />, name: "C++" },
      { icon: <SiC />, name: "C" },
      { icon: <FaJava />, name: "Java" },
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJs />, name: "JavaScript" },
      { icon: <SiTypescript />, name: "TypeScript" },
      { icon: <FaHtml5 />, name: "HTML" },
      { icon: <FaCss3 />, name: "CSS" },
    ],
  },
  {
    title: "Frontend",
    subtitle: "UI engineering & cross-platform apps",
    skills: [
      { icon: <FaReact />, name: "React" },
      { icon: <FaReact />, name: "React Native" }, 
      { icon: <SiNextdotjs />, name: "Next.js" },
      { icon: <SiRedux />, name: "Redux Toolkit" },
      { icon: <MdDesignServices />, name: "Material UI" },
      { icon: <SiTailwindcss />, name: "Tailwind CSS" },
      { icon: <SiExpo />, name: "Expo" },
    ],
  },
  {
    title: "Backend",
    subtitle: "APIs, authentication, and scalable services",
    skills: [
      { icon: <FaNode />, name: "Node.js" },
      { icon: <SiExpress />, name: "Express" },
      { icon: <SiFastapi />, name: "FastAPI" },
      { icon: <FaLock />, name: "JWT" },
      { icon: <SiGraphql />, name: "GraphQL" },
      { icon: <FaCloud />, name: "REST APIs" },
      { icon: <FaCloud />, name: "WebSockets" },
    ],
  },
  {
    title: "Databases",
    subtitle: "Storage, caching, and performance",
    skills: [
      { icon: <SiMongodb />, name: "MongoDB" },
      { icon: <SiRedis />, name: "Redis" },
      { icon: <SiPostgresql />, name: "PostgreSQL" },
    ],
  },
  {
    title: "Cloud",
    subtitle: "Deployment, hosting, and production infra",
    skills: [
      { icon: <FaAws />, name: "AWS" },
      { icon: <FaCloud />, name: "AWS EC2" },
      { icon: <FaCloud />, name: "AWS Amplify" },
      { icon: <FaCloud />, name: "Cloudinary" },
    ],
  },
  {
    title: "Dev & Tooling",
    subtitle: "Shipping, workflows, and developer tools",
    skills: [
      { icon: <SiDocker />, name: "Docker" },
      { icon: <SiGithubactions />, name: "CI/CD" },
      { icon: <FaGit />, name: "Git" },
      { icon: <SiVisualstudiocode />, name: "VS Code" },
      { icon: <SiPostman />, name: "Postman" },
      { icon: <SiVercel />, name: "Vercel" },
      { icon: <SiNetlify />, name: "Netlify" },
    ],
  },
];

// ✅ Small Skill Card Component
const SkillChip = ({ icon, name }) => {
  return (
    <div className="group relative flex flex-col items-center justify-center gap-2 rounded-xl border border-zinc-800 bg-white/[0.03] px-3 py-3 shadow-md shadow-black/20 backdrop-blur-md transition-all duration-200 hover:-translate-y-[2px] hover:border-zinc-700 hover:bg-white/[0.06]">
      {/* Glow */}
      <div className="absolute inset-0 rounded-xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent pointer-events-none" />

      {/* Icon */}
      <div className="relative text-zinc-200 text-[26px] md:text-[28px] transition group-hover:text-white">
        {icon}
      </div>

      {/* Name */}
      <span className="relative text-[11px] md:text-xs text-zinc-400 text-center leading-tight transition group-hover:text-zinc-200">
        {name}
      </span>
    </div>
  );
};

const SkillsSection = React.forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      className="relative w-full px-6 md:px-16 py-16 font-sans"
    >
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-blue-500 text-sm font-medium tracking-[0.18em] uppercase">
          Skills
        </p>

        <h2 className="mt-3 text-[2rem] md:text-[2.6rem] font-semibold text-white tracking-tight leading-tight">
          My Technical Stack
        </h2>

        <p className="mt-5 max-w-3xl text-zinc-400 text-sm md:text-base leading-relaxed">
          Full-stack toolkit across frontend, backend, databases, cloud, and
          developer tooling — focused on building production-ready products.
        </p>

        <div className="mt-12 space-y-12">
          {skillGroups.map((group, idx) => (
            <div key={idx}>
              <div className="flex flex-col gap-1">
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {group.title}
                </h3>
                <p className="text-zinc-500 text-xs md:text-sm">
                  {group.subtitle}
                </p>
              </div>

              {/* ✅ More columns + tighter gap */}
              <div className="mt-5 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3 md:gap-4">
                {group.skills.map((skill, i) => (
                  <SkillChip key={i} icon={skill.icon} name={skill.name} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default React.memo(SkillsSection);
