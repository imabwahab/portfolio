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
    </div>
  )
}

export default App
