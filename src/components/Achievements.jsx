import './Achievements.css'

function Achievements() {
  const achievements = [
    {
      title: "Best Team Award",
      description: "Enterprise project contribution"
    },
    {
      title: "Spot Award",
      description: "Custom attachment solution contribution"
    },
    {
      title: "Star of the Month",
      description: "February 2026"
    }
  ]

  return (
    <section className="achievements section" id="achievements">
      <div className="container">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div key={index} className="achievement-card">
              <span className="achievement-icon">🏆</span>
              <h3 className="achievement-title">{item.title}</h3>
              <p className="achievement-description">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
