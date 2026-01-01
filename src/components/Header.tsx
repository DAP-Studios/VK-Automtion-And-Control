import React, { useState, useEffect } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPortrait, setIsPortrait] = useState(
    window.innerHeight > window.innerWidth
  );

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-30 bg-transparent">
      
      {/* LEFT: Glass Pill (Logo + Text, content width only) */}
      <div className="fixed top-0 left-0 z-40 ml-4 mt-4">
        <div
          className="
            inline-flex items-center gap-3
            px-3 py-2
            bg-white/10 backdrop-blur-lg
            rounded-full
            shadow-lg border border-orange-600/100
            hover:bg-orange-300 transition-all duration-200
          "
        >
          {/* Logo */}
          {/* <div
            className="
              w-10 h-10 sm:w-12 sm:h-12
              rounded-full
              bg-gradient-to-br from-orange-500 to-orange-600
              flex items-center justify-center
              shadow-md
            "
          > */}
            <img
              src="src/assets/logo.png"
              alt="VK Automation Logo"
              className="w-16 h-16 sm:w-15 sm:h-15 object-contain"
              draggable={false}
            />
          {/* </div> */}

          {/* Text */}
          <span className="font-bold text-gray-900 text-xl sm:text-2xl whitespace-nowrap">
            VK Automation and Control
          </span>
        </div>
      </div>

      {/* RIGHT: Navigation Bar (Desktop - Landscape only) */}
      <div className={`fixed top-0 right-0 z-50 mr-10 mt-0 ${isPortrait ? "hidden" : "block"}`}>
        <nav
          className="
            flex items-center gap-6
            h-14 sm:h-16
            pl-20 pr-20
            bg-white/10
            backdrop-blur-xl
            rounded-bl-2xl rounded-br-2xl
            shadow-lg
            border border-orange-300
          "
        >
          {[
            { href: "#home", label: "Home" },
            { href: "#products", label: "Products" },
            { href: "#services", label: "Services" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                relative px-2 py-2
                font-semibold text-gray-800
                hover:text-orange-600
                transition group
                whitespace-nowrap
                text-sm sm:text-base
              "
            >
              <span>{item.label}</span>
              <span
                className="
                  absolute left-0 bottom-0
                  w-0 h-0.5
                  bg-gradient-to-r from-orange-400 to-cyan-400
                  transition-all duration-300
                  group-hover:w-full
                "
              ></span>
            </a>
          ))}
        </nav>
      </div>

      {/* RIGHT: Hamburger Menu (Portrait only) */}
      <div className={`fixed top-0 right-0 z-50 mr-4 mt-4 ${isPortrait ? "block" : "hidden"}`}>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="
            p-2
            bg-white/10 backdrop-blur-lg
            rounded-full
            shadow-lg border border-white/20
            hover:bg-white/30 transition-all duration-200
          "
        >
          <svg
            className="w-6 h-6 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && isPortrait && (
        <nav
          className="
            fixed top-16 right-4 z-40
            flex flex-col gap-4
            p-6
            bg-white/10 backdrop-blur-xl
            rounded-2xl
            shadow-lg border border-white/20
            min-w-max
          "
        >
          {[
            { href: "#home", label: "Home" },
            { href: "#products", label: "Products" },
            { href: "#services", label: "Services" },
            { href: "#about", label: "About" },
            { href: "#contact", label: "Contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="
                font-semibold text-gray-800
                hover:text-orange-600
                transition
              "
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
