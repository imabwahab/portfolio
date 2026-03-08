import { FiArrowUpRight } from "react-icons/fi";
import { projectData } from "../data/projects.js";
import { getProjectPath, handlePathNavigation } from "../utils/routing.js";

function Projects() {
  return (
    <section
      id="projects"
      className="section-card rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-10"
    >
      <div className="flex max-w-3xl flex-col gap-4">
        <span className="section-label">Projects</span>
        <h2 className="serif-display text-4xl font-bold text-white sm:text-5xl">
          Selected work
        </h2>
        <p className="max-w-2xl text-base leading-8 text-text-soft">
          This section highlights a selection of projects that demonstrate how
          I approach frontend execution, backend logic, integration work, and
          overall product delivery.
        </p>
      </div>

      <div className="mt-10 grid gap-5">
        {projectData.map((project, index) => (
          <a
            key={project.slug}
            href={getProjectPath(project.slug)}
            onClick={(event) =>
              handlePathNavigation(event, getProjectPath(project.slug))
            }
            className="group rounded-[1.75rem] border border-stroke bg-panel-strong p-6 transition hover:border-accent/20 hover:bg-panel"
          >
            <div className="grid gap-5 lg:grid-cols-[120px_1fr_auto] lg:items-center">
              <div className="text-sm font-semibold uppercase tracking-[0.24em] text-accent-warm">
                Project 0{index + 1}
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {project.name}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-text-soft">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-stroke bg-panel-soft px-4 py-3 text-sm font-semibold text-white transition group-hover:border-accent/20 group-hover:text-accent-strong">
                View details
                <FiArrowUpRight />
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
