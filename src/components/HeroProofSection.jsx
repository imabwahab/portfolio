import { profileData, strengths } from "../data/profile.js";

function HeroProofSection() {
  return (
    <section className="section-card border-t border-stroke-strong pt-20 lg:pt-24">
      <div className="flex max-w-2xl flex-col gap-3">
        <span className="section-label">Why work with me</span>
        <h2 className="serif-display text-3xl font-semibold text-text-main sm:text-4xl">
          Why teams choose to work with me
        </h2>
        <p className="text-base leading-7 text-text-soft">
          Beyond the technology stack, I bring a delivery mindset centered on
          clarity, reliability, and practical execution across product and
          engineering work.
        </p>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-stroke bg-stroke lg:grid-cols-1">
            {profileData.stats.map((item) => (
              <div key={item.label} className="bg-panel px-5 py-5">
                <p className="text-2xl font-semibold text-text-main">
                  {item.value}
                </p>
                <p className="mt-1 text-sm leading-6 text-text-soft">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          <div className="surface p-5">
            <p className="section-label">Core stack</p>
            <div className="mt-4 flex flex-wrap gap-2">
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
            <article key={item.title} className="surface p-5">
              <h3 className="font-semibold text-text-main">{item.title}</h3>
              <p className="mt-2 text-sm leading-7 text-text-soft">
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
