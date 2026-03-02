import './App.css'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Achievements from './components/Achievements'
import Contact from './components/Contact'

function App() {
  return (
    <div className="portfolio">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Achievements />
      <Contact />
    </div>
  )
}

export default App
