import { useMemo, useState } from 'react'
import { technologies } from '../../data/technologies'
import './Explore.css'

const categories = ['All', ...new Set(technologies.map((item) => item.category))]
const availability = ['All', 'For Sale', 'For License', 'Partnership']

function Explore() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [status, setStatus] = useState('All')

  const filteredTechnologies = useMemo(() => {
    const query = search.trim().toLowerCase()

    return technologies.filter((technology) => {
      const matchesSearch =
        !query ||
        technology.title.toLowerCase().includes(query) ||
        technology.description.toLowerCase().includes(query) ||
        technology.category.toLowerCase().includes(query)

      const matchesCategory =
        category === 'All' || technology.category === category

      const matchesStatus =
        status === 'All' || technology.availability === status

      return matchesSearch && matchesCategory && matchesStatus
    })
  }, [search, category, status])

  return (
    <main className="explore-page">
      <section className="explore-hero">
        <span className="eyebrow">TECHNOLOGY MARKETPLACE</span>
        <h1>Explore Technologies</h1>
        <p>
          Discover technologies, platforms and solutions available for
          acquisition, licensing or partnership.
        </p>

        <div className="explore-search">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Search technologies..."
            aria-label="Search technologies"
          />
        </div>
      </section>

      <section className="explore-content">
        <aside className="filters">
          <div className="filter-group">
            <h3>Category</h3>

            {categories.map((item) => (
              <button
                className={category === item ? 'filter-active' : ''}
                onClick={() => setCategory(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="filter-group">
            <h3>Availability</h3>

            {availability.map((item) => (
              <button
                className={status === item ? 'filter-active' : ''}
                onClick={() => setStatus(item)}
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
        </aside>

        <div className="results">
          <div className="results-header">
            <div>
              <span className="eyebrow">MARKETPLACE</span>
              <h2>Technology Listings</h2>
            </div>

            <span>{filteredTechnologies.length} technologies</span>
          </div>

          {filteredTechnologies.length === 0 ? (
            <div className="empty-state">
              <h3>No technologies found</h3>
              <p>Try changing your search or filters.</p>
            </div>
          ) : (
            <div className="technology-grid">
              {filteredTechnologies.map((technology) => (
                <article className="technology-card" key={technology.id}>
                  <div className="technology-card-top">
                    <span>{technology.category}</span>
                    <strong>{technology.availability}</strong>
                  </div>

                  <h3>{technology.title}</h3>

                  <p>{technology.description}</p>

                  <div className="technology-card-bottom">
                    <span>{technology.type}</span>
                    <a href={`/technology/${technology.id}`}>
                      View Technology →
                    </a>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}

export default Explore
