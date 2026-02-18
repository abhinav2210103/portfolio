import React from "react";

const ExperienceSection = React.forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      id="experience"
      className="w-full px-6 md:px-16 py-20 font-sans"
    >
      <div className="w-full max-w-6xl mx-auto">
        {/* Section label */}
        <p className="text-blue-500 text-sm md:text-base font-medium tracking-[0.18em] uppercase">
          Experience
        </p>

        {/* Title */}
        <h2 className="mt-4 text-[2.2rem] md:text-[3rem] font-semibold text-white tracking-tight leading-tight">
          Work Experience
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl text-zinc-400 text-base md:text-lg leading-relaxed">
          I’ve worked in fast-moving startup environments where I built real
          production features end-to-end — from mobile apps to scalable backend
          systems and cloud deployments.
        </p>

        {/* Timeline */}
        <div className="mt-14 space-y-14">
          {/* =================== GoFloo Tech Pvt Ltd (Floo) =================== */}
          <div className="relative pl-8">
            {/* Left timeline line + dot */}
            <div className="absolute left-0 top-2 h-full w-[2px] bg-zinc-800" />
            <div className="absolute left-[-6px] top-2 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" />

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Application Developer (React Native){" "}
                  <span className="text-zinc-500 font-medium">—</span>{" "}
                  <span className="text-blue-400">
                    GoFloo Tech Pvt Ltd (Floo)
                  </span>
                </h3>

                <p className="mt-1 text-sm md:text-base text-zinc-500">
                  March 2025 – January 2026 · India Remote
                </p>
              </div>

              <ul className="space-y-3 text-zinc-400 text-base md:text-lg leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Independently developed and deployed the entire mobile
                    application from scratch using{" "}
                    <span className="text-zinc-200">React Native</span>.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Integrated{" "}
                    <span className="text-zinc-200">
                      Firebase Phone Authentication
                    </span>{" "}
                    for secure user login.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Implemented <span className="text-zinc-200">Socket.IO</span>{" "}
                    for real-time chat functionality.
                  </span>
                </li>

                {/* <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Used <span className="text-zinc-200">Redux</span> for state
                    management across screens and features.
                  </span>
                </li> */}

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Built global Auth Context to persist login state across
                    sessions.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Implemented React Navigation with nested stacks for seamless
                    UX.
                  </span>
                </li>
              </ul>

              {/* Links row */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Website */}
                <a
                  href="https://gofloo.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition"
                >
                  <p className="text-white font-medium text-base md:text-lg">
                    🌐 Product Website
                  </p>
                  <p className="mt-2 text-zinc-500 text-sm md:text-base">
                    Visit the official website.
                  </p>

                  <div className="mt-4 w-full aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                    <img
                      src="/assets/floo.png"
                      alt="Floo Website Preview"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                    />
                  </div>

                  <p className="mt-4 text-blue-400 text-sm font-medium">
                    Visit Website →
                  </p>
                </a>

                {/* Playstore */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.floo.go"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition"
                >
                  <p className="text-white font-medium text-base md:text-lg">
                    📱 Play Store
                  </p>

                  <p className="mt-2 text-zinc-500 text-sm md:text-base">
                    Live on Google Play Store.
                  </p>

                  <div className="mt-4 w-full aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                    <img
                      src="/floodev.png"
                      alt="Floo Website Preview"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                    />
                  </div>

                  <p className="mt-4 text-blue-400 text-sm font-medium">
                    View on Play Store →
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* =================== Daily Wellness AI =================== */}
          <div className="relative pl-8">
            {/* Left timeline line + dot */}
            <div className="absolute left-0 top-2 h-full w-[2px] bg-zinc-800" />
            <div className="absolute left-[-6px] top-2 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" />

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Full Stack Developer(Next.js ,Node.js ,AWS){" "}
                  <span className="text-zinc-500 font-medium">—</span>{" "}
                  <span className="text-blue-400">Daily Wellness AI</span>
                </h3>

                <p className="mt-1 text-sm md:text-base text-zinc-500">
                  March 2025 – June 2025 · US Remote
                </p>
              </div>

              <ul className="space-y-3 text-zinc-400 text-base md:text-lg leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Built a responsive video streaming platform using{" "}
                    <span className="text-zinc-200">EC2 + S3 + Nginx</span> with
                    MUX for scalable playback.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Integrated{" "}
                    <span className="text-zinc-200">Stripe subscriptions</span>{" "}
                    with webhook-based automation and email workflows.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Connected AI services to auto-generate personalized
                    nutrition plans via server-side APIs.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Built scalable REST APIs in{" "}
                    <span className="text-zinc-200">Node.js</span> with{" "}
                    <span className="text-zinc-200">Redis caching</span>,
                    reducing response time by ~60%.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Deployed on AWS (Amplify + EC2) with CI/CD using{" "}
                    <span className="text-zinc-200">GitHub Actions</span>.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Built frontend with{" "}
                    <span className="text-zinc-200">
                      Next.js, TypeScript, NextAuth, Redux
                    </span>{" "}
                    for secure authentication and dynamic UI.
                  </span>
                </li>
              </ul>

              {/* Links row */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Certificate */}
                <a
                  href="https://drive.google.com/file/d/1x0LcDkbhm55L9N_adWhu_FXBcTtz7AZA/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition"
                >
                  <p className="text-white font-medium text-base md:text-lg">
                    🎓 Internship Certificate
                  </p>
                  <p className="mt-2 text-zinc-500 text-sm md:text-base">
                    View the certificate on Google Drive.
                  </p>

                  <div className="mt-4 w-full aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                    <img
                      src="/assets/dailywellnesscertificate.png"
                      alt="Daily Wellness Certificate"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                    />
                  </div>

                  <p className="mt-4 text-blue-400 text-sm font-medium">
                    View Certificate →
                  </p>
                </a>

                {/* Website */}
                <a
                  href="https://dailywellness.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition"
                >
                  <p className="text-white font-medium text-base md:text-lg">
                    🌐 Product Website
                  </p>
                  <p className="mt-2 text-zinc-500 text-sm md:text-base">
                    Visit the live deployed product.
                  </p>

                  <div className="mt-4 w-full aspect-video overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950">
                    <img
                      src="/assets/dailywellness.png"
                      alt="Daily Wellness Website Preview"
                      className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                    />
                  </div>

                  <p className="mt-4 text-blue-400 text-sm font-medium">
                    Visit Website →
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer note */}
        <p className="mt-16 text-zinc-600 text-sm md:text-base">
          More projects and open-source work available on request.
        </p>
      </div>
    </section>
  );
});

ExperienceSection.displayName = "ExperienceSection";

export default ExperienceSection;
