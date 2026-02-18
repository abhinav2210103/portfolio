import React from "react";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const HeroSection = () => {
  return (
    <section className="w-full px-6 md:px-16 py-20 font-sans">
      <div className="w-full max-w-6xl mx-auto">
        {/* ✅ Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT SIDE ================= */}
          <div>
            {/* Hello */}
            <p className="text-blue-500 text-sm md:text-base font-medium tracking-[0.18em] uppercase">
              Hello, World!
            </p>

            {/* Name */}
            <h1 className="mt-4 text-[2.1rem] md:text-[2rem] text-white tracking-tight leading-tight">
              I&apos;m Abhinav Mishra{" "}
              <span className="inline-block translate-y-[2px]">👋</span>
            </h1>

            {/* Big line */}
            <h2 className="mt-8 text-[2.6rem] md:text-[3rem] leading-[1.05] font-light text-zinc-100 tracking-tight">
              Software Developer.
              <br className="hidden md:block" />
              Problem Solver. Builder.
            </h2>

            {/* Ownership */}
            <p className="mt-10 text-zinc-400 text-base md:text-lg max-w-3xl leading-relaxed">
              💡 I’ve worked in small startups/teams where I take strong
              end-to-end ownership from building UI to shipping features in
              production.
            </p>

            {/* Open to work */}
            <div className="mt-10 text-zinc-300 text-base md:text-lg">
              <p className="text-zinc-500">I’m open to new opportunities!</p>

              <a
                href="mailto:abhinavmishra0493@gmail.com"
                className="mt-2 inline-block text-zinc-100 hover:text-blue-400 transition underline underline-offset-4 decoration-zinc-700"
              >
                abhinavmishra0493@gmail.com
              </a>
            </div>

            {/* Buttons */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="https://drive.google.com/file/d/1BwZ2f8-bYDQfDu6nvQPSVqC2H1-Eqboy/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition text-white font-medium shadow-lg shadow-blue-600/20 active:scale-[0.98]"
              >
                Resume
              </a>

              {/* <a
                href=""
                className="px-7 py-3 rounded-2xl border border-zinc-700 hover:border-zinc-500 transition text-zinc-200 font-medium active:scale-[0.98]"
              >
                View Projects
              </a> */}
            </div>

            {/* Socials */}
            <div className="mt-12 flex gap-6 text-zinc-500">
              <a
                href="https://www.linkedin.com/in/abhinavmishra0493/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition"
              >
                <FaLinkedin size={26} />
              </a>

              <a
                href="https://github.com/abhinav2210103"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                <FaGithub size={26} />
              </a>

              <a
                href="https://twitter.com/abhinavetw"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaTwitter size={26} />
              </a>
            </div>
          </div>

          {/* ================= RIGHT SIDE (CODDY TERMINAL) ================= */}
          <div className="w-full">
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/60 backdrop-blur-md shadow-2xl overflow-hidden">
              {/* Top Bar */}
              <div className="flex items-center gap-2 px-5 py-4 border-b border-zinc-800 bg-zinc-950/70">
                <span className="h-3 w-3 rounded-full bg-red-500/90" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/90" />
                <span className="h-3 w-3 rounded-full bg-green-500/90" />

                <p className="ml-3 text-xs text-zinc-400 tracking-wide">
                  zsh — abhinav@portfolio
                </p>
              </div>

              {/* Terminal Body */}
              <div className="px-6 py-6 font-mono text-[13px] md:text-sm leading-relaxed">
                <p className="text-zinc-600">
                  # interactive shell • about session
                </p>

                <div className="mt-5 space-y-5">
                  {/* whoami */}
                  <div>
                    <p className="text-zinc-200">
                      <span className="text-emerald-400">abhinav@mac</span>{" "}
                      <span className="text-zinc-500">~</span>{" "}
                      <span className="text-zinc-400">%</span>{" "}
                      <span className="text-white">whoami</span>
                    </p>

                    <p className="mt-2 text-zinc-300">
                      Software Developer who optimize slow apps and make them{" "}
                      <span className="text-sky-400 font-medium">fly</span>.
                      Helping startups scale with high-performance{" "}
                      <span className="text-sky-400 font-medium">
                        web & mobile apps
                      </span>
                      .
                    </p>
                  </div>

                  {/* stack */}
                  <div>
                    <p className="text-zinc-200">
                      <span className="text-emerald-400">abhinav@mac</span>{" "}
                      <span className="text-zinc-500">~</span>{" "}
                      <span className="text-zinc-400">%</span>{" "}
                      <span className="text-white">stack --show</span>
                    </p>

                    <p className="mt-2 text-zinc-300">
                      React Native, Next.js, React.js, Node.js, Typescript, AWS,
                      MongoDB, Express, Firebase, CI/CD.
                    </p>
                  </div>

                  {/* interests */}
                  <div>
                    <p className="text-zinc-200">
                      <span className="text-emerald-400">abhinav@mac</span>{" "}
                      <span className="text-zinc-500">~</span>{" "}
                      <span className="text-zinc-400">%</span>{" "}
                      <span className="text-white">focus --now</span>
                    </p>

                    <p className="mt-2 text-zinc-300">
                      <span className="text-sky-400 font-medium">
                        Idea → Production
                      </span>{" "}
                      with true end-to-end ownership.
                    </p>
                  </div>

                  {/* cursor */}
                  <p className="text-zinc-200">
                    <span className="text-emerald-400">abhinav@mac</span>{" "}
                    <span className="text-zinc-500">~</span>{" "}
                    <span className="text-zinc-400">%</span>{" "}
                    <span className="inline-block w-2 h-4 bg-zinc-200/80 animate-pulse translate-y-[3px]" />
                  </p>
                </div>
              </div>

              {/* Soft glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-emerald-500/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
