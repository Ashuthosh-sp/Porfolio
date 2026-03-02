import './Experience.css'

function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-item">
          <h3 className="job-title">Senior ServiceNow Developer</h3>
          <p className="company">Tata Consultancy Services, Mumbai</p>
          <p className="duration">Aug 2023 – Present</p>
          <ul className="responsibilities">
            <li>Developed and customized ServiceNow Customer Service Management (CSM) solutions for global enterprise client.</li>
            <li>Designed and implemented enterprise integrations using REST APIs, Scripted REST APIs, JDBC, SFTP, and AWS services.</li>
            <li>Built Flow Designer workflows and reusable Script Includes improving scalability and maintainability.</li>
            <li>Customized Service Portal widgets and enhanced Workspace experiences using UI Builder.</li>
            <li>Implemented enterprise attachment solution reducing ServiceNow storage dependency by 50%.</li>
            <li>Delivered Proof-of-Concept solutions aligned with business requirements.</li>
            <li>Resolved production issues and improved platform reliability and performance.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Experience
