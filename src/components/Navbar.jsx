import { useState } from 'react';
import { FaUserAlt, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { GrDocumentDownload } from "react-icons/gr";
import { Link } from 'react-scroll';
import logo from '../assets/logo.png'
import { navLinks } from '../assets/data.js'

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);



  return (
    <nav className="text-primary-txt  dark:bg-dark-midnight bg-gray-100 dark:text-white shadow-md fixed top-0 h-[66px] w-full z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">

        <img
          src={logo}
          alt="Logo"
          className="h-10 w-auto object-contain select-none"
        />

        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              className="text-lg font-bold hover:text-primary-txt dark:hover:text-[#ccc5b9] cursor-pointer transition-colors duration-300 "
              to={to}
              spy={true}
              smooth={true}
              offset={-60}
              duration={500}
              activeClass="text-primary-txt dark:text-[#ccc5b9] pb-[2px] border-b-2"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 text-xl">
          <FaUserAlt className="cursor-pointer dark:hover:text-accent transition-colors duration-200" />
          <GrDocumentDownload className="cursor-pointer dark:hover:text-accent transition-colors duration-200" />
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? <FaSun className=" dark:hover:text-accent" /> : <FaMoon className=" hover:dark:hover:text-accent" />}
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl focus:outline-none">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-4 pb-6 space-y-4 text-white/80 bg-dark-midnight/100 text-lg rounded-b-md shadow-lg">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              className="block py-2 font-bold hover:text-accent transition-colors duration-300"
              to={to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              {name}
            </Link>
          ))}

          <div className="flex items-center gap-4 pt-4 border-t border-gray-300 dark:border-gray-700">

            <FaUserAlt className="cursor-pointer hover:text-accent" />
            <GrDocumentDownload className="cursor-pointer hover:text-accent" />
            <button onClick={toggleDarkMode} className="focus:outline-none text-xl">
              {darkMode ? <FaSun className="hover:text-accent" /> : <FaMoon className="hover:text-accent" />}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
