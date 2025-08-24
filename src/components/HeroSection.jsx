import profile from '../assets/profile.png';
import { GrDocumentDownload } from "react-icons/gr";
import { Link } from 'react-scroll';

function HeroSection() {
  return (
    <section
      id="HeroSection"
      className="w-full h-auto py-8 px-5 md:px-5 flex flex-col-reverse gap-10 md:flex-row items-center justify-center "
    >


      {/* Left: Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-secondary-txt dark:text-white mb-4">
          Hello,
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-secondary-txt dark:text-white mb-4">
          I'm <span className="text-primary-txt dark:text-[#FFF5E4] ml-2">Abdul Wahab</span>
        </h1>

        <h3 className="text-xl sm:text-2xl md:text-3xl font-medium text-primary-txt dark:text-gray-300 mb-6">
          Full Stack MERN Developer
        </h3>

        <p className="text-[#007074] dark:text-white font-medium text-sm sm:text-lg leading-relaxed mb-8 max-w-xl">
          I’m a Full Stack Developer specializing in the MERN stack (MongoDB, Express, React, Node.js).
          I build robust, scalable, and high-performance web applications with clean, maintainable code
          and a strong focus on user experience. From designing responsive front-ends to architecting efficient
          back-end APIs, I deliver end-to-end solutions that drive real impact.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            // href="/portfolio/cv.pdf"
            // download="cv.pdf"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded transition duration-300 cursor-pointer"
          >
            <GrDocumentDownload size={20} />
            CV
          </a>

          <Link
            to="Projects"
            smooth={true}
            duration={500}
            className="cursor-pointer text-indigo-600 dark:text-white hover:underline font-medium"
          >
            View My Projects
          </Link>
        </div>
      </div>

      {/* Right: Image */}
      <div className="w-full md:w-1/2 flex justify-center mb-5 md:mb-0">
        <img
          src={profile}
          alt="Profile"
          className="w-70 h-70 md:w-100 md:h-100 object-cover rounded-full shadow-2xl  border-4 border-primary-txt dark:border-[#FBFFE4]"
        />
      </div>

    </section>
  );
}

export default HeroSection;
