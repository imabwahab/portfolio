import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HeroProofSection from "./components/HeroProofSection.jsx";
import Experience from "./components/Experience.jsx";
import ExperienceDetailPage from "./components/ExperienceDetailPage.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import ProjectDetailPage from "./components/ProjectDetailPage.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import { getDetailRoute } from "./utils/routing.js";

function App() {
  const [selectedDetail, setSelectedDetail] = useState(() =>
    getDetailRoute(window.location.pathname),
  );

  useEffect(() => {
    const handleRouteChange = () => {
      setSelectedDetail(getDetailRoute(window.location.pathname));
      window.scrollTo({ top: 0, behavior: "auto" });
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#050914] text-slate-100">
      <div className="page-shell">
        <Navbar isProjectDetail={Boolean(selectedDetail)} />
        {selectedDetail ? (
          selectedDetail.type === "project" ? (
            <ProjectDetailPage project={selectedDetail.data} />
          ) : (
            <ExperienceDetailPage project={selectedDetail.data} />
          )
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
        <Footer isProjectDetail={Boolean(selectedDetail)} />
      </div>
    </div>
  );
}

export default App;
