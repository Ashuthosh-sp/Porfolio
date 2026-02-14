import './App.css'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Certifications from './components/Certifications'
import Projects from './components/Projects'
import LanguagesInterests from './components/LanguagesInterests'
import Contact from './components/Contact'

function App() {
  return (
    <div className="portfolio">
      <Hero />
      <Experience />
      <Education />
      <Skills />
      <Certifications />
      <Projects />
      <LanguagesInterests />
      <Contact />
    </div>
  )
}

export default App
