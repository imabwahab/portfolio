import { skillGroups } from "../data/skills.js";

function Skills() {
  return (
    <section
      id="expertise"
      className="section-card border-t border-stroke-strong pt-20 lg:pt-24"
    >
      <div className="flex max-w-2xl flex-col gap-3">
        <span className="section-label">Expertise</span>
        <h2 className="serif-display text-3xl font-semibold text-text-main sm:text-4xl">
          Technical strengths built for end-to-end delivery
        </h2>
        <p className="text-base leading-7 text-text-soft">
          My strongest work sits at the intersection of frontend quality,
          backend reliability, and the delivery discipline required to ship a
          complete product.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <article key={group.title} className="surface p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-stroke text-base text-accent-strong">
                <group.categoryIcon />
              </div>
              <h3 className="text-lg font-semibold text-text-main">
                {group.title}
              </h3>
            </div>
            <p className="mt-3 text-sm leading-7 text-text-soft">
              {group.subtitle}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <span
                    key={skill.name}
                    className="inline-flex items-center gap-2 rounded-lg border border-stroke bg-panel-soft px-3 py-1.5 text-sm text-text-soft"
                  >
                    <Icon className="text-base text-text-faint" />
                    {skill.name}
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Skills;
