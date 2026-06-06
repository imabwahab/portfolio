import { FiCalendar } from "react-icons/fi";
import { experienceData } from "../data/experience.js";

function Experience() {
  return (
    <section
      id="experience"
      className="section-card border-t border-stroke-strong pt-20 lg:pt-24"
    >
      <div className="flex max-w-2xl flex-col gap-3">
        <span className="section-label">Experience</span>
        <h2 className="serif-display text-3xl font-semibold text-text-main sm:text-4xl">
          Professional experience
        </h2>
        <p className="text-base leading-7 text-text-soft">
          The teams I have worked with in a professional delivery environment.
          The products and work themselves are collected in the projects below.
        </p>
      </div>

      <div className="mt-12 flex flex-col gap-10">
        {experienceData.map((item) => (
          <article
            key={`${item.company}-${item.period}`}
            className="flex flex-col gap-2 border-l-2 border-accent/40 pl-5"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <h3 className="text-xl font-semibold text-text-main">
                {item.company}
              </h3>
              <span className="inline-flex items-center gap-1.5 text-sm text-text-soft">
                <FiCalendar className="text-text-faint" />
                {item.period}
              </span>
            </div>
            <p className="text-sm font-medium text-accent-strong">
              {item.role}
            </p>
            <p className="mt-1 max-w-2xl text-sm leading-7 text-text-soft">
              {item.summary}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;
