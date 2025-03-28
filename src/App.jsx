import Contact from "./components/Contact/contact.jsx"
import Footer from "./components/Footer/Footer.jsx"
import Intro from "./components/Intro/Intro.jsx"
import Navbar from "./components/Navbar/Navbar"
import Project from "./components/Projects/Project.jsx"
import Skills from "./components/Skills/Skills.jsx"
import "./style.css"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Project />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
