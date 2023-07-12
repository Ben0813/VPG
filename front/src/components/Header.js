import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLogin = () => {
    window.location.href = "http://localhost:3002/login";
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const isTransparent = scrollPosition > 0;

  return (
    <header
      className={`py-4 fixed top-0 left-0 right-0 z-10 transition duration-500 ${
        isTransparent ? "bg-raisin bg-opacity-80" : "bg-raisin"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="http://localhost:3000/uploads/logo.png"
            alt="logo"
            className="h-10"
          />
          <nav className="hidden md:flex md:items-center md:space-x-4">
            <Link
              to="services"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white mx-4 cursor-pointer font-rajdhani"
            >
              Services
            </Link>
            <Link
              to="cars"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white mx-4 cursor-pointer font-rajdhani"
            >
              Cars
            </Link>
            <Link
              to="testimonials"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              className="text-white mx-4 cursor-pointer font-rajdhani"
            >
              Testimonials
            </Link>
          </nav>
        </div>
        <div className="flex items-center">
          <button
            onClick={handleLogin}
            className="hidden md:block text-white px-4 py-2 font-barlow"
          >
            Connexion
          </button>
          <button
            onClick={toggleMobileMenu}
            className="md:hidden bg-brand-light p-2 rounded-md"
          >
            <svg
              className="h-6 w-6 text-brand-red-light"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-brand-red mt-2">
          <ul className="flex flex-col items-center py-2 space-y-2">
            <li>
              <Link
                to="services"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-brand-light cursor-pointer font-rajdhani"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="cars"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-brand-light cursor-pointer font-rajdhani"
              >
                Cars
              </Link>
            </li>
            <li>
              <Link
                to="testimonials"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="text-brand-light cursor-pointer font-rajdhani"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogin}
                className="text-brand-light px-4 py-2 rounded-md hover:bg-brand-red-lighter font-barlow"
              >
                Connexion
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;