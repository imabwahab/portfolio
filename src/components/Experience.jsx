import { FiBriefcase, FiCalendar, FiExternalLink } from "react-icons/fi";
import { experienceData } from "../data/experience.js";
import {
  getExperienceProjectPath,
  handlePathNavigation,
} from "../utils/routing.js";

function Experience() {
  return (
    <section
      id="experience"
      className="section-card rounded-[2rem] px-5 py-7 sm:px-8 lg:px-12 lg:py-10"
    >
      <div className="flex max-w-3xl flex-col gap-4">
        <span className="section-label">Experience</span>
        <h2 className="serif-display text-3xl font-bold text-white sm:text-5xl">
          Professional experience and product work
        </h2>
        <p className="max-w-2xl text-base leading-8 text-text-soft">
          A concise view of the teams I have worked with and the products I
          have supported in a professional delivery environment.
        </p>
      </div>

      <div className="mt-10 space-y-6">
        {experienceData.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="rounded-[1.75rem] border border-stroke bg-panel-strong p-5 sm:p-6"
          >
            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-[1.5rem] border border-stroke bg-panel-soft p-4 sm:p-5">
                <div className="flex items-center gap-3 text-accent-strong">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 sm:h-11 sm:w-11">
                    <FiBriefcase />
                  </div>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-warm">
                      Company
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white sm:text-2xl">
                      {item.company}
                    </h3>
                  </div>
                </div>

                <p className="mt-5 text-base font-medium text-white sm:mt-6 sm:text-lg">
                  {item.role}
                </p>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-stroke px-4 py-2 text-sm text-text-soft">
                  <FiCalendar />
                  {item.period}
                </div>

                <p className="mt-5 text-sm leading-7 text-text-soft">
                  {item.summary}
                </p>
              </div>

              <div className="rounded-[1.5rem] border border-stroke bg-panel-soft p-4 sm:p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-accent-warm">
                  Products and platforms
                </p>

                <div className="mt-5 space-y-4">
                  {item.projects.map((project) => (
                    <a
                      key={project.name}
                      href={getExperienceProjectPath(project.slug)}
                      onClick={(event) =>
                        handlePathNavigation(
                          event,
                          getExperienceProjectPath(project.slug),
                        )
                      }
                      className="block rounded-[1.25rem] border border-stroke bg-panel px-4 py-4 transition hover:border-accent/20 hover:bg-panel-strong"
                    >
                      <div className="flex items-center gap-2">
                        <FiExternalLink className="text-accent-strong" />
                        <h4 className="text-lg font-semibold text-white">
                          {project.name}
                        </h4>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-text-soft">
                        {project.description}
                      </p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
