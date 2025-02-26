
import Logo from "./img/okbzns_logo.png";
import React, { useState } from "react";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-[#3E5172] p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Placeholder */}
        <div className="text-white text-xl font-bold">
          <img src={Logo} width={160} height={80} />
        </div>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
        </div>

        {/* Menu Items */}

        <ul
          className={`md:flex space-x-6 text-white font-medium ${
            isOpen ? "block" : "hidden"
          } md:block`}
        >
          <li className="hover:text-gray-200 cursor-pointer">Home</li>
          <li className="hover:text-gray-200 cursor-pointer">About</li>
          <li
            className="relative"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span className="hover:text-gray-200 cursor-pointer">Services</span>
            {isDropdownOpen && (
              <ul className="absolute bg-white text-black shadow-lg mt-2 py-2 rounded w-40">
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                Marketing Tools
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  SEO Optimization
                </li>
                <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">
                  Web Development
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-gray-200 cursor-pointer">Contact</li>
        </ul>
      </div>
    </nav>
  );
}
