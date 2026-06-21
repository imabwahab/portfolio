import { Link } from "react-scroll";
import { FiArrowRight, FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { FaReact, FaNodeJs } from "react-icons/fa6";
import AnimatedRole from "./AnimatedRole.jsx";
import { contactData } from "../data/contact.js";
import { profileData } from "../data/profile.js";

function HeroSection() {
  return (
    <section
      id="home"
      className="section-card relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
    >
      <div className="hero-backdrop" aria-hidden="true" />

      <div className="relative z-10 flex flex-col gap-7">
        <span className="inline-flex w-max items-center gap-2 rounded-full border border-accent/30 bg-[rgba(16,185,129,0.08)] px-3 py-1.5 text-xs font-medium text-accent-strong">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          {profileData.status}
        </span>

        <div>
          <h1 className="serif-display text-balance text-4xl font-semibold leading-[1.08] text-text-main sm:text-5xl lg:text-6xl">
            Building dependable
            <span className="block text-accent-strong">
              full-stack web products
            </span>
          </h1>
          <div className="mt-4 text-lg font-medium text-text-soft sm:text-xl">
            <AnimatedRole roles={profileData.roles} />
          </div>
        </div>

        <p className="max-w-xl text-balance text-base leading-7 text-text-soft">
          <span className="font-medium text-text-main">
            I&apos;m {profileData.name}
          </span>
          , a {profileData.title.toLowerCase()} focused on dependable product
          delivery. {profileData.intro}
        </p>

        <div className="flex items-center gap-2 text-sm text-text-soft">
          <FiMapPin className="text-text-faint" />
          {profileData.location}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            to={profileData.primaryCta.to}
            smooth
            duration={500}
            className="btn-primary cursor-pointer"
          >
            {profileData.primaryCta.label}
            <FiArrowRight />
          </Link>
          <Link
            to={profileData.secondaryCta.to}
            smooth
            duration={500}
            className="btn-secondary cursor-pointer"
          >
            {profileData.secondaryCta.label}
          </Link>

          <div className="ml-1 flex items-center gap-1">
            <a
              href={contactData.socials[0].href}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke text-text-soft transition hover:border-text-soft hover:text-text-main"
            >
              <FiGithub />
            </a>
            <a
              href={contactData.socials[1].href}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-stroke text-text-soft transition hover:border-text-soft hover:text-text-main"
            >
              <FiLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-sm">
        <div className="photo-card surface relative aspect-[4/5] overflow-hidden ring-1 ring-accent/15 shadow-[0_30px_80px_-40px_rgba(16,185,129,0.45)]">
          <img
            src={profileData.profileImage}
            alt={profileData.name}
            className="duotone-img h-full w-full object-cover object-top"
          />
          <div className="duotone-tint" aria-hidden="true" />
          <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-canvas via-canvas/70 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-5">
            <h2 className="text-base font-semibold text-text-main">
              {profileData.name}
            </h2>
            <p className="mt-0.5 text-sm text-accent-strong">
              {profileData.title}
            </p>
          </div>
        </div>

        <div className="absolute -right-3 top-8 hidden items-center gap-1.5 rounded-lg border border-stroke bg-panel px-2.5 py-1.5 text-xs font-medium text-text-main shadow-xl sm:flex">
          <FaReact className="text-accent-strong" />
          React
        </div>
        <div className="absolute -left-3 top-1/2 hidden -translate-y-1/2 items-center gap-1.5 rounded-lg border border-stroke bg-panel px-2.5 py-1.5 text-xs font-medium text-text-main shadow-xl sm:flex">
          <FaNodeJs className="text-accent-strong" />
          Node.js
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
