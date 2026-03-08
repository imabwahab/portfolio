import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../data/navigation.js";
import { profileData } from "../data/profile.js";
import { getHomePath, handlePathNavigation } from "../utils/routing.js";

function Navbar({ isProjectDetail = false }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const homePath = getHomePath();

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <nav className="mx-auto flex w-full max-w-7xl items-center justify-between rounded-full border border-stroke bg-panel/90 px-4 py-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur xl:px-6">
        <a
          href={isProjectDetail ? homePath : "#home"}
          className="cursor-pointer"
          onClick={(event) => {
            setMenuOpen(false);

            if (isProjectDetail) {
              handlePathNavigation(event, homePath);
            }
          }}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-accent/25 bg-accent/10 text-sm font-bold tracking-[0.22em] text-accent-strong">
              AW
            </div>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-text-soft">
                Portfolio
              </p>
              <p className="text-sm text-white">{profileData.name}</p>
            </div>
          </div>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {isProjectDetail ? (
            <a
              href={homePath}
              onClick={(event) => handlePathNavigation(event, homePath)}
              className="relative cursor-pointer text-sm font-medium text-text-soft transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:scale-x-100"
            >
              Back to portfolio
            </a>
          ) : (
            navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                smooth
                spy
                offset={-90}
                duration={500}
                activeClass="nav-link-active"
                className="relative cursor-pointer text-sm font-medium text-text-soft transition hover:text-white after:absolute after:-bottom-2 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-300"
              >
                {link.name}
              </Link>
            ))
          )}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          {isProjectDetail ? (
            <a
              href={homePath}
              onClick={(event) => handlePathNavigation(event, homePath)}
              className="rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-strong transition hover:bg-accent/15"
            >
              Back to portfolio
            </a>
          ) : (
            <Link
              to="contact"
              smooth
              duration={500}
              className="cursor-pointer rounded-full border border-accent/25 bg-accent/10 px-4 py-2 text-sm font-semibold text-accent-strong transition hover:bg-accent/15"
            >
              Start a conversation
            </Link>
          )}
        </div>

        <button
          type="button"
          onClick={() => setMenuOpen((current) => !current)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-stroke bg-panel-soft text-lg text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </nav>

      {menuOpen ? (
        <div className="mx-auto mt-3 w-full max-w-7xl rounded-3xl border border-stroke bg-panel/95 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.28)] backdrop-blur md:hidden">
          <div className="flex flex-col gap-4">
            {isProjectDetail ? (
              <>
                <a
                  href={homePath}
                  onClick={(event) =>
                    handlePathNavigation(event, homePath, () =>
                      setMenuOpen(false),
                    )
                  }
                  className="cursor-pointer rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-text-soft transition hover:border-stroke hover:bg-panel-soft hover:text-white"
                >
                  Back to portfolio
                </a>
                <a
                  href={homePath}
                  onClick={(event) =>
                    handlePathNavigation(event, homePath, () =>
                      setMenuOpen(false),
                    )
                  }
                  className="cursor-pointer rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-center text-sm font-semibold text-accent-strong"
                >
                  Back to portfolio
                </a>
              </>
            ) : (
              <>
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
                    className="cursor-pointer rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-text-soft transition hover:border-stroke hover:bg-panel-soft hover:text-white"
                  >
                    {link.name}
                  </Link>
                ))}
                <Link
                  to="contact"
                  smooth
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer rounded-2xl border border-accent/20 bg-accent/10 px-4 py-3 text-center text-sm font-semibold text-accent-strong"
                >
                  Start a conversation
                </Link>
              </>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
