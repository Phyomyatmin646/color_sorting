import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

const base = "block px-3 py-2 rounded transition whitespace-nowrap";
const active = "bg-blue-600 text-white shadow-md";
const normal =
  "text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [show, setShow] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  }

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScroll && current > 80) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScroll(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScroll]);

  const navClass = ({ isActive }) => `${base} ${isActive ? active : normal}`;

  return (
    <nav
      className={`bg-white/80 backdrop-blur-md text-gray-900 dark:bg-gray-950/80 dark:text-white border-b border-blue-900/30 fixed w-full z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-2 shrink-0">
            <img
              src="/logo.png"
              alt="Robotic Arm Logo"
              className="w-25 h-20 md:w-14 md:h-14 object-contain"
            />
            <h2 className="text-sm md:text-xl font-bold text-blue-400 leading-tight">
              Robotic Arm <br className="md:hidden" /> Color Sorting
            </h2>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            <NavLink className={navClass} to="/">
              Home
            </NavLink>
            <NavLink className={navClass} to="/about">
              About
            </NavLink>
            <NavLink className={navClass} to="/aiming">
              Aiming
            </NavLink>
            <NavLink className={navClass} to="/structure">
              Structure
            </NavLink>
            <NavLink className={navClass} to="/guideline">
              Guideline
            </NavLink>
            <NavLink className={navClass} to="/hardware">
              Software & Hardware
            </NavLink>
            <NavLink className={navClass} to="/contact">
              Contact
            </NavLink>
          </div>

          {/* Right Side: Theme & Hamburger */}
          <div className="flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 text-black dark:bg-gray-800 dark:text-white hover:ring-2 ring-blue-500 transition-all"
            >
              {dark ? "🌙" : "☀️"}
            </button>

            <button
              className="md:hidden text-blue-400 focus:outline-none text-2xl"
              onClick={() => setOpen(!open)}
            >
              {open ? "✖" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Nav Links */}
        <div
          className={`${
            open
              ? "max-h-screen opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          } md:hidden transition-all duration-300 ease-in-out border-t border-gray-100 dark:border-gray-800`}
        >
          <div className="flex flex-col space-y-2">
            <NavLink className={navClass} to="/" onClick={() => setOpen(false)}>
              Home
            </NavLink>
            <NavLink
              className={navClass}
              to="/about"
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>
            <NavLink
              className={navClass}
              to="/aiming"
              onClick={() => setOpen(false)}
            >
              Aiming
            </NavLink>
            <NavLink
              className={navClass}
              to="/structure"
              onClick={() => setOpen(false)}
            >
              Structure
            </NavLink>
            <NavLink
              className={navClass}
              to="/guideline"
              onClick={() => setOpen(false)}
            >
              Guideline
            </NavLink>
            <NavLink
              className={navClass}
              to="/hardware"
              onClick={() => setOpen(false)}
            >
              Software & Hardware
            </NavLink>
            <NavLink
              className={navClass}
              to="/contact"
              onClick={() => setOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
