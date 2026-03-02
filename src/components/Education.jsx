import './Education.css'

function Education() {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Manipal Institute of Technology",
      grade: "CGPA: 8.65"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sri Bhuvanendra College",
      grade: "Percentage: 90.65%"
    }
  ]

  return (
    <section className="education section" id="education">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="education-grid">
          {educationData.map((edu, index) => (
            <div key={index} className="education-card">
              <h3 className="degree">{edu.degree}</h3>
              <p className="institution">{edu.institution}</p>
              <p className="grade">{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
