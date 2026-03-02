import './Skills.css'

function Skills() {
  const skillCategories = [
    {
      category: "ServiceNow",
      skills: ["CSM", "ITSM", "Flow Designer", "UI Builder", "Workspace", "IntegrationHub"]
    },
    {
      category: "Integrations",
      skills: ["REST APIs", "Scripted REST APIs", "SOAP", "JDBC", "SFTP", "Amazon S3", "Amazon SQS"]
    },
    {
      category: "Development",
      skills: ["JavaScript", "Glide API", "Script Includes", "Business Rules", "Client Scripts"]
    },
    {
      category: "Data",
      skills: ["Import Sets", "Transform Maps", "JSON Processing"]
    },
    {
      category: "Security",
      skills: ["ACL", "Role-Based Access Control"]
    },
    {
      category: "Tools",
      skills: ["Platform Analytics", "Now Assist", "Logging", "Monitoring"]
    }
  ]

  return (
    <section className="skills section" id="skills">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-categories">
          {skillCategories.map((cat, index) => (
            <div key={index} className="skill-category-card">
              <h3 className="skill-category-name">{cat.category}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
