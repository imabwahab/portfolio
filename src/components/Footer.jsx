import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { FaXTwitter, FaFacebookF, FaInstagram } from "react-icons/fa6";
import { Link } from "react-scroll";
import { navLinks } from "../assets/data.js";
import Logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-dark-midnight text-gray-700 dark:text-gray-300 border-t border-gray-300 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand / About */}
        <div>
          <div className="flex flex-row items-center">
            <img src={ Logo} alt="Logo" className="w-10 h-full" />
            <h2 className="text-xl font-bold italic text-primary-txt  ">Abdul Wahab</h2>
          </div>
          <p className="mt-3 text-sm">
            Full-Stack MERN Developer creating seamless, interactive user experiences backed by powerful server-side logic.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold text-primary-txt dark:text-white">Quick Links</h3>
          <ul className="mt-3 space-y-2">
            {navLinks.map(link => (
              <li>
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="hover:text-blue-600 transition cursor-pointer">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-primary-txt dark:text-white">Connect</h3>
          <div className="flex gap-4 mt-3">
            <a
              href="https://github.com/imabwahab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 dark:hover:text-[#ccc5b9]  transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/abdul-wahab-705a5330b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 dark:hover:text-[#ccc5b9]  transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://x.com/imab_wahab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 dark:hover:text-[#ccc5b9]  transition"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://www.facebook.com/imch.wahab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 dark:hover:text-[#ccc5b9]  transition"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/imab_wahab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-blue-600 dark:hover:text-[#ccc5b9] transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>FaInstagram

      {/* Bottom Bar */}
      <div className="border-t border-gray-300 dark:border-gray-700 text-center py-4 text-sm text-gray-600 dark:text-gray-400">
        © {new Date().getFullYear()} Abdul Wahab. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
