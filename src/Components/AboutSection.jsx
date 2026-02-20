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

        {/* Description */}
        <div className="mt-10 max-w-4xl space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
          <p>
            I’m a Computer Science undergraduate at{" "}
            <span className="text-zinc-200 font-medium">
              Ajay Kumar Garg Engineering College
            </span>
            , focused on building production-grade applications across mobile,
            web, backend, and AI systems.
          </p>

          <p>
            I’ve independently built and deployed React Native applications to
            the Play Store, engineered scalable backend systems, and developed
            robust, performance-driven frontends. I enjoy owning the full
            development lifecycle — from architecture and implementation to
            deployment and optimization.
          </p>

          <p>
            My recent work involves integrating AI-powered features including
            LLM workflows, speech-to-text (STT), text-to-speech (TTS), and
            intelligent search systems. I focus on building systems that are not
            just intelligent, but fast, reliable, and developer-friendly.
          </p>

          <p>
            Outside of development, I actively practice{" "}
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