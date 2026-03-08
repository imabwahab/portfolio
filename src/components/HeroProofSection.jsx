import { profileData, strengths } from "../data/profile.js";

function HeroProofSection() {
  return (
    <section className="section-card rounded-[2rem] px-6 py-8 sm:px-8 lg:px-12 lg:py-10">
      <div className="flex max-w-3xl flex-col gap-4">
        <span className="section-label">Why Work With Me</span>
        <h2 className="serif-display text-4xl font-bold text-white sm:text-5xl">
          Clear delivery, practical engineering, and full-stack coverage
        </h2>
        <p className="max-w-2xl text-base leading-8 text-text-soft">
          This is where the supporting proof belongs: the stack I work in, the
          way I approach product delivery, and the areas where I add the most
          value.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="rounded-[1.75rem] border border-stroke bg-panel-strong p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {profileData.stats.map((item) => (
              <div
                key={item.label}
                className="rounded-[1.25rem] border border-stroke bg-panel-soft px-4 py-4"
              >
                <p className="text-2xl font-bold text-white">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-text-soft">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-stroke bg-panel-soft p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-warm">
              Working style
            </p>
            <p className="mt-3 text-sm leading-7 text-text-soft">
              {profileData.availability}
            </p>
          </div>

          <div className="mt-6 rounded-[1.5rem] border border-stroke bg-panel-soft p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-warm">
              Core stack
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {profileData.stacks.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {strengths.map((item) => (
            <article
              key={item.title}
              className="rounded-[1.5rem] border border-stroke bg-panel-soft p-5"
            >
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-text-soft">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroProofSection;
