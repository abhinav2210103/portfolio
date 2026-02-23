import React from "react";

const AboutSection = React.forwardRef((props, ref) => {
  return (
    <section
      ref={ref}
      id="about"
      className="w-full px-6 md:px-16 py-20 font-sans"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center items-center gap-16">
        
        {/* LEFT CONTENT */}
        <div className="md:w-[58%] w-full">
          {/* Section label */}
          <p className="text-blue-500 text-sm font-medium tracking-[0.18em] uppercase">
            About
          </p>

          {/* Title */}
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold text-white leading-tight">
            About Me
          </h2>

          {/* Description */}
          <div className="mt-6 max-w-2xl space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
            <p>
              I’m a Computer Science undergraduate at{" "}
              <span className="text-zinc-200 font-medium">
                Ajay Kumar Garg Engineering College
              </span>
              , building production-grade applications across mobile, web,
              backend, and AI systems.
            </p>

            <p>
              I’ve built and deployed React Native apps to the Play Store,
              engineered scalable backend systems, and developed
              performance-driven frontends while owning the full lifecycle.
            </p>

            <p>
              Recently, I’ve worked on AI-powered features including LLM
              workflows, STT, TTS, and intelligent search systems — focusing on
              speed, reliability, and clean architecture.
            </p>

            <p>
              I actively practice{" "}
              <span className="text-zinc-200 font-medium">
                Data Structures & Algorithms
              </span>{" "}
              with 300+ problems solved across coding platforms.
            </p>
          </div>

          {/* Experience */}
          <div className="mt-10 max-w-2xl space-y-4 text-zinc-400 text-base md:text-lg">
            <p className="flex gap-3">
              <span className="text-blue-500">•</span>
              <span>
                Ex - Application Developer Intern (React Native) at{" "}
                <a
                  href="https://www.gofloo.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-zinc-200 hover:text-white transition"
                >
                  GoFloo Tech Pvt Ltd
                </a>
              </span>
            </p>

            <p className="flex gap-3">
              <span className="text-blue-500">•</span>
              <span>
                Ex - Full Stack Intern (Next.js, Node.js, AWS) at{" "}
                <a
                  href="https://dailywellness.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-zinc-200 hover:text-white transition"
                >
                  DailyWellness AI
                </a>
              </span>
            </p>

            <p className="flex gap-3">
              <span className="text-blue-500">•</span>
              <span>
                Ex - AI Engineer at{" "}
                <a
                  href="https://www.ailifebot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 text-zinc-200 hover:text-white transition"
                >
                  AiLife Bot
                </a>
              </span>
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-[42%] w-full flex justify-center md:justify-end">
          <div className="relative group w-72 h-72 md:w-80 md:h-80">
            <img
              src="/Abhi.jpg"
              alt="Abhinav Mishra"
              className="w-full h-full object-cover rounded-2xl 
                         grayscale group-hover:grayscale-0 
                         transition duration-500 ease-in-out"
            />

            <div className="absolute inset-0 rounded-2xl border border-zinc-700"></div>
          </div>
        </div>

      </div>
    </section>
  );
});

AboutSection.displayName = "AboutSection";

export default AboutSection;