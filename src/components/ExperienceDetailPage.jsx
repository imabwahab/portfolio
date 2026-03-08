import { FiArrowLeft, FiArrowUpRight, FiBriefcase, FiCalendar } from "react-icons/fi";
import { getHomePath, handlePathNavigation } from "../utils/routing.js";

function ExperienceDetailPage({ project }) {
  const homePath = getHomePath();

  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-10 pt-24 sm:px-6 lg:px-8">
      <section className="section-card rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="flex flex-col gap-6">
          <a
            href={homePath}
            onClick={(event) => handlePathNavigation(event, homePath)}
            className="inline-flex w-max items-center gap-2 rounded-full border border-stroke bg-panel-soft px-4 py-2 text-sm font-semibold text-white transition hover:bg-panel"
          >
            <FiArrowLeft />
            Back to portfolio
          </a>

          <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-4xl">
              <span className="section-label">Experience Detail</span>
              <h1 className="mt-4 serif-display text-4xl font-bold text-white sm:text-5xl">
                {project.name}
              </h1>
              <p className="mt-4 text-base leading-8 text-text-soft">
                {project.detailIntro}
              </p>
            </div>

            {project.website ? (
              <a
                href={project.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-accent-strong"
              >
                Visit product
                <FiArrowUpRight />
              </a>
            ) : null}
          </div>
        </div>
      </section>

      <section className="section-card rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.82fr_1.18fr]">
          <div className="rounded-[1.75rem] border border-stroke bg-panel-strong p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-warm">
              Overview
            </p>

            <div className="mt-5 space-y-4">
              <div className="rounded-[1.25rem] border border-stroke bg-panel-soft px-4 py-4">
                <p className="text-sm text-text-soft">Company</p>
                <p className="mt-1 font-semibold text-white">{project.company}</p>
              </div>

              <div className="rounded-[1.25rem] border border-stroke bg-panel-soft px-4 py-4">
                <p className="text-sm text-text-soft">Role</p>
                <p className="mt-1 font-semibold text-white">{project.role}</p>
              </div>

              <div className="rounded-[1.25rem] border border-stroke bg-panel-soft px-4 py-4">
                <p className="text-sm text-text-soft">Timeline</p>
                <p className="mt-1 font-semibold text-white">{project.period}</p>
              </div>

              <div className="rounded-[1.25rem] border border-stroke bg-panel-soft px-4 py-4">
                <p className="text-sm text-text-soft">Focus areas</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[1.75rem] border border-stroke bg-panel-strong p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-warm">
                Working context
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-text-soft">
                {project.context.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.25rem] border border-stroke bg-panel-soft px-4 py-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[1.75rem] border border-stroke bg-panel-strong p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-warm">
                Delivery highlights
              </p>
              <ul className="mt-5 space-y-4 text-sm leading-7 text-text-soft">
                {project.outcomes.map((item) => (
                  <li
                    key={item}
                    className="rounded-[1.25rem] border border-stroke bg-panel-soft px-4 py-4"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="rounded-[1.75rem] border border-stroke bg-panel-strong p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-strong">
              <FiBriefcase />
            </div>
            <p className="mt-5 text-lg font-semibold text-white">Professional product work</p>
            <p className="mt-3 text-sm leading-7 text-text-soft">
              This work reflects delivery inside a professional product
              environment rather than an isolated demo project.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-stroke bg-panel-strong p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-strong">
              <FiCalendar />
            </div>
            <p className="mt-5 text-lg font-semibold text-white">Ongoing execution</p>
            <p className="mt-3 text-sm leading-7 text-text-soft">
              The engagement emphasizes consistent implementation, practical
              collaboration, and dependable execution inside an active product cycle.
            </p>
          </div>

          <div className="rounded-[1.75rem] border border-stroke bg-panel-strong p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-accent-strong">
              <FiArrowUpRight />
            </div>
            <p className="mt-5 text-lg font-semibold text-white">Consistent presentation</p>
            <p className="mt-3 text-sm leading-7 text-text-soft">
              Experience entries follow the same structured presentation as the
              portfolio projects, creating a more cohesive site experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ExperienceDetailPage;
