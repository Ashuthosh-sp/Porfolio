import './Contact.css'

function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="container">
        <h2 className="section-title">Contact Me</h2>
        <div className="contact-content">
          <p className="contact-intro">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology!
          </p>
          <div className="contact-grid">
            <div className="contact-item">
              <span className="contact-icon">📧</span>
              <div className="contact-details">
                <h3>Email</h3>
              <a href="mailto:ashuthosh.s.p@gmail.com">ashuthosh.s.p@gmail.com</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📱</span>
              <div className="contact-details">
                <h3>Phone</h3>
                <a href="tel:+917899968433">+91 7899968433</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💼</span>
              <div className="contact-details">
                <h3>LinkedIn</h3>
                <a href="https://www.linkedin.com/in/ashuthosh-s-padmashali" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/ashuthosh-s-padmashali
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">🐦</span>
              <div className="contact-details">
                <h3>Twitter</h3>
                <a href="https://twitter.com/ashuthosh_sp" target="_blank" rel="noopener noreferrer">
                  @ashuthosh_sp
                </a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">💻</span>
              <div className="contact-details">
                <h3>GitHub</h3>
                <a href="https://github.com/Ashuthosh-sp" target="_blank" rel="noopener noreferrer">
                  github.com/Ashuthosh-sp
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; 2026 Ashuthosh S Padmashali. All rights reserved.</p>
      </footer>
    </section>
  )
}

export default Contact
