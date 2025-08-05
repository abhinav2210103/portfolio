import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Symbol from "../../public/assets/symbol.png"; 
import { Link } from "react-router-dom";

function Navbar({ scrollToSection }) {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen((p) => !p);

  const navLinks = [
    { label: "Home", target: "home" },
    { label: "About", target: "about" },
    { label: "Skills", target: "skills" },
    { label: "Projects", target: "projects" },
    { label: "Contact", target: "contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-b from-[#ffffff] to-[#f0f6ff] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-8 py-3 md:py-4">
        {/* Logo */}
        <div className='flex md:ml-20 justify-center'>
        <img src={Symbol} alt='Logo' />
      </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-mono text-lg">
          {navLinks.map(({ label, target }) =>
            target === "home" ? (
              <Link
                key={label}
                to="/"
                className="relative group pt-1 text-[#001066] group-hover:text-[#ff9900] transition"
              >
                {label}
              </Link>
            ) : (
              <button
                key={label}
                onClick={() => scrollToSection(target)}
                className="relative group pt-1 text-[#001066] hover:text-[#ff9900] transition"
              >
                {label}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#ff9900] transition-all duration-300 group-hover:w-full" />
              </button>
            )
          )}
        </nav>

        {/* Burger */}
        <button className="md:hidden text-[#001066]" onClick={toggleMenu}>
          <FaBars size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[#e2e8f0] shadow-lg">
          <nav className="flex flex-col py-4 gap-4 font-mono text-lg text-center">
            {navLinks.map(({ label, target }) =>
              target === "home" ? (
                <Link
                  key={label}
                  to="/"
                  onClick={() => setOpen(false)}
                  className="text-[#001066] hover:text-[#ff9900]"
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
                  className="text-[#001066] hover:text-[#ff9900]"
                >
                  {label}
                </button>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
export default Navbar;
