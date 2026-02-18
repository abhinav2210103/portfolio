import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const ContactSection = React.forwardRef((_, ref) => {
  return (
    <section ref={ref} className="relative w-full px-6 md:px-16 py-20 font-sans">
      <div className="w-full max-w-4xl mx-auto">
        {/* Label */}
        <p className="text-blue-500 text-sm md:text-base font-medium tracking-[0.18em] uppercase">
          Contact
        </p>

        {/* Title */}
        <h2 className="mt-4 text-[2.2rem] md:text-[3rem] font-semibold text-white tracking-tight leading-tight">
          Let’s Connect
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed">
          Feel free to reach out for opportunities, collaborations, or just a quick chat.
        </p>

        {/* Card */}
        <div className="mt-10 rounded-3xl border border-zinc-800 bg-white/[0.03] p-8 md:p-10 shadow-lg shadow-black/20 backdrop-blur-md">
          <div className="flex justify-center gap-6 md:gap-10 flex-wrap">
            <SocialIcon
              href="https://www.linkedin.com/in/abhinav-mishra-b95301258/"
              icon={<FaLinkedin />}
              label="LinkedIn"
            />
            <SocialIcon
              href="https://www.instagram.com/abhinav_mishra29"
              icon={<FaInstagram />}
              label="Instagram"
            />
            <SocialIcon
              href="https://github.com/abhinav2210103"
              icon={<FaGithub />}
              label="GitHub"
            />
            <SocialIcon
              href="https://twitter.com/abhinavetw"
              icon={<FaTwitter />}
              label="Twitter"
            />
          </div>
        </div>
      </div>
    </section>
  );
});

export default React.memo(ContactSection);

/* ----------------------------- */
/* Small reusable icon component */
/* ----------------------------- */

const SocialIcon = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="group relative flex items-center justify-center rounded-2xl border border-zinc-800 bg-white/[0.03] p-4 shadow-md shadow-black/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-white/[0.06]"
    >
      {/* Glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 transition group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-indigo-500/5 to-transparent pointer-events-none" />

      <div className="relative text-zinc-200 text-[28px] md:text-[32px] transition group-hover:text-white">
        {icon}
      </div>
    </a>
  );
};
