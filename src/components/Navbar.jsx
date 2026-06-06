import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../data/navigation.js";
import { profileData } from "../data/profile.js";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-stroke bg-canvas/80 backdrop-blur-md">
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-3.5 sm:px-6 lg:px-8">
        <Link
          to="home"
          smooth
          duration={500}
          onClick={() => setMenuOpen(false)}
          className="cursor-pointer"
        >
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-stroke-strong text-xs font-bold tracking-[0.12em] text-accent-strong">
              AW
            </div>
            <span className="text-sm font-semibold text-text-main">
              {profileData.name}
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              smooth
              spy
              offset={-90}
              duration={500}
              activeClass="nav-link-active"
              className="relative cursor-pointer text-sm font-medium text-text-soft transition hover:text-text-main after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            to="contact"
            smooth
            duration={500}
            className="btn-primary cursor-pointer"
          >
            Get in touch
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-stroke text-base text-text-main md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="border-t border-stroke bg-canvas/95 px-5 py-4 backdrop-blur-md md:hidden">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                spy
                offset={-80}
                duration={500}
                onClick={() => setMenuOpen(false)}
                activeClass="nav-link-active"
                className="cursor-pointer rounded-lg px-3 py-2.5 text-sm font-medium text-text-soft transition hover:bg-panel hover:text-text-main"
              >
                {link.name}
              </Link>
            ))}
            <Link
              to="contact"
              smooth
              duration={500}
              onClick={() => setMenuOpen(false)}
              className="btn-primary mt-2 cursor-pointer"
            >
              Get in touch
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
