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
          {/* =================== Driffle (Current) =================== */}
          <div className="relative pl-8">
            {/* Left timeline line + dot */}
            <div className="absolute left-0 top-2 h-full w-[2px] bg-zinc-800" />
            <div className="absolute left-[-6px] top-2 h-4 w-4 rounded-full bg-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.12)]" />

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  SDE-Mobile (React Native){" "}
                  <span className="text-zinc-500 font-medium">—</span>{" "}
                  <a
                    href="https://driffle.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Driffle
                  </a>
                </h3>

                <p className="mt-1 text-sm md:text-base text-zinc-500">
                  {/* TODO: confirm start date */}
                  Feb 2026 – Present · India Remote
                </p>
              </div>

              <ul className="space-y-3 text-zinc-400 text-base md:text-lg leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Managing the{" "}
                    <span className="text-zinc-200">Driffle mobile application</span>{" "}
                    with <span className="text-zinc-200">100K+ downloads</span>{" "}
                    across Android and iOS.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Implemented{" "}
                    <span className="text-zinc-200">OTA (over-the-air) updates</span>{" "}
                    for real-time app updates without Play Store / App Store
                    review dependency.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Added <span className="text-zinc-200">SSL pinning</span> and{" "}
                    <span className="text-zinc-200">root/jailbreak detection</span>{" "}
                    to harden app security.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Optimized app performance using{" "}
                    <span className="text-zinc-200">FlashList</span>, response
                    caching, and{" "}
                    <span className="text-zinc-200">TanStack Query</span> with
                    an interaction manager for smoother UI.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Set up{" "}
                    <span className="text-zinc-200">Firebase push notifications</span>{" "}
                    alongside third-party platforms like{" "}
                    <span className="text-zinc-200">MoEngage</span>.
                  </span>
                </li>
              </ul>

              {/* Links row */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Playstore */}
                <a
                  href="https://play.google.com/store/apps/details?id=com.driffle.marketplace"
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

                  <p className="mt-4 text-blue-400 text-sm font-medium">
                    View on Play Store →
                  </p>
                </a>

                {/* App Store */}
                <a
                  href="https://apps.apple.com/in/app/driffle-marketplace/id6741839585"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition"
                >
                  <p className="text-white font-medium text-base md:text-lg">
                    🍏 App Store
                  </p>
                  <p className="mt-2 text-zinc-500 text-sm md:text-base">
                    Live on the Apple App Store.
                  </p>

                  <p className="mt-4 text-blue-400 text-sm font-medium">
                    View on App Store →
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* =================== GoFloo Tech Pvt Ltd (Floo) =================== */}
          <div className="relative pl-8">
            {/* Left timeline line + dot */}
            <div className="absolute left-0 top-2 h-full w-[2px] bg-zinc-800" />
            <div className="absolute left-[-6px] top-2 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" />

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  Mobile Intern (React Native){" "}
                  <span className="text-zinc-500 font-medium">—</span>{" "}
                  <a
                    href="https://www.gofloo.in/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    GoFloo Tech Pvt Ltd (Floo)
                  </a>
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

                {/* App Store */}
                <a
                  href="https://apps.apple.com/in/app/floo-travel-companion-app/id6757790079"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition"
                >
                  <p className="text-white font-medium text-base md:text-lg">
                    🍏 App Store
                  </p>

                  <p className="mt-2 text-zinc-500 text-sm md:text-base">
                    Live on the Apple App Store.
                  </p>

                  <p className="mt-4 text-blue-400 text-sm font-medium">
                    View on App Store →
                  </p>
                </a>
              </div>
            </div>
          </div>

          {/* =================== Ailifebot =================== */}
          <div className="relative pl-8">
            {/* Left timeline line + dot */}
            <div className="absolute left-0 top-2 h-full w-[2px] bg-zinc-800" />
            <div className="absolute left-[-6px] top-2 h-4 w-4 rounded-full bg-blue-500 shadow-[0_0_0_6px_rgba(59,130,246,0.12)]" />

            {/* Content */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold text-white">
                  AI Engineer Intern{" "}
                  <span className="text-zinc-500 font-medium">—</span>{" "}
                  <a
                    href="https://www.ailifebot.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Ailifebot
                  </a>
                </h3>

                <p className="mt-1 text-sm md:text-base text-zinc-500">
                  August 2025 – November 2025 · Remote
                </p>
              </div>

              <div>
                <p className="text-white font-medium text-base md:text-lg">
                  Julius AI — AI Technical Interview Platform
                </p>
                <p className="mt-1 text-zinc-500 text-sm md:text-base">
                  Next.js 14, TypeScript, Node.js, WebSockets, MongoDB, Redis
                </p>
              </div>

              <ul className="space-y-3 text-zinc-400 text-base md:text-lg leading-relaxed">
                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Architected and built an AI-powered end-to-end technical
                    interview platform with a deterministic{" "}
                    <span className="text-zinc-200">6-stage conversational state machine</span>{" "}
                    and a separate coding evaluation system.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Implemented real-time voice interviews using{" "}
                    <span className="text-zinc-200">WebSocket streaming</span>{" "}
                    with <span className="text-zinc-200">Deepgram (STT)</span> and{" "}
                    <span className="text-zinc-200">ElevenLabs (TTS)</span>,
                    enabling low-latency conversational AI interaction.
                  </span>
                </li>

                <li className="flex gap-3">
                  <span className="text-blue-500 mt-[6px]">•</span>
                  <span>
                    Delivered detailed hiring recommendations with actionable
                    feedback, recruiter dashboards, and historical analytics
                    powered by <span className="text-zinc-200">MongoDB persistence</span>.
                  </span>
                </li>
              </ul>

              {/* Links row */}
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Website */}
                <a
                  href="https://www.ailifebot.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-zinc-800 bg-zinc-900/40 p-5 hover:border-zinc-700 transition"
                >
                  <p className="text-white font-medium text-base md:text-lg">
                    🌐 Company Website
                  </p>
                  <p className="mt-2 text-zinc-500 text-sm md:text-base">
                    Visit Ailifebot.
                  </p>

                  <p className="mt-4 text-blue-400 text-sm font-medium">
                    Visit Website →
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
                  Full Stack Intern(Next.js ,Node.js ,AWS){" "}
                  <span className="text-zinc-500 font-medium">—</span>{" "}
                  <a
                    href="https://dailywellness.ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline"
                  >
                    Daily Wellness AI
                  </a>
                </h3>

                <p className="mt-1 text-sm md:text-base text-zinc-500">
                  March 2025 – July 2025 · US Remote
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