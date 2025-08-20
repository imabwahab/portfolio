import { useState, useEffect } from 'react';
import { FaUserAlt, FaBars, FaTimes, FaMoon, FaSun } from 'react-icons/fa';
import { Link } from 'react-scroll';
import W from '../assets/W.png'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode class on <html>
  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', darkMode);
  }, [darkMode]);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const navLinks = [
    { name: 'Home', to: 'intro' },
    { name: 'Skills', to: 'skills' },
    { name: 'Projects', to: 'projects' },
    { name: 'Contact', to: 'contact' },
  ];

  return (
    <nav className="bg-primary text-surface dark:bg-gray-900 dark:text-white shadow-md fixed w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <img
          src={W}
          alt="Logo"
          className="h-8 w-auto object-contain select-none"
        />



        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              className="text-lg font-medium hover:text-accent cursor-pointer transition-colors duration-300"
              to={to}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              activeClass="text-accent"
            >
              {name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4 text-xl">
          <FaUserAlt className="cursor-pointer hover:text-accent transition-colors duration-200" />
          <button onClick={toggleDarkMode} className="focus:outline-none">
            {darkMode ? <FaSun className="hover:text-accent" /> : <FaMoon className="hover:text-accent" />}
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
        <div className="md:hidden px-4 pt-4 pb-6 space-y-4 bg-primary dark:bg-gray-800 text-lg rounded-b-md shadow-lg">
          {navLinks.map(({ name, to }) => (
            <Link
              key={name}
              className="block py-2 hover:text-accent transition-colors duration-300"
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
