import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HeroProofSection from "./components/HeroProofSection.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import ProjectDetailPage from "./components/ProjectDetailPage.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { projectData } from "./data/projects.js";

function getProjectFromHash() {
  const match = window.location.hash.match(/^#\/projects\/([^/]+)$/);

  if (!match) {
    return null;
  }

  return projectData.find((project) => project.slug === match[1]) ?? null;
}

function App() {
  const [selectedProject, setSelectedProject] = useState(() => getProjectFromHash());

  useEffect(() => {
    const handleHashChange = () => {
      setSelectedProject(getProjectFromHash());
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("hashchange", handleHashChange);

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#050914] text-slate-100">
      <div className="page-shell">
        <Navbar isProjectDetail={Boolean(selectedProject)} />
        {selectedProject ? (
          <ProjectDetailPage project={selectedProject} />
        ) : (
          <main className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 pb-10 pt-24 sm:px-6 lg:px-8">
            <HeroSection />
            <Experience />
            <Skills />
            <Projects />
            <HeroProofSection />
            <Contact />
          </main>
        )}
        <Footer isProjectDetail={Boolean(selectedProject)} />
      </div>
    </div>
  );
}

export default App;


