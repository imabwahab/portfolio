import { Link } from "react-scroll";
import { navLinks } from "../data/navigation.js";
import { profileData } from "../data/profile.js";

function Footer({ isProjectDetail = false }) {
  return (
    <footer className="relative z-10 px-4 pb-8 pt-2 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 rounded-[2rem] border border-stroke bg-panel px-6 py-6 text-sm text-text-soft backdrop-blur sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-base font-semibold text-white">{profileData.name}</p>
          <p className="mt-1">{profileData.title}</p>
        </div>

        <div className="flex flex-wrap gap-4">
          {isProjectDetail ? (
            <a href="#/" className="transition hover:text-white">
              Back to portfolio
            </a>
          ) : (
            navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                smooth
                duration={500}
                className="cursor-pointer transition hover:text-white"
              >
                {item.name}
              </Link>
            ))
          )}
        </div>

        <p>Copyright {new Date().getFullYear()} Abdul Wahab</p>
      </div>
    </footer>
  );
}

export default Footer;
