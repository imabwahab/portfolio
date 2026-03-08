import { projectData } from "../data/projects.js";
import { experienceData } from "../data/experience.js";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function getHomePath() {
  return `${basePath || ""}/`;
}

export function getProjectPath(slug) {
  return `${basePath || ""}/projects/${slug}`;
}

export function getExperienceProjectPath(slug) {
  return `${basePath || ""}/experience/${slug}`;
}

function getNormalizedPathname(pathname) {
  return pathname.startsWith(basePath)
    ? pathname.slice(basePath.length) || "/"
    : pathname;
}

export function getProjectFromPathname(pathname) {
  const normalizedPath = getNormalizedPathname(pathname);
  const match = normalizedPath.match(/^\/projects\/([^/]+)\/?$/);

  if (!match) {
    return null;
  }

  return projectData.find((project) => project.slug === match[1]) ?? null;
}

export function getExperienceProjectFromPathname(pathname) {
  const normalizedPath = getNormalizedPathname(pathname);
  const match = normalizedPath.match(/^\/experience\/([^/]+)\/?$/);

  if (!match) {
    return null;
  }

  for (const experience of experienceData) {
    const project = experience.projects.find((item) => item.slug === match[1]);

    if (project) {
      return {
        ...project,
        company: experience.company,
        period: experience.period,
      };
    }
  }

  return null;
}

export function getDetailRoute(pathname) {
  const normalizedPath = pathname.startsWith(basePath)
    ? pathname.slice(basePath.length) || "/"
    : pathname;
  const project = getProjectFromPathname(normalizedPath);

  if (project) {
    return { type: "project", data: project };
  }

  const experienceProject = getExperienceProjectFromPathname(normalizedPath);

  if (experienceProject) {
    return { type: "experience", data: experienceProject };
  }

  return null;
}

export function navigateToPath(path) {
  if (window.location.pathname === path) {
    window.scrollTo({ top: 0, behavior: "auto" });
    return;
  }

  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

export function handlePathNavigation(event, path, afterNavigate) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.altKey ||
    event.ctrlKey ||
    event.shiftKey
  ) {
    return;
  }

  event.preventDefault();
  afterNavigate?.();
  navigateToPath(path);
}
