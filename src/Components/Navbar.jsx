import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import Symbol from "../../public/assets/symbol.png";

function Navbar({ scrollToSection }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((p) => !p);

  const navLinks = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Experience", target: "experience" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
 
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl"
      style={{
        backgroundColor: "rgba(16,17,18,0.72)",
        backgroundImage:
          "radial-gradient(circle at 15% 20%, rgba(59,130,246,0.10) 0%, transparent 35%), radial-gradient(circle at 85% 30%, rgba(99,102,241,0.08) 0%, transparent 40%)",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-10 py-4">
        {/* Left Logo */}
        <div className="flex items-center">
          <img
            src={Symbol}
            alt="Logo"
            className="h-10 w-10 object-contain"
          />
        </div>

        {/* Center = Nothing */}
        <div className="hidden md:block flex-1" />

        {/* Right Side (Links + Button) */}
        <div className="hidden md:flex items-center gap-10">
          <nav className="flex items-center gap-10 text-[16px] font-semibold tracking-wide text-zinc-300">
            {navLinks.map(({ label, target }) =>
              target === "home" ? (
                <Link
                  key={label}
                  to="/"
                  className="relative group hover:text-white transition"
                >
                  {label}
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              ) : (
                <button
                  key={label}
                  onClick={() => scrollToSection(target)}
                  className="relative group hover:text-white transition"
                >
                  {label}
                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                </button>
              )
            )}
          </nav>

          {/* CTA Button */}
        ÷
        </div>

        {/* Burger (Mobile) */}
        <button className="md:hidden text-zinc-200" onClick={toggleMenu}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/10">
          <nav className="flex flex-col py-6 gap-6 text-center">
            {navLinks.map(({ label, target }) =>
              target === "home" ? (
                <Link
                  key={label}
                  to="/"
                  onClick={() => setOpen(false)}
                  className="text-zinc-200 hover:text-white transition text-lg font-semibold tracking-wide"
                >
                  {label}
                </Link>
              ) : (
                <button
                  key={label}
                  onClick={() => {
                    scrollToSection(target);
                    setOpen(false);
                  }}
                  className="text-zinc-200 hover:text-white transition text-lg font-semibold tracking-wide"
                >
                  {label}
                </button>
              )
            )}

            {/* Mobile CTA */}
            <button
              onClick={() => {
                scrollToSection("contact");
                setOpen(false);
              }}
              className="mx-auto mt-2 px-7 py-3 rounded-2xl bg-blue-600 hover:bg-blue-500 transition text-white font-semibold shadow-lg shadow-blue-600/20 active:scale-[0.98]"
            >
              Hire Me
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;
