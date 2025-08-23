import { useState } from "react";
import { FiEye } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";

// project pictures
import vmrm from "../assets/vmrm.png";
import geminiClone from "../assets/geminiClone.png";
import UGH from "../assets/ugh.png";
import BlogPlatform from "../assets/BlogPlatform.png";


const Projects = () => {
  const [showList, setShowList] = useState(false);

  return (
    <section id="Projects" className="py-16 px-16 xl:px-30 lg:px-24 "
    >
      {/* Title */}
      <div className="text-3xl md:text-4xl font-bold text-center text-primary-txt dark:text-primary-txt-light">
        Projects
      </div>

      <div className="text-center text-gray-600 dark:text-gray-300 mt-2">
        Here is the list of projects that I have worked on.
      </div>

      {/* Projects Grid */}
      <div className="mt-10 grid gap-8 md:grid-cols-2 ">
        {/* Card 1 */}
        <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-800 overflow-hidden hover:scale-[1.02] transition-transform">
          <img src={UGH} alt="Gaming Hub" className="w-full h-48 object-cover" />
          <div className="p-5">
            <p className="text-lg font-semibold text-secondary-txt dark:text-white">
              Gaming Hub
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://imabwahab.github.io/Gaming-Hub/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <FiEye />
                <span>Live Preview</span>
              </a>
              <a
                href="https://github.com/imabwahab/Gaming-Hub.git"
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

        {/* Card 2 */}
        <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-800 overflow-hidden hover:scale-[1.02] transition-transform"
        >
          <img
            src={geminiClone}
            alt="Gemini Clone"
            className="w-full h-48 object-cover"
          />
          <div className="p-5">
            <p className="text-lg font-semibold text-gray-900 dark:text-white">
              Gemini Clone
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href="https://imabwahab.github.io/Gemini-Clone/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                <FiEye />
                <span>Live Preview</span>
              </a>
              <a
                href="https://github.com/imabwahab/Gemini-Clone"
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

        {/* Hidden Projects */}
        {showList && (
          <>
            {/* Card 3 */}
            <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-800 overflow-hidden hover:scale-[1.02] transition-transform"
            >
              <img
                src={BlogPlatform}
                alt="Blog Platform"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  Blog Platform
                </p>
                <div className="flex gap-3 mt-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <FiEye />
                    <span>Live Preview</span>
                  </a>
                  <a
                    href="#"
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

            {/* Card 4 */}
            <div className="rounded-2xl shadow-lg bg-white dark:bg-gray-800 overflow-hidden hover:scale-[1.02] transition-transform" >
              <img src={vmrm} alt="VMRM" className="w-full h-48 object-cover" />
              <div className="p-5">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">
                  VMRM
                </p>
                <div className="flex gap-3 mt-4">
                  <a
                    href="https://vehicle-maintenance-repairing-manag.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
                  >
                    <FiEye />
                    <span>Live Preview</span>
                  </a>
                  <a
                    href="https://github.com/imabwahab/Vehicle-Maintenance-Repairing-Management.git"
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
          </>
        )}
      </div>

      {/* Toggle Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowList(!showList)}
          className="px-6 py-2 rounded-xl font-medium bg-blue-600 text-white hover:bg-blue-700 transition"
        >
          {showList ? "Reduce" : "See More"}
        </button>
      </div>
    </section>
  );
};

export default Projects;
