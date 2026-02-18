import React, { useState } from "react";

const SocietySection = React.forwardRef((props, ref) => {
  const [active, setActive] = useState("por");

  const tabs = [
    { key: "por", label: "position --responsibility" },
    { key: "impact", label: "impact --work" },
    { key: "skills", label: "skills --gained" },
  ];

  const content = {
    por: (
      <>
        <p className="text-zinc-200 font-semibold text-base md:text-lg">
          Position Of Responsibility
        </p>

        <p className="mt-2 text-zinc-300">
          <span className="text-white font-medium">
            Computer Society Of India
          </span>{" "}
          <span className="text-zinc-500">|</span>{" "}
          <span className="text-zinc-400">Aug 2023 – Present</span>
        </p>

        <p className="mt-3 text-blue-300 font-medium">
          Full Stack Developer{" "}
          <span className="text-zinc-500 font-normal">
            (React.js, Node.js)
          </span>
        </p>
      </>
    ),

    impact: (
      <>
        <p className="text-zinc-300">
          • Worked with a{" "}
          <span className="text-white font-medium">
            45-member technical team
          </span>{" "}
          to develop and maintain React projects, contributing to feature
          development, UI implementation, and performance optimization for
          college-level applications.
        </p>

        <p className="mt-4 text-zinc-300">
          • Conducted a hands-on workshop and mentored{" "}
          <span className="text-white font-medium">150+ students</span>,
          introducing them to React Native, mobile app architecture, and modern
          frontend development practices across multiple technical domains.
        </p>
      </>
    ),

    skills: (
      <>
        <p className="text-zinc-300">
          Gained strong experience in:
        </p>

        <p className="mt-4 text-zinc-400">
          • Leadership & mentoring in workshops
          <br />
          • Team collaboration in large technical groups
          <br />
          • Frontend performance + clean UI implementation
          <br />
          • Real-world React + Node development workflows
        </p>
      </>
    ),
  };

  return (
    <section
      ref={ref}
      id="society"
      className="w-full px-6 md:px-16 py-20 font-sans"
    >
      <div className="w-full max-w-6xl mx-auto">
        <p className="text-blue-500 text-sm md:text-base font-medium tracking-[0.18em] uppercase">
          Society
        </p>

        <h2 className="mt-4 text-[2.2rem] md:text-[3rem] font-semibold text-white tracking-tight leading-tight">
          Leadership & Society Work
        </h2>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* LEFT */}
          <div className="space-y-6 text-zinc-400 text-base md:text-lg leading-relaxed">
            <p>
              Alongside development, I actively contributed to technical
              communities where I took ownership, mentored juniors, and shipped
              real project work with teams.
            </p>

            <p>
              My society work strengthened my execution skills, communication,
              and leadership — which directly translates to startup environments
              and real-world engineering.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                <p className="text-zinc-400 text-sm">Strength</p>
                <p className="text-white mt-1 font-medium">
                  Team Collaboration
                </p>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-zinc-950/40 p-5">
                <p className="text-zinc-400 text-sm">Mindset</p>
                <p className="text-white mt-1 font-medium">
                  Ownership + Mentorship
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT (terminal interactive like hero/about) */}
          <div className="w-full">
            <div className="relative rounded-3xl border border-zinc-800 bg-zinc-950/60 shadow-2xl overflow-hidden">
              {/* Top bar */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-zinc-800 bg-zinc-950/70">
                <p className="text-sm text-zinc-400 font-mono">
                  terminal — society@abhinav
                </p>

                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/90" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500/90" />
                  <span className="h-3 w-3 rounded-full bg-green-500/90" />
                </div>
              </div>

              {/* Tabs */}
              <div className="px-5 py-4 border-b border-zinc-800 flex flex-wrap gap-2 bg-zinc-950/30">
                {tabs.map((t) => (
                  <button
                    key={t.key}
                    onClick={() => setActive(t.key)}
                    className={`px-4 py-2 rounded-xl font-mono text-xs md:text-sm transition border ${
                      active === t.key
                        ? "bg-blue-600/15 border-blue-500/40 text-blue-300"
                        : "bg-transparent border-zinc-800 text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>

              {/* Body */}
              <div className="px-6 py-6 font-mono text-sm leading-relaxed min-h-[260px]">
                <p className="text-zinc-500">
                  <span className="text-emerald-400">abhinav@mac</span>{" "}
                  <span className="text-zinc-600">~</span>{" "}
                  <span className="text-zinc-500">%</span>{" "}
                  <span className="text-white">
                    {tabs.find((t) => t.key === active)?.label}
                  </span>
                </p>

                <div className="mt-4">{content[active]}</div>

                <p className="mt-6 text-zinc-500">
                  <span className="text-emerald-400">abhinav@mac</span>{" "}
                  <span className="text-zinc-600">~</span>{" "}
                  <span className="text-zinc-500">%</span>{" "}
                  <span className="inline-block w-2 h-4 bg-zinc-200/80 animate-pulse translate-y-[3px]" />
                </p>
              </div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-blue-500/10 via-transparent to-emerald-500/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

SocietySection.displayName = "SocietySection";

export default SocietySection;
