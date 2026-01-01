import { FiEye } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

const ProjectCard = ({ pic, name, preview, github, tech }) => {
  return (
    <div className="group relative rounded-2xl overflow-hidden shadow-lg bg-white/60 dark:bg-dark-midnight/40 backdrop-blur-md border border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">

      {/* Image Wrapper */}
      <div className="relative h-52 overflow-hidden">
        {/* Image */}
        <img
          src={pic}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:opacity-40 group-hover:scale-105"
        />

        {/* Hover Overlay */}
        <div
          className="
            absolute inset-0 bg-black/60 text-white 
            opacity-0 group-hover:opacity-100 
            flex flex-col items-center justify-center 
            p-4 text-center transition-all duration-500
          "
        >
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-sm text-gray-200">{tech}</p>
        </div>
      </div>

      {/* Gradient Accent Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-[#001d3d] via-[#335c67] to-[#0D5EA6]"></div>

      {/* Content */}
      <div className="p-4 flex flex-col sm:flex-row justify-between items-center">
        <p className="text-xl font-semibold text-gray-900 dark:text-white">
          {name}
        </p>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-2">
          <a
            href={preview}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-primary-txt text-white hover:bg-secondary-txt transition duration-300 shadow-sm"
          >
            <FiEye />
            <span>Preview</span>
          </a>

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-800 text-white hover:bg-black transition duration-300 shadow-sm"
          >
            <FaGithub />
            <span>Code</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
