import Logo from "./img/okbzns_wht.png";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Link } from "react-router";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
    <nav className="bg-[#3E5172] p-4 shadow-lg fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="text-white text-xl font-bold">
          <img src={Logo} width={160} height={80} />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none text-2xl"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Menu Items */}
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          <ul
            className={`absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600 md:bg-transparent md:flex space-x-6 text-white font-medium md:items-center transition-all duration-300 ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li className="p-4 md:p-0 hover:text-gray-200 cursor-pointer">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li className="p-4 md:p-0 hover:text-gray-200 cursor-pointer">
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li
              className="relative p-4 md:p-0"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setTimeout(() => setIsDropdownOpen(false), 1000)}
            >
              <span className="hover:text-gray-200 cursor-pointer">
                <Link to="/services" onClick={() => setIsOpen(false)}>
                  Services
                </Link>
              </span>
              {isDropdownOpen && (
                <ul className="absolute left-0 bg-white text-black shadow-lg mt-2 py-2 rounded w-40"
                onMouseEnter={() => setIsDropdownOpen(true)} 
        onMouseLeave={() => setTimeout(() => setIsDropdownOpen(false), 1000)}>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link
                      to="/marketing-tools"
                      onClick={() => setIsOpen(false)}
                    >
                      Marketing Tools
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link to="/seo" onClick={() => setIsOpen(false)}>
                      SEO Optimization
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link
                      to="/web-development"
                      onClick={() => setIsOpen(false)}
                    >
                      Web Development
                    </Link>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                    <Link to="/engg-solutions" onClick={() => setIsOpen(false)}>
                      Engg. Solutions
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="p-4 md:p-0 hover:text-gray-200 cursor-pointer">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </NavLink>
      </div>
    </nav>

<div className="pt-20 md:pt-24 bg-gray-100"></div>
</>

  );
}
