import { Link } from "react-scroll";
import { navLinks } from "../data/navigation.js";
import { profileData } from "../data/profile.js";

function Footer() {
  return (
    <footer className="relative z-10 border-t border-stroke">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-text-soft sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-base font-semibold text-text-main">
            {profileData.name}
          </p>
          <p className="mt-1">{profileData.title}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {navLinks.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              smooth
              duration={500}
              className="cursor-pointer transition hover:text-text-main"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <p className="text-text-faint">
          © {new Date().getFullYear()} Abdul Wahab
        </p>
      </div>
    </footer>
  );
}

export default Footer;
