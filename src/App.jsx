import "./App.css";
import Navbar from "./components/Navbar.jsx";
import HeroSection from "./components/HeroSection.jsx";
import HeroProofSection from "./components/HeroProofSection.jsx";
import Experience from "./components/Experience.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-canvas text-text-main">
      <div className="page-shell">
        <Navbar />
        <main className="mx-auto flex w-full max-w-6xl flex-col gap-20 px-5 pb-24 pt-32 sm:px-6 lg:gap-24 lg:px-8">
          <HeroSection />
          <Experience />
          <Skills />
          <Projects />
          <HeroProofSection />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
