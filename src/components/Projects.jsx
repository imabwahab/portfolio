import { FiEye } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import { projectData } from '../assets/data.js'

const Projects = () => {
  // const [showList, setShowList] = useState(false);

  return (
    <section id="Projects" className="py-16 px-8 md:px-16 xl:px-30 lg:px-24 "
    >
      {/* Title */}
      <div className="text-3xl md:text-4xl font-bold text-center text-primary-txt dark:text-primary-txt-light">
        Projects
      </div>

      <div className="text-center text-gray-600 dark:text-gray-300 mt-2">
        Here is the list of projects that I have worked on.
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid gap-8 lg:gap-12 sm:grid-cols-2 ">

        {projectData.map((project) => {
          return (
            <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-800 overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <img
                src={project.pic}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-3 md:p-5">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  {project.name}
                </p>
                <div className="flex gap-3 mt-1">
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <FiEye />
                    <span>Preview</span>
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gray-700 text-white hover:bg-gray-900 transition"
                  >
                    <FaGithub />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          )
        })}

      </div>

      {/* Toggle Button */}
      {/* <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowList(!showList)}
          className="px-6 py-2 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {showList ? "Reduce" : "See More"}
        </button>
      </div> */}
    </section>
  );
};

export default Projects;
