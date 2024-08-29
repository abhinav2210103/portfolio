import React from "react";
import { FaLinkedin, FaInstagram, FaGithub, FaTwitter } from "react-icons/fa";

const ContactSection = React.forwardRef((_, ref) => {
  return (
    <div
      ref={ref}
      className="p-10 md:w-[60%] bg-white mb-10 font-mono font-semibold border-4 rounded-2xl mt-5"
    >
      <h2 className="text-3xl font-bold text-[#000066]">Contact</h2>
      <div className="gap-4 mt-4 flex justify-evenly">
        <div>
          <a
            href="https://www.linkedin.com/in/abhinav-mishra-b95301258/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={42} />
          </a>
        </div>
        <div>
          <a
            href="https://www.instagram.com/abhinav_mishra29"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={42} />
          </a>
        </div>
        <div>
          <a
            href="https://github.com/abhinav2210103"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={42} />
          </a>
        </div>
        <div>
          <a
            href="https://twitter.com/abhinavetw"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter size={42} />
          </a>
        </div>
      </div>
    </div>
  );
});

export default ContactSection;
