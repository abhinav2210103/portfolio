import React from "react";

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="w-full px-6 md:px-16 py-20 font-sans"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-blue-500 text-sm md:text-base font-medium tracking-[0.18em] uppercase">
          About
        </p>

        {/* Title */}
        <h2 className="mt-4 text-[2.2rem] md:text-[3rem] font-semibold text-white tracking-tight leading-tight">
          About Me
        </h2>

        {/* Subtitle */}
        <div className="mt-10 max-w-4xl space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
          <p>
            I’m a Computer Science undergraduate at{" "}
            <span className="text-zinc-200 font-medium">
              Ajay Kumar Garg Engineering College
            </span>
            , passionate about full-stack development and modern software
            architecture — including backend, frontend, and cross-platform app
            development.
          </p>

          <p>
            Over the past year, I’ve worked in real-world production
            environments where I contributed to the full development lifecycle —
            from building responsive UIs and scalable backend systems to
            deploying on cloud infrastructure like{" "}
            <span className="text-zinc-200">AWS</span> and optimizing
            performance.
          </p>

          <p>
            Outside of development, I enjoy diving into{" "}
            <span className="text-zinc-200 font-medium">
              Data Structures & Algorithms
            </span>{" "}
            and competitive programming, having solved{" "}
            <span className="text-zinc-200 font-medium">300+ problems</span>{" "}
            across platforms like LeetCode and Codeforces.
          </p>
        </div>

        {/* Experience list */}
        <div className="mt-12 max-w-3xl space-y-5 text-zinc-400 text-base md:text-lg leading-relaxed">
          <p className="flex gap-4">
            <span className="text-blue-500 mt-[2px]">•</span>
            <span>
              Ex - Application Developer Intern (React Native) at{" "}
              <a
                href="https://www.gofloo.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-8 text-zinc-200 decoration-zinc-700 hover:text-white transition"
              >
                GoFloo Tech Pvt Ltd (India Remote)
              </a>
            </span>
          </p>

          <p className="flex gap-4">
            <span className="text-blue-500 mt-[2px]">•</span>
            <span>
              Ex - Full Stack Intern (Next.js, Node.js, TypeScript, AWS) at{" "}
              <a
                href="https://dailywellness.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-8 text-zinc-200 decoration-zinc-700 hover:text-white transition"
              >
                DailyWellness AI (US Remote)
              </a>
            </span>
          </p>

          <p className="flex gap-4">
            <span className="text-blue-500 mt-[2px]">•</span>
            <span>
              Ex - AI Engineer at{" "}
              <a
                href="https://www.ailifebot.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-8 text-zinc-200 decoration-zinc-700 hover:text-white transition"
              >
                AiLife Bot (India Remote)
              </a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;
