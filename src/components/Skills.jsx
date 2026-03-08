import { skillGroups } from "../data/skills.js";

function Skills() {
  return (
    <section
      id="expertise"
      className="section-card rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-10"
    >
      <div className="flex max-w-3xl flex-col gap-4">
        <span className="section-label">Expertise</span>
        <h2 className="serif-display text-4xl font-bold text-white sm:text-5xl">
          Technical strengths built for end-to-end product delivery
        </h2>
        <p className="max-w-2xl text-base leading-8 text-text-soft">
          My strongest work sits at the intersection of frontend quality,
          backend reliability, and the delivery discipline required to ship a
          complete product.
        </p>
      </div>

      <div className="mt-10 grid gap-6 xl:grid-cols-2">
        {skillGroups.map((group) => (
          <article
            key={group.title}
            className="rounded-[1.75rem] border border-stroke bg-panel-strong p-6"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold text-white">
                  {group.title}
                </h3>
                <p className="mt-3 max-w-xl text-sm leading-7 text-text-soft">
                  {group.subtitle}
                </p>
              </div>
              <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-xl text-accent-strong sm:flex">
                <group.categoryIcon />
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {group.skills.map((skill) => {
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    className="flex items-center gap-4 rounded-2xl border border-stroke bg-panel-soft px-4 py-4"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 text-xl text-accent-strong">
                      <Icon />
                    </div>
                    <div>
                      <p className="font-medium text-white">{skill.name}</p>
                    </div>
                  </div>
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
