import './Education.css'

function Education() {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Manipal Institute of Technology, Manipal",
      duration: "October 2021 – Present",
      grade: "CGPA: 8.35"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "Sri Bhuvanendra College, Karkala",
      duration: "June 2018 – October 2021",
      grade: "Percentage: 90.65%"
    },
    {
      degree: "Pre-University (PUC)",
      institution: "Sri Bhuvanendra PU College, Karkala",
      duration: "June 2016 – May 2018",
      grade: "Percentage: 83.33%"
    },
    {
      degree: "10th Standard",
      institution: "Jaycees English Medium High School, Karkala",
      duration: "May 2015 – April 2016",
      grade: "Percentage: 90.4%"
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
              <p className="edu-duration">{edu.duration}</p>
              <p className="grade">{edu.grade}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education
