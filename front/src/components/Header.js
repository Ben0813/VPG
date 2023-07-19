import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollTo, setScrollTo] = useState(null);

  //updates the scroll position state on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  //Scrolls to a section
  useEffect(() => {
    if (scrollTo) {
      scroller.scrollTo(scrollTo, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
      setScrollTo(null);
    }
  }, [location.pathname, scrollTo]);

  //navigation to a path and scrolls to a section
  const handleNavigation = (path, section) => {
    if (location.pathname !== path) {
      navigate(path);
      setScrollTo(section);
    } else {
      scroller.scrollTo(section, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };

  //return a navigation link
  const navLink = (path, label, section) => {
    if (section) {
      return (
        <div
          onClick={() => handleNavigation(path, section)}
          className="text-white mx-4 cursor-pointer font-rajdhani hover:text-khaki"
        >
          {label}
        </div>
      );
    } else {
      return (
        <Link
          to={path}
          className="text-white mx-4 cursor-pointer font-rajdhani hover:text-khaki"
        >
          {label}
        </Link>
      );
    }
  };

  return (
    <header
      className={`py-4 fixed top-0 left-0 right-0 z-10 transition duration-500 ${
        scrollPosition > 0 ? "bg-raisin bg-opacity-80" : "bg-raisin"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="cursor-pointer">
            <img
              src={`${process.env.REACT_APP_API_URL}/uploads/logo.png`}
              alt="logo"
              className="h-12"
            />
          </Link>
          <nav className="hidden md:flex md:items-center md:space-x-4 ml-4 ">
            {navLink("/services", "Services")}
            {navLink("/", "Occasions", "cars")}
            {navLink("/", "Témoignages", "testimonials")}
            {navLink("/contact", "Contact", "contact")}
          </nav>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block text-white px-4 py-2 font-barlow hover:text-khaki"
          >
            Connexion
          </button>
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden bg-brand-light p-2 rounded-md hover:text-khaki"
          >
            <svg
              className="h-6 w-6 text-white"
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
          <ul className="flex flex-col items-center py-2 space-y-2 text-white">
            {navLink("/services", "Services")}
            {navLink("/", "Occasions", "cars")}
            {navLink("/", "Témoignages", "testimonials")}
            {navLink("/contact", "Contact", "contact")}
            <li>
              <button
                onClick={() => navigate("/login")}
                className="text-white px-4 py-2 rounded-md hover:text-khaki font-barlow"
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
