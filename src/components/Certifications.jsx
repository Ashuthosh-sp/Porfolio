import './Certifications.css'

function Certifications() {
  const certifications = [
    {
      name: "Certified System Administrator (CSA)",
      issuer: "ServiceNow",
      description: "ServiceNow System Administration certification"
    },
    {
      name: "Certified System Administrator Mainline (CSM)",
      issuer: "ServiceNow",
      description: "ServiceNow Mainline System Administration certification"
    },
    {
      name: "Advanced Certification in Full Stack Development",
      issuer: "ICT Academy",
      description: "Comprehensive full-stack development training covering modern web technologies"
    },
    {
      name: "Advanced Certification in Cloud Computing",
      issuer: "ICT Academy",
      description: "Cloud computing fundamentals and advanced concepts"
    },
    {
      name: "Salesforce Trailblazer",
      issuer: "Salesforce",
      description: "Active learning on Salesforce Trailhead platform",
      link: "https://www.salesforce.com/trailblazer/ashuthoshpadmashali"
    }
  ]

  return (
    <section className="certifications section" id="certifications">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert, index) => (
            <div key={index} className="cert-card">
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-description">{cert.description}</p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="cert-link">
                  View Profile →
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
