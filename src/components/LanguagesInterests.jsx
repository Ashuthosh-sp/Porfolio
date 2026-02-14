import './LanguagesInterests.css'

function LanguagesInterests() {
  const languages = ["English", "Hindi", "Kannada"]
  const interests = [
    "Software Development",
    "Cloud Technologies",
    "Machine Learning",
    "Problem Solving",
    "Continuous Learning",
    "Technology Innovation"
  ]

  return (
    <section className="languages-interests section" id="languages-interests">
      <div className="container">
        <div className="li-grid">
          <div className="li-card">
            <h2 className="li-title">Languages</h2>
            <ul className="li-list">
              {languages.map((lang, index) => (
                <li key={index} className="li-item">{lang}</li>
              ))}
            </ul>
          </div>
          <div className="li-card">
            <h2 className="li-title">Interests</h2>
            <ul className="li-list">
              {interests.map((interest, index) => (
                <li key={index} className="li-item">{interest}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LanguagesInterests
