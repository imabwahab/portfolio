import { FiArrowLeft, FiArrowUpRight, FiGithub } from "react-icons/fi";

function ProjectDetailPage({ project }) {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-10 pt-24 sm:px-6 lg:px-8">
      <section className="section-card rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="flex flex-col gap-6">
          <a
            href="#/"
            className="inline-flex w-max items-center gap-2 rounded-full border border-stroke bg-panel-soft px-4 py-2 text-sm font-semibold text-white transition hover:bg-panel"
          >
            <FiArrowLeft />
            Back to portfolio
          </a>

          <div className="flex flex-col gap-4">
            <span className="section-label">Project Detail</span>
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <h1 className="serif-display text-4xl font-bold text-white sm:text-5xl">
                  {project.name}
                </h1>
                <p className="mt-4 max-w-3xl text-base leading-8 text-text-soft">
                  {project.detailIntro}
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={project.preview}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-accent-strong"
                >
                  Live Preview
                  <FiArrowUpRight />
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-stroke bg-panel-soft px-5 py-3 text-sm font-semibold text-white transition hover:bg-panel"
                >
                  Source Code
                  <FiGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-card rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.75rem] border border-stroke bg-panel-strong p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-warm">
              Overview
            </p>
            <div className="mt-5 space-y-4">
              <div className="rounded-[1.25rem] border border-stroke bg-panel-soft px-4 py-4">
                <p className="text-sm text-text-soft">Role</p>
                <p className="mt-1 font-semibold text-white">{project.role}</p>
              </div>
              <div className="rounded-[1.25rem] border border-stroke bg-panel-soft px-4 py-4">
                <p className="text-sm text-text-soft">Timeline</p>
                <p className="mt-1 font-semibold text-white">{project.period}</p>
              </div>
              <div className="rounded-[1.25rem] border border-stroke bg-panel-soft px-4 py-4">
                <p className="text-sm text-text-soft">Stack</p>
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
      </section>

      <section className="section-card rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
        <div className="flex max-w-3xl flex-col gap-4">
          <span className="section-label">Gallery</span>
          <h2 className="serif-display text-3xl font-bold text-white sm:text-4xl">
            Project visuals and supporting screens
          </h2>
          <p className="max-w-2xl text-base leading-8 text-text-soft">
            This detail page is ready for multiple screenshots. Add more images
            to each project gallery in the data file and they will appear here.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {project.gallery.map((image, index) => (
            <div
              key={`${project.slug}-gallery-${index}`}
              className="overflow-hidden rounded-[1.75rem] border border-stroke bg-panel-strong"
            >
              <img
                src={image}
                alt={`${project.name} screenshot ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default ProjectDetailPage;
