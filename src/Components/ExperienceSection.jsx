import React from "react";

const ExperienceSection = React.forwardRef((_, ref) => (
  <section
    ref={ref}
    className="relative mx-4 md:mx-auto md:max-w-4xl bg-gradient-to-br from-[#f0faff] to-[#e0f0ff] 
    rounded-3xl shadow-xl p-6 md:p-10 mt-10 mb-16 font-mono text-[#1e293b]"
  >
    <h2 className="text-3xl md:text-4xl font-bold text-[#000066] mb-6 border-b-2 border-[#ff9900] inline-block">
      Experience
    </h2>

    <div className="mb-10">
      <h3 className="text-xl md:text-2xl font-semibold text-[#000066]">
        Full Stack Developer –{" "}
        <span className="text-[#ff9900]">Daily Wellness AI</span>
      </h3>
      <p className="text-sm text-gray-600 mb-2">March 2025 – June 2025</p>
      <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-gray-800">
        <li>
          Built a responsive video streaming platform using EC2 + S3 + Nginx
          with MUX for scalable playback.
        </li>
        <li>
          Integrated Stripe for payments with webhook-based email automation and
          subscription handling.
        </li>
        <li>
          Connected AI services to auto-generate personalized nutrition plans
          using server-side APIs.
        </li>
        <li>
          Developed scalable RESTful APIs in Node.js with Redis caching,
          reducing response time by 60%.
        </li>
        <li>
          Hosted on AWS (Amplify & EC2) with CI/CD via GitHub Actions for rapid
          deployment.
        </li>
        <li>
          Used Next.js, TypeScript, NextAuth (Google OAuth), and Redux for
          secure, dynamic frontend.
        </li>
      </ul>

      <div className="bg-gradient-to-br from-[#f0faff] to-[#e0f0ff] py-10 px-4 rounded-2xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Certificate Block */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md border border-gray-200 p-5">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              🎓 Certificate
            </h4>

            <a
              href="https://drive.google.com/file/d/1x0LcDkbhm55L9N_adWhu_FXBcTtz7AZA/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full aspect-video overflow-hidden rounded-md border border-gray-200 transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src="public/assets/dailywellnesscertificate.png"
                alt="Internship Certificate"
                className="w-full h-full object-cover"
              />
            </a>

            <a
              href="https://drive.google.com/file/d/1x0LcDkbhm55L9N_adWhu_FXBcTtz7AZA/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-5 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition"
            >
              📄 View Certificate
            </a>
          </div>

          {/* Website Block */}
          <div className="flex flex-col items-center bg-white rounded-xl shadow-md border border-gray-200 p-5">
            <h4 className="text-lg font-semibold text-gray-800 mb-3">
              🌐 Website
            </h4>

            <a
              href="https://dailywellness.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full aspect-video overflow-hidden rounded-md border border-gray-200 transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src="public/assets/dailywellness.png"
                alt="Website Preview"
                className="w-full h-full object-cover"
              />
            </a>

            <a
              href="https://dailywellness.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-5 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition"
            >
              🌐 Visit Website
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Floo */}
    <div>
      <h3 className="text-xl md:text-2xl font-semibold text-[#000066]">
        Application Developer – <span className="text-[#ff9900]">Floo</span>
      </h3>
      <p className="text-sm text-gray-600 mb-2">March 2025 – Present</p>

      <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-gray-800">
        <li>
          Built the entire mobile application from scratch using React Native.
        </li>
        <li>Integrated Firebase Phone Authentication for secure user login.</li>
        <li>Implemented Socket.IO for real-time live chat functionality.</li>
        <li>Used Redux for state management across screens and features.</li>
        <li>
          Built global Auth Context to persist login state across sessions.
        </li>
        <li>
          Implemented React Navigation with nested stacks for seamless UX.
        </li>
      </ul>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md border border-gray-200 p-5 mt-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            🌐 Website
          </h4>
          <a
            href="https://gofloo.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-video overflow-hidden rounded-md border border-gray-200 transform transition-transform duration-300 hover:scale-105"
          >
            <img
              src="public/assets/floo.png"
              alt="Website Preview"
              className="w-full h-full object-cover"
            />
          </a>

          <a
            href="https://gofloo.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-5 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition"
          >
            🌐 Visit Website
          </a>
        </div>

        <div className="flex flex-col items-center bg-white rounded-xl shadow-md border border-gray-200 p-5 mt-6">
          <h4 className="text-lg font-semibold text-gray-800 mb-3">
            Playstore Link
          </h4>

          <a
            href="gofloo.in"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full aspect-video overflow-hidden rounded-md border border-gray-200 transform transition-transform duration-300 hover:scale-105"
          >
            {/* <img
              src="src/assets/dailywellness.png"
              alt="Website Preview"
              className="w-full h-full object-cover"
            /> */}
          </a>

          <a
            href="gofloo.in"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-5 py-2 bg-green-600 text-white rounded-md text-sm font-medium hover:bg-green-700 transition"
          >
            🚧 Play Store deployment in progress
          </a>
        </div>
      </div>
    </div>
  </section>
));

export default ExperienceSection;
