import './Skills.css'

function Skills() {
  const skills = [
    { name: "C++", level: "Advanced" },
    { name: "C", level: "Advanced" },
    { name: "Java", level: "Advanced" },
    { name: "SQL", level: "Advanced" },
    { name: "Data Structures", level: "Advanced" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" },
    { name: "Python", level: "Intermediate" },
    { name: "PHP", level: "Intermediate" },
    { name: "C#", level: "Intermediate" },
    { name: "Android", level: "Intermediate" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Linux/Shell", level: "Intermediate" },
    { name: "ReactJS", level: "Beginner" },
    { name: "Time Management", level: "Soft Skill" },
    { name: "Fast Learner", level: "Soft Skill" }
  ]

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-name">{skill.name}</div>
              <div className="skill-level">{skill.level}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
