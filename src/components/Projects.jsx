import './Projects.css'

function Projects() {
  const projects = [
    {
      name: "Hello Mechanic",
      description: "A mobile application connecting vehicle owners with mechanics for on-demand repair and maintenance services. Features real-time location tracking, service booking, and mechanic ratings.",
      technologies: ["Android", "Java", "Firebase"],
      link: "#"
    },
    {
      name: "Cats and Dogs Image Classification",
      description: "Deep learning project utilizing MobileNet V2 architecture for binary image classification. Achieved high accuracy in distinguishing between cat and dog images using transfer learning techniques.",
      technologies: ["Python", "TensorFlow", "MobileNet V2", "Machine Learning"],
      link: "#"
    },
    {
      name: "Sudoku - Android",
      description: "Interactive Sudoku puzzle game for Android devices featuring multiple difficulty levels, hint system, and auto-solve functionality. Implements efficient algorithms for puzzle generation and validation.",
      technologies: ["Android", "Java", "Algorithm Design"],
      link: "#"
    }
  ]

  return (
    <section className="projects section" id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-name">{project.name}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
              {project.link !== "#" && (
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                  View Project →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
