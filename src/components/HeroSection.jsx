import { GrDocumentDownload } from "react-icons/gr";
import { Link } from "react-scroll";
import AnimatedRole from "./AnimatedRole";

function HeroSection({ greeting, name, roles, description, profileImage, cvText, projectsTarget, }) {
  
  return (
    <section
      id="HeroSection"
      className="w-full min-h-[85vh] py-8 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >
      {/* Left */}
      <div className="w-full text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold text-secondary-txt dark:text-white mb-2">
          {greeting}
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-txt dark:text-white mb-4">
          I'm <span className="text-primary-txt dark:text-[#FFF5E4]">{name}</span>
        </h1>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-primary-txt dark:text-gray-300 mb-6">
          <AnimatedRole roles={roles} />
        </h3>

        <p className="text-[#007074] dark:text-white text-sm sm:text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a className="inline-flex items-center gap-2 bg-primary-txt hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded transition-all duration-300 transform hover:-translate-y-1">
            <GrDocumentDownload size={20} />
            {cvText}
          </a>

          <Link
            to={projectsTarget}
            smooth
            duration={500}
            className="cursor-pointer text-primary-txt dark:text-white hover:underline font-medium transition-all duration-300"
          >
            View My Projects
          </Link>
        </div>
      </div>

      {/* Right */}
      <div className="w-full flex justify-center">
        <img
          src={profileImage}
          alt="Profile"
          className="w-64 h-64 md:w-120 md:h-120 object-contain rounded-full shadow-xl border-4 border-primary-txt dark:border-[#FBFFE4]"
        />
      </div>
    </section>
  );
}

export default HeroSection;

