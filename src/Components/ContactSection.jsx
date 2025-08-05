import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const ContactSection = React.forwardRef((_, ref) => {
  return (
    <section
      ref={ref}
      className="relative mx-4 md:mx-auto md:max-w-2xl bg-gradient-to-br from-[#f0faff] to-[#e0f0ff] rounded-3xl shadow-xl p-6 md:p-10 mt-4 mb-20 font-mono text-[#1e293b]"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-[#000066] mb-6 border-b-2 border-[#ff9900] inline-block">
        Contact
      </h2>
      <div className="flex justify-center gap-8 flex-wrap mt-6">
        <a
          href="https://www.linkedin.com/in/abhinav-mishra-b95301258/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff9900] transition"
        >
          <FaLinkedin size={36} />
        </a>
        <a
          href="https://www.instagram.com/abhinav_mishra29"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff9900] transition"
        >
          <FaInstagram size={36} />
        </a>
        <a
          href="https://github.com/abhinav2210103"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff9900] transition"
        >
          <FaGithub size={36} />
        </a>
        <a
          href="https://twitter.com/abhinavetw"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#ff9900] transition"
        >
          <FaTwitter size={36} />
        </a>
      </div>
    </section>
  );
});
export default ContactSection;
