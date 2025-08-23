import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar.jsx'
import HeroSection from './components/HeroSection.jsx';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={`${darkMode ? 'dark' : ''} `}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className=' pt-16 lg:px-10 bg-gray-100 dark:bg-dark-midnight transition-all duration-300'>
        <HeroSection />

      </div>
    </div>

  )
}

export default App