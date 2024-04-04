import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "../assets/wix.png"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto w-[80%] m-auto">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <a href="/">
              <img
                src={logo}
                alt="logo"
                className="w-[148px] h-[31px]"
              />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4 text-white">
            <a href="/" className="text-white">
              Home
            </a>
            <a href="/" className="text-white">
              About
            </a>
            <a href="/" className="text-white">
              Services
            </a>
            <a href="/" className="text-white">
              Contact
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="outline-none mobile-menu-button" onClick={toggleMenu}>
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
        </div>

        {showMenu && (
          <div className="mt-4 md:hidden">
            <ul className="text-white">
              <li><a href="/" className="block py-2">Home</a></li>
              <li><a href="/" className="block py-2">About</a></li>
              <li><a href="/" className="block py-2">Services</a></li>
              <li><a href="/" className="block py-2">Contact</a></li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
