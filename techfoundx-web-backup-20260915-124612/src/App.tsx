import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import './App.css'

function Home() {
  return (
    <main>
      <section className="welcome-hero">
        <div className="hero-content">
          <div className="eyebrow">GLOBAL TECHNOLOGY MARKETPLACE</div>

          <h1>
            Discover. Connect.
            <span> Commercialize.</span>
          </h1>

          <p className="hero-text">
            TechFoundX connects technology buyers, sellers, licensors,
            innovators, and potential partners through a professional,
            structured technology marketplace.
          </p>

          <div className="hero-actions">
            <Link className="button button-gold" to="/explore">
              Explore Technologies
            </Link>

            <Link className="button button-outline" to="/login">
              Continue to Marketplace
            </Link>
          </div>
        </div>
      </section>

      <section className="welcome-section">
        <div className="section-heading">
          <div className="eyebrow">OUR SERVICES</div>
          <h2>Technology opportunities, from discovery to connection.</h2>
          <p>
            Whether you want to buy, sell, license, or find the right
            technology partner, TechFoundX provides a structured marketplace
            environment for technology-related opportunities.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <span className="service-number">01</span>
            <h3>Buy Technology</h3>
            <p>
              Discover technologies according to your technical,
              commercial, and industry requirements.
            </p>
          </article>

          <article className="service-card">
            <span className="service-number">02</span>
            <h3>Sell Technology</h3>
            <p>
              Present your technology through a structured submission and
              provide relevant technical and commercial information.
            </p>
          </article>

          <article className="service-card">
            <span className="service-number">03</span>
            <h3>License Technology</h3>
            <p>
              Explore technology licensing opportunities and connect with
              organizations seeking applicable solutions.
            </p>
          </article>

          <article className="service-card">
            <span className="service-number">04</span>
            <h3>Find a Partner</h3>
            <p>
              Identify potential technical, manufacturing, commercial,
              investment, research, and strategic partners.
            </p>
          </article>

          <article className="service-card">
            <span className="service-number">05</span>
            <h3>Technology Discovery</h3>
            <p>
              Search across technology categories and discover opportunities
              relevant to your objectives.
            </p>
          </article>

          <article className="service-card">
            <span className="service-number">06</span>
            <h3>Due Diligence & Information</h3>
            <p>
              Access structured technology information according to the
              marketplace access and requirements applicable to your account.
            </p>
          </article>
        </div>
      </section>

      <section className="purpose-section">
        <div className="section-heading">
          <div className="eyebrow">HOW CAN WE HELP?</div>
          <h2>Choose what you want to do.</h2>
          <p>
            You can select your purpose first. TechFoundX will then guide you
            through the appropriate marketplace requirements and information.
          </p>
        </div>

        <div className="purpose-grid">
          <Link to="/explore" className="purpose-card">
            <strong>Explore Technologies</strong>
            <span>View available technology opportunities →</span>
          </Link>

          <Link to="/seller" className="purpose-card">
            <strong>Sell My Technology</strong>
            <span>Submit your technology for marketplace consideration →</span>
          </Link>

          <Link to="/buyer" className="purpose-card">
            <strong>Buy Technology</strong>
            <span>Tell us what technology you are looking for →</span>
          </Link>

          <Link to="/partner" className="purpose-card">
            <strong>Find a Technology Partner</strong>
            <span>Define your partnership requirements →</span>
          </Link>
        </div>
      </section>

      <section className="access-section">
        <div>
          <div className="eyebrow">CONTROLLED MARKETPLACE ACCESS</div>
          <h2>Structured information. Purpose-driven access.</h2>
          <p>
            After registration, applicable Terms & Conditions and SOP
            requirements will guide your access to marketplace information,
            technology details, inquiries, and connections.
          </p>
        </div>

        <Link className="button button-gold" to="/login">
          Login / Create Account
        </Link>
      </section>
    </main>
  )
}

function Placeholder({ title }: { title: string }) {
  return (
    <main className="placeholder-page">
      <div className="eyebrow">TECH FOUNDX</div>
      <h1>{title}</h1>
      <p>This marketplace section will be developed in the next stage.</p>
      <Link className="button button-gold" to="/">
        ← Back to Welcome
      </Link>
    </main>
  )
}

function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header">
        <Link className="brand" to="/">
          <span className="brand-mark">TFX</span>
          <span>
            <strong>TECH FOUNDX</strong>
            <small>Global Technology Marketplace</small>
          </span>
        </Link>

        <nav className="site-nav">
          <Link to="/explore">Explore</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/seller">Sell Technology</Link>
          <Link to="/partner">Partnership</Link>
        </nav>

        <Link className="header-login" to="/login">
          Login
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/explore"
          element={<Placeholder title="Explore Technologies" />}
        />
        <Route
          path="/categories"
          element={<Placeholder title="Technology Categories" />}
        />
        <Route
          path="/seller"
          element={<Placeholder title="Sell Your Technology" />}
        />
        <Route
          path="/buyer"
          element={<Placeholder title="Technology Buyer" />}
        />
        <Route
          path="/partner"
          element={<Placeholder title="Find a Technology Partner" />}
        />
        <Route
          path="/login"
          element={<Placeholder title="Login / Create Account" />}
        />
      </Routes>

      <footer className="site-footer">
        <div>
          <strong>TECH FOUNDX</strong>
          <p>Global Technology Marketplace</p>
        </div>

        <span>
          © {new Date().getFullYear()} TechFoundX. All rights reserved.
        </span>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  )
}
