import { FiArrowUpRight, FiGithub } from "react-icons/fi";
import { projectData } from "../data/projects.js";

function SourceBadge({ source, kind }) {
  const isClient = kind === "client";

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium ${
        isClient
          ? "border-accent/30 bg-[rgba(16,185,129,0.10)] text-accent-strong"
          : "border-stroke text-text-soft"
      }`}
    >
      <span
        className={`h-1.5 w-1.5 rounded-full ${
          isClient ? "bg-accent" : "bg-text-faint"
        }`}
      />
      {source}
    </span>
  );
}

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div className="overflow-hidden rounded-xl border border-stroke bg-panel-soft">
        <img
          src={project.image}
          alt={project.name}
          className="aspect-[16/10] w-full object-contain object-center"
        />
      </div>
    );
  }

  return (
    <div className="flex aspect-[16/10] flex-col items-center justify-center gap-3 rounded-xl border border-stroke bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.12),transparent_60%)] bg-panel-soft">
      <span className="serif-display text-2xl font-semibold text-text-main">
        {project.name}
      </span>
      <span className="text-xs uppercase tracking-[0.16em] text-text-faint">
        Live product
      </span>
    </div>
  );
}

function Projects() {
  return (
    <section
      id="projects"
      className="section-card border-t border-stroke-strong pt-20 lg:pt-24"
    >
      <div className="flex max-w-2xl flex-col gap-3">
        <span className="section-label">Projects</span>
        <h2 className="serif-display text-3xl font-semibold text-text-main sm:text-4xl">
          Selected work
        </h2>
        <p className="text-base leading-7 text-text-soft">
          A single view of the work I have shipped, from client products built
          in a professional team to personal projects that show how I approach
          frontend, backend, and full-stack delivery end to end.
        </p>
      </div>

      <div className="mt-14 flex flex-col gap-16 lg:gap-20">
        {projectData.map((project, index) => {
          const reversed = index % 2 === 1;

          return (
            <article
              key={project.name}
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <div className={reversed ? "lg:order-2" : "lg:order-1"}>
                <ProjectVisual project={project} />
              </div>

              <div
                className={`flex flex-col gap-4 ${
                  reversed ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex flex-wrap items-center gap-3">
                  <SourceBadge source={project.source} kind={project.kind} />
                  <span className="text-sm text-text-soft">
                    {project.role} · {project.period}
                  </span>
                </div>

                <h3 className="serif-display text-2xl font-semibold text-text-main">
                  {project.name}
                </h3>

                <p className="text-base leading-7 text-text-soft">
                  {project.summary}
                </p>

                <ul className="flex flex-col gap-2">
                  {project.highlights.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-sm leading-6 text-text-soft"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-2 flex flex-wrap gap-3">
                  {project.kind === "client" ? (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      className="btn-primary"
                    >
                      Visit product
                      <FiArrowUpRight />
                    </a>
                  ) : (
                    <>
                      <a
                        href={project.preview}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary"
                      >
                        Live preview
                        <FiArrowUpRight />
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary"
                      >
                        Source
                        <FiGithub />
                      </a>
                    </>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects;
