import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectsSection = React.forwardRef((_, ref) => {
  return (
    <section ref={ref} className="relative w-full px-6 md:px-16 py-20 font-sans">
      <div className="w-full max-w-6xl mx-auto">
        {/* Label */}
        <p className="text-blue-500 text-sm md:text-base font-medium tracking-[0.18em] uppercase">
          Projects
        </p>

        {/* Title */}
        <h2 className="mt-4 text-[2.2rem] md:text-[3rem] font-semibold text-white tracking-tight leading-tight">
          Featured Work
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl text-zinc-400 text-base md:text-lg leading-relaxed">
          A few projects where I built real products with performance, scalability,
          and clean architecture in mind.
        </p>

        {/* Projects Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cine Portal */}
          <ProjectCard
            title="Cine Portal"
            stack="Exam Portal | Next.js, TypeScript, Redux Toolkit"
            bullets={[
              `Collaboratively developed and deployed “Cine Portal,” an exam portal for student recruitment, using Next.js and Redux Toolkit. Built a scalable, component-based architecture with server-side rendering, enhancing application maintainability by 40% and boosting load performance by 35%, leading to an improved user experience.`,
              `Enabled examination facilitation for over 300 students, resulting in a 50% increase in qualified candidate recruitment.`,
            ]}
            links={[
              {
                label: "Live",
                href: "https://cine.abhinavmishra.tech/",
                icon: <FaExternalLinkAlt />,
              },
              {
                label: "GitHub",
                href: "https://github.com/abhinav2210103/Cine-Portal",
                icon: <FaGithub />,
              },
            ]}
          />

          {/* Opinio */}
          <ProjectCard
            title="Opinio"
            stack="Node.js, Express, MongoDB, Redis, AWS EC2, React Native, Expo"
            bullets={[
              `Engineered and deployed a thought-sharing platform for my college, developing a full-stack mobile application using a Node.js, Express, and MongoDB backend and React Native with Expo for the frontend, achieving a 60% improvement in user engagement.`,
              `Leveraged Redis for caching and IP-based rate limiting, achieving 90% faster API response times and reducing system load by 45% to enhance overall application performance.`,
            ]}
            links={[
              {
                label: "Frontend",
                href: "https://github.com/abhinav2210103/Opinio-RN",
                icon: <FaGithub />,
              },
              {
                label: "Backend",
                href: "https://github.com/abhinav2210103/Thoughts-Canvas",
                icon: <FaGithub />,
              },
            ]}
          />

          {/* Edumarshal */}
          <ProjectCard
            title="Edumarshal"
            stack="React.js, Tailwind CSS, Material UI"
            bullets={[
              `Contributed to a college management software solution using React.js and Tailwind CSS, enhancing processes like attendance tracking and fee payments, and ensuring mobile responsiveness for improved user experience.`,
            ]}
            links={[
              {
                label: "GitHub",
                href: "https://github.com/abhinav2210103/Edumarshal_web",
                icon: <FaGithub />,
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
});

export default React.memo(ProjectsSection);

/* ----------------------------- */
/* Small reusable card component */
/* ----------------------------- */

const ProjectCard = ({ title, stack, bullets = [], links = [] }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl border border-zinc-800 bg-white/[0.03] p-6 shadow-lg shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-white/[0.05]">
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative">
        <h3 className="text-xl md:text-2xl font-semibold text-white tracking-tight">
          {title}
        </h3>

        <p className="mt-2 text-sm md:text-base text-zinc-400">{stack}</p>

        {/* Bullets */}
        <ul className="mt-5 space-y-3 text-sm md:text-[15px] text-zinc-300 leading-relaxed list-disc pl-5">
          {bullets.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>

        {/* Links */}
        <div className="mt-6 flex flex-wrap gap-3">
          {links.map((l, i) => (
            <a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 bg-white/[0.04] px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/[0.08] hover:border-zinc-600"
            >
              <span className="text-base">{l.icon}</span>
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
