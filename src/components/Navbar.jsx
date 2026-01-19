import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const base = "block px-3 py-2 rounded transition";

const active = "bg-blue-600 text-white shadow-md";

const normal =
  "text-gray-700 dark:text-gray-300 hover:bg-blue-600 hover:text-white";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true);

  function toggleTheme() {
    document.documentElement.classList.toggle("dark");
    setDark(!dark);
  }

  const navClass = ({ isActive }) => `${base} ${isActive ? active : normal}`;

  return (
    <nav className="bg-white text-gray-900 dark:bg-gray-950 dark:text-white border-b border-blue-900 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
        <Link to="/">
          <div className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Robotic Arm Logo"
              className="w-30 h-20 object-contain"
            />
            <h2 className="text-3xl md:text-4xl font-bold text-blue-400">
              Robotic Arm System
            </h2>
          </div>
        </Link>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleTheme}
            className="px-3 py-2 rounded bg-gray-200 text-black dark:bg-gray-800 dark:text-white"
          >
            {dark ? "🌙" : "☀️"}
          </button>

          <button
            className="md:hidden text-blue-400 focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            {open ? "✖" : "☰"}
          </button>
        </div>

        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex md:space-x-2 text-sm mt-2 md:mt-0`}
        >
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
    </nav>
  );
}
