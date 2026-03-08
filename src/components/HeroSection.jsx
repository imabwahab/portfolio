import { Link } from "react-scroll";
import {
  FiArrowRight,
  FiGithub,
  FiLinkedin,
  FiMapPin,
} from "react-icons/fi";
import AnimatedRole from "./AnimatedRole.jsx";
import { contactData } from "../data/contact.js";
import { profileData } from "../data/profile.js";

function HeroSection() {
  return (
    <section
      id="home"
      className="section-card grid-outline relative overflow-hidden rounded-[2rem] px-6 py-8 sm:px-8 lg:grid lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:gap-10 lg:px-12 lg:py-12"
    >
      <div className="ambient-line" />
      <div className="relative z-10 flex flex-col gap-8 lg:pr-4">
        <div className="flex flex-col gap-6">
          <span className="section-label">Full-stack portfolio</span>

          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.26em] text-accent-warm">
              {profileData.title}
            </p>
            <h1 className="serif-display text-balance text-5xl font-bold leading-none text-white sm:text-6xl lg:text-[4.8rem]">
              Building dependable
              <span className="mt-2 block text-accent-strong">
                full-stack web products
              </span>
            </h1>
            <div className="mt-5 text-xl font-medium text-accent-strong sm:text-2xl">
              <AnimatedRole roles={profileData.roles} />
            </div>
          </div>

          <p className="max-w-2xl text-balance text-base leading-8 text-text-soft sm:text-lg">
            <span className="font-semibold text-white">{profileData.name}</span>{" "}
            is a {profileData.title.toLowerCase()} focused on building modern,
            reliable web products. {profileData.intro}
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <div className="inline-flex items-center gap-2 rounded-full border border-stroke bg-panel-soft px-4 py-2 text-sm text-text-soft">
              <FiMapPin />
              {profileData.location}
            </div>
            <div className="inline-flex items-center rounded-full border border-accent/20 bg-accent/10 px-4 py-2 text-sm font-medium text-accent-strong">
              {profileData.kicker}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Link
            to={profileData.primaryCta.to}
            smooth
            duration={500}
            className="inline-flex cursor-pointer items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-accent-strong"
          >
            {profileData.primaryCta.label}
            <FiArrowRight />
          </Link>
          <Link
            to={profileData.secondaryCta.to}
            smooth
            duration={500}
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-stroke bg-panel-soft px-6 py-3 text-sm font-semibold text-white transition hover:bg-panel-strong"
          >
            {profileData.secondaryCta.label}
          </Link>
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href={contactData.socials[0].href}
            target="_blank"
            rel="noreferrer"
            className="chip transition hover:border-accent/30 hover:text-white"
          >
            <FiGithub className="mr-2" />
            GitHub
          </a>
          <a
            href={contactData.socials[1].href}
            target="_blank"
            rel="noreferrer"
            className="chip transition hover:border-accent/30 hover:text-white"
          >
            <FiLinkedin className="mr-2" />
            LinkedIn
          </a>
          {profileData.stacks.slice(0, 3).map((item) => (
            <span key={item} className="chip">
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-10 mt-10 lg:mt-0">
        <div className="relative mx-auto max-w-md overflow-hidden rounded-[2rem] border border-stroke bg-[radial-gradient(circle_at_top,rgba(113,212,199,0.12),transparent_38%),linear-gradient(180deg,#0e1729_0%,#0a1221_100%)] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.34)]">
          <div className="absolute inset-x-8 top-8 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
          <div className="rounded-full border border-accent/20 bg-accent/10 px-3 py-1 text-center text-xs font-semibold uppercase tracking-[0.2em] text-accent-strong">
            {profileData.title}
          </div>
          <div className="relative mt-6">
            <div className="absolute inset-[-14px] rounded-[2rem] bg-accent/10 blur-2xl" />
            <div className="relative mx-auto h-80 w-64 overflow-hidden rounded-[2rem] border border-stroke bg-panel-soft shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </div>
          <div className="mt-6 text-center">
            <h2 className="text-2xl font-semibold text-white">
              {profileData.name}
            </h2>
            <p className="mt-3 text-sm leading-7 text-text-soft">
              Modern web applications with clean UI and dependable backend
              execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
