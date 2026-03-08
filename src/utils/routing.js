import { projectData } from "../data/projects.js";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

export function getHomePath() {
  return `${basePath || ""}/`;
}

export function getProjectPath(slug) {
  return `${basePath || ""}/projects/${slug}`;
}

export function getProjectFromPathname(pathname) {
  const normalizedPath = pathname.startsWith(basePath)
    ? pathname.slice(basePath.length) || "/"
    : pathname;
  const match = normalizedPath.match(/^\/projects\/([^/]+)\/?$/);

  if (!match) {
    return null;
  }

  return projectData.find((project) => project.slug === match[1]) ?? null;
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
