import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-4xl font-extrabold text-black">B.D.R</h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 text-xl font-medium">
          {["Home", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className={`transition-all hover:scale-110 ${
                location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                  ? "text-amber-500 font-bold"
                  : "text-black"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 flex flex-col text-center text-xl font-medium">
          {["Home", "Services", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
              className={`py-2 transition-all hover:text-amber-500 ${
                location.pathname === (item === "Home" ? "/" : `/${item.toLowerCase()}`)
                  ? "text-amber-500 font-bold"
                  : "text-black"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
