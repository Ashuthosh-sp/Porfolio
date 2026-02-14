import './Experience.css'

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-item">
          <h3 className="job-title">ServiceNow Developer</h3>
          <p className="company">Tata Consultancy Services (TCS)</p>
          <p className="duration">~2.5 years</p>
          <ul className="responsibilities">
            <li>Developed custom Service Portal widgets to enhance user experience and streamline service delivery</li>
            <li>Proficient in scripting using JavaScript and Glide APIs for business logic implementation</li>
            <li>Configured and maintained Flow Designer, Import Sets, and Transform Maps for data automation</li>
            <li>Implemented integrations with third-party systems using REST/SOAP APIs</li>
            <li>Designed and managed data models and CMDB for effective configuration management</li>
            <li>Optimized attachment handling and performance for improved system efficiency</li>
            <li>Conducted requirement analysis and translated business needs into technical solutions</li>
            <li>Troubleshot and resolved complex platform issues</li>
            <li>Ensured adherence to ServiceNow standards and best practices</li>
            <li>Collaborated with cross-functional teams to deliver high-quality solutions</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
