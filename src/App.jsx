import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx';
import HeroSection from './components/HeroSection.jsx';
import Skills from './components/Skills.jsx';
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import Contact from './components/Contact.jsx';
import { heroData, navLinks } from './assets/data.js';



function App() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${!darkMode ? 'dark' : ''} `}>

      <div className='bg-gray-100 dark:bg-dark-midnight'>
        <Navbar
          navLinks={navLinks}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <div className='max-w-7xl mx-auto pt-16 lg:px-10 xl:px-15 bg-gray-100 dark:bg-dark-midnight transition-all duration-300'>
          <HeroSection
            greeting={heroData.greeting}
            name={heroData.name}
            roles={heroData.roles}
            description={heroData.description}
            profileImage={heroData.profileImage}
            cvText={heroData.cvText}
            projectsTarget={heroData.projectsTarget}
          />
          <Skills />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>

  )
}

export default App