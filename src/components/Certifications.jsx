import './Certifications.css'

function Certifications() {
  const certifications = [
    {
      name: "Certified System Administrator (CSA)",
      issuer: "ServiceNow",
      description: "ServiceNow Certified System Administrator"
    },
    {
      name: "Certified Implementation Specialist – CSM",
      issuer: "ServiceNow",
      description: "ServiceNow Certified Implementation Specialist – Customer Service Management"
    },
    {
      name: "Micro Certification – Flow Designer",
      issuer: "ServiceNow",
      description: "ServiceNow Flow Designer Micro Certification"
    },
    {
      name: "Micro Certification – UI Builder",
      issuer: "ServiceNow",
      description: "ServiceNow UI Builder Micro Certification"
    },
    {
      name: "Micro Certification – Platform Analytics",
      issuer: "ServiceNow",
      description: "ServiceNow Platform Analytics Micro Certification"
    },
    {
      name: "Now Assist Executive Micro Certification",
      issuer: "ServiceNow",
      description: "ServiceNow Now Assist Executive Micro Certification"
    },
    {
      name: "Agentic AI Executive Micro Certification",
      issuer: "ServiceNow",
      description: "ServiceNow Agentic AI Executive Micro Certification"
    },
    {
      name: "Partner Sales Gen AI+ Accreditation",
      issuer: "ServiceNow",
      description: "ServiceNow Partner Sales Gen AI+ Accreditation"
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
