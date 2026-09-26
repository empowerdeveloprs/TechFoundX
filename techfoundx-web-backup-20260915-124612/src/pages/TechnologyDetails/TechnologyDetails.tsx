import { Link, useParams } from 'react-router-dom'
import { technologies } from '../../data/technologies'
import './TechnologyDetails.css'

function TechnologyDetails() {
  const { id } = useParams()
  const technology = technologies.find((item) => item.id === id)

  if (!technology) {
    return (
      <main className="technology-not-found">
        <span className="eyebrow">TECHNOLOGY MARKETPLACE</span>
        <h1>Technology not found</h1>
        <p>The technology listing you requested does not exist.</p>
        <Link to="/explore">← Back to Explore</Link>
      </main>
    )
  }

  return (
    <main className="technology-details">
      <section className="technology-detail-hero">
        <Link className="back-link" to="/explore">
          ← Back to Technologies
        </Link>

        <div className="detail-labels">
          <span>{technology.category}</span>
          <span>{technology.type}</span>
          <span>{technology.availability}</span>
        </div>

        <h1>{technology.title}</h1>

        <p className="detail-intro">
          {technology.description}
        </p>
      </section>

      <section className="technology-detail-content">
        <div className="detail-main">
          <section className="detail-section">
            <span className="eyebrow">OVERVIEW</span>
            <h2>Technology Overview</h2>
            <p>
              This marketplace listing provides an initial overview of the
              technology opportunity. Detailed commercial and technical
              information can be made available through the appropriate
              marketplace process.
            </p>
          </section>

          <section className="detail-section">
            <span className="eyebrow">OPPORTUNITY</span>
            <h2>Commercial Opportunity</h2>
            <p>
              Explore the available acquisition, licensing or partnership path
              for this technology through TechFoundX.
            </p>
          </section>

          <section className="detail-section">
            <span className="eyebrow">NEXT STEP</span>
            <h2>Interested in this technology?</h2>
            <p>
              Start an inquiry to discuss availability and the appropriate
              commercial pathway.
            </p>

            <div className="detail-actions">
              <button className="button button-primary">
                Start Inquiry
              </button>

              <Link className="button button-secondary" to="/explore">
                Explore More
              </Link>
            </div>
          </section>
        </div>

        <aside className="technology-sidebar">
          <div className="sidebar-card">
            <span className="eyebrow">LISTING</span>

            <div className="sidebar-row">
              <span>Category</span>
              <strong>{technology.category}</strong>
            </div>

            <div className="sidebar-row">
              <span>Technology Type</span>
              <strong>{technology.type}</strong>
            </div>

            <div className="sidebar-row">
              <span>Availability</span>
              <strong>{technology.availability}</strong>
            </div>

            <button className="button button-primary sidebar-button">
              Contact Technology Owner
            </button>
          </div>
        </aside>
      </section>
    </main>
  )
}

export default TechnologyDetails
