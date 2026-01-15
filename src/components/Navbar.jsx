import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
const navLink = "block px-3 py-2 rounded hover:bg-blue-600 transition";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-950 border-b border-blue-900 sticky top-0 z-50">
       
      <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
         <Link to="/">
        {/* Logo + Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/logo.png"           
            alt="Robotic Arm Logo"
            className="w-20 h-20 object-contain"
          />
          <h2 className="text-4xl font-bold text-blue-400">Robotic Arm System</h2>
        </div>
</Link>
        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden text-blue-400 focus:outline-none"
          onClick={() => setOpen(!open)}
        >
          {open ? "✖" : "☰"}
        </button>

        {/* Menu Links */}
        <div
          className={`${
            open ? "block" : "hidden"
          } md:flex md:space-x-2 text-sm mt-2 md:mt-0`}
        >
          <NavLink className={navLink} to="/" onClick={() => setOpen(false)}>Home</NavLink>
          <NavLink className={navLink} to="/about" onClick={() => setOpen(false)}>About</NavLink>
          <NavLink className={navLink} to="/aiming" onClick={() => setOpen(false)}>Aiming</NavLink>
          <NavLink className={navLink} to="/structure" onClick={() => setOpen(false)}>Structure</NavLink>
          <NavLink className={navLink} to="/guideline" onClick={() => setOpen(false)}>Guideline</NavLink>
          <NavLink className={navLink} to="/hardware" onClick={() => setOpen(false)}>Hardware</NavLink>
          <NavLink className={navLink} to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}
