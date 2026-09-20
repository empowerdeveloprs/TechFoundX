import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, useSearchParams } from 'react-router-dom'
import Explore from './pages/Explore/Explore'
import TechnologyDetails from './pages/TechnologyDetails/TechnologyDetails'
import Buyer from './pages/Buyer/Buyer'
import './App.css'
import {
  marketplaceRequirements,
  purposeLabels,
  type MarketplacePurpose,
} from './data/marketplaceRequirements'

function Home() {
  return (
    <main className="premium-home">
      <section className="premium-welcome">
        <div className="premium-content">

          <div className="premium-brand" aria-label="Tech FounDX">
            <span className="premium-tech">Tech</span>
            <span className="premium-found"> FounD</span>
            <span className="premium-x">X</span>
          </div>

          <div className="premium-eyebrow">
            GLOBAL TECHNOLOGY MARKETPLACE
          </div>

          <h1>Welcome to the Global Marketplace for Technology Opportunities</h1>

          <p className="premium-intro">
            Tech FounDX is a professional global Technology Marketplace
            designed to connect different types of technologies, products,
            machinery, systems, solutions, and technology opportunities with
            individuals, businesses, industries, investors, buyers,
            technology owners, and potential partners interested in their
            discovery, acquisition, sale, licensing, use, development,
            or commercial collaboration.
          </p>

          <p className="premium-description">
            The platform is not limited to Software or Information Technology.
            It is designed to provide a structured marketplace environment for
            Physical Technology, Industrial Technology, Mechanical Technology,
            Engineering Solutions, Machinery, Equipment, Hardware, Digital
            Technology, and other commercially relevant technology opportunities.
          </p>

          <section className="welcome-section">
            <h2>WHAT IS TECH FOUNDX?</h2>

            <p>
              Around the world, countless technologies, machines, engineering
              solutions, software systems, industrial processes, and innovative
              products exist. However, finding the right technology and
              connecting it with the right buyer, business, industry, or
              partner is not always easy.
            </p>

            <p>
              Tech FounDX addresses this need by providing a structured global
              marketplace where technology opportunities can be discovered,
              presented, and progressed with relevant parties.
            </p>
          </section>

          <section className="welcome-section">
            <h2>A STRUCTURED TECHNOLOGY MARKETPLACE</h2>

            <p>
              Tech FounDX is designed to go beyond simply displaying technology
              listings. Relevant technical, industrial, commercial, ownership,
              licensing, and partnership information can be organized through
              an appropriate marketplace process.
            </p>

            <p>
              Through the marketplace, technology buyers, sellers, owners,
              licensees, and potential partners can proceed according to their
              respective requirements and opportunities.
            </p>
          </section>

          <div className="premium-actions">
            <Link
              className="button button-gold"
              to="/login?mode=register"
            >
              Create Account
            </Link>

            <Link
              className="button button-outline"
              to="/login"
            >
              Login
            </Link>
          </div>

        </div>
      </section>
    </main>
  )
}

function LoginPage() {
  const [searchParams] = useSearchParams()
  const purpose = searchParams.get('purpose') || 'explore'
  const mode = searchParams.get('mode') === 'register' ? 'register' : 'login'

  const [activeMode, setActiveMode] = useState(mode)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  return (
    <main className="auth-page">
      <div className="auth-card auth-card-professional">

        <div className="auth-brand">
          <span className="auth-brand-tech">Tech</span>
          <span className="auth-brand-found"> FounD</span>
          <span className="auth-brand-x">X</span>
        </div>

        <div className="eyebrow">GLOBAL TECHNOLOGY MARKETPLACE</div>

        {activeMode === 'register' ? (
          <>
            <h1>Create Your Account</h1>

            <p className="auth-intro">
              Create your Tech FounDX account to begin the marketplace access
              process for buying, selling, licensing, discovering, or pursuing
              technology partnerships.
            </p>

            <div className="auth-purpose">
              <span>Selected Interest</span>
              <strong>
                {purpose === 'sell'
                  ? 'Sell Technology'
                  : purpose === 'partner'
                    ? 'Technology Partnership'
                    : 'Explore Technology'}
              </strong>
            </div>

            <form className="auth-form registration-form">

              <div className="form-section-title">
                ACCOUNT INFORMATION
              </div>

              <div className="form-grid">
                <label>
                  Full Name
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                  />
                </label>

                <label>
                  Country / Region
                  <input
                    type="text"
                    placeholder="Enter your country or region"
                    autoComplete="country-name"
                    required
                  />
                </label>
              </div>

              <label>
                Email Address
                <input
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              <div className="form-grid">
                <label>
                  Password
                  <div className="password-field">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Create a password"
                      autoComplete="new-password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </label>

                <label>
                  Confirm Password
                  <div className="password-field">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm your password"
                      autoComplete="new-password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    >
                      {showConfirmPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </label>
              </div>

              <div className="form-section-title">
                MARKETPLACE INTEREST
              </div>

              <label>
                I want to
                <select defaultValue={purpose}>
                  <option value="explore">Explore Technologies</option>
                  <option value="buy">Buy Technology</option>
                  <option value="sell">Sell Technology</option>
                  <option value="license">License Technology</option>
                  <option value="partner">Find a Technology Partner</option>
                </select>
              </label>

              <div className="auth-consent">
                <label className="check-row">
                  <input type="checkbox" required />
                  <span>
                    I agree to the applicable Terms &amp; Conditions and
                    acknowledge the Tech FounDX marketplace process.
                  </span>
                </label>

                <label className="check-row">
                  <input type="checkbox" required />
                  <span>
                    I acknowledge the Privacy Policy and understand that
                    marketplace access may require additional information.
                  </span>
                </label>
              </div>

              <Link
                className="button button-gold auth-submit"
                to={`/tc-sop?purpose=${purpose}`}
              >
                Create Account
              </Link>
            </form>

            <div className="auth-switch">
              Already have an account?
              <button
                type="button"
                onClick={() => setActiveMode('login')}
              >
                Login
              </button>
            </div>
          </>
        ) : (
          <>
            <h1>Welcome Back</h1>

            <p className="auth-intro">
              Sign in to continue your Tech FounDX marketplace journey.
              Applicable requirements will be presented before controlled
              marketplace access.
            </p>

            <div className="auth-purpose">
              <span>Selected Interest</span>
              <strong>
                {purpose === 'sell'
                  ? 'Sell Technology'
                  : purpose === 'partner'
                    ? 'Technology Partnership'
                    : 'Explore Technology'}
              </strong>
            </div>

            <form className="auth-form">

              <label>
                Email Address
                <input
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </label>

              <label>
                Password
                <div className="password-field">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
              </label>

              <div className="form-row">
                <label className="check-row">
                  <input type="checkbox" />
                  <span>Remember me</span>
                </label>

                <a href="#forgot-password">Forgot password?</a>
              </div>

              <Link
                className="button button-gold auth-submit"
                to={`/tc-sop?purpose=${purpose}`}
              >
                Login &amp; Continue
              </Link>
            </form>

            <div className="auth-switch">
              Don't have an account?
              <button
                type="button"
                onClick={() => setActiveMode('register')}
              >
                Create Account
              </button>
            </div>
          </>
        )}

        <div className="auth-note">
          <strong>Controlled Marketplace Access</strong>
          <span>
            Depending on your selected purpose, Tech FounDX may require
            applicable Terms &amp; Conditions, SOP acknowledgement, identity
            information, and additional marketplace requirements before
            access to certain information or communication features.
          </span>
        </div>

      </div>
    </main>
  )
}

function TCSOPPage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const purpose = searchParams.get('purpose') || 'explore'

  const [accepted, setAccepted] = useState(false)
  const [error, setError] = useState('')

  const handleContinue = () => {
    if (!accepted) {
      setError(
        'Please confirm that you have reviewed the required marketplace documents before continuing.'
      )
      return
    }

    setError('')
    navigate(`/purpose?purpose=${encodeURIComponent(purpose)}`)
  }

  return (
    <main className="tc-page">
      <div className="tc-header">
        <div className="eyebrow">MARKETPLACE ACCESS REQUIREMENTS</div>

        <h1>Terms, Conditions & Marketplace SOP</h1>

        <p>
          Please review the required documents that govern participation in
          the TechFoundX technology marketplace before continuing.
        </p>
      </div>

      <div className="tc-grid">
        <article className="tc-card required">
          <span className="tc-status">REQUIRED</span>

          <h2>Terms & Conditions</h2>

          <p>
            Terms governing marketplace participation, accounts, listings,
            communications, licensing, transactions, intellectual property,
            security, disputes, and participant responsibilities.
          </p>

          <a
            href="/legal/terms.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review Terms & Conditions →
          </a>
        </article>

        <article className="tc-card required">
          <span className="tc-status">REQUIRED</span>

          <h2>Marketplace SOP</h2>

          <p>
            Operational procedures governing registration, qualification,
            verification, listing review, due diligence, controlled access,
            communication, transactions, security, and audit records.
          </p>

          <a
            href="/legal/TechFoundX-MASTER-SOP-1.md"
            target="_blank"
            rel="noopener noreferrer"
          >
            Review Marketplace SOP →
          </a>
        </article>

        <article className="tc-card">
          <span className="tc-status optional">INFORMATION</span>

          <h2>Privacy & Confidentiality</h2>

          <p>
            Account, technology, business, and communication information may
            be subject to applicable privacy, confidentiality, security,
            retention, and controlled-access requirements.
          </p>

          <span className="document-coming">
            Detailed privacy documentation will be added before production
            information processing is represented as live.
          </span>
        </article>
      </div>

      <div className="tc-consent">
        <label className="consent-row">
          <input
            type="checkbox"
            checked={accepted}
            onChange={(event) => {
              setAccepted(event.target.checked)
              if (event.target.checked) setError('')
            }}
          />

          <span>
            I confirm that I have reviewed the required TechFoundX marketplace
            documents and understand that applicable requirements must be
            completed before controlled marketplace access is available.
          </span>
        </label>

        {error && (
          <p className="tc-error" role="alert">
            {error}
          </p>
        )}

        <button
          className="button button-gold"
          type="button"
          onClick={handleContinue}
        >
          Continue to Purpose Selection
        </button>
      </div>
    </main>
  )
}

function PurposePage() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()

  const initialPurpose = searchParams.get('purpose') || 'explore'

  const purposeOptions = [
    { value: 'buy', label: 'Buy Technology' },
    { value: 'sell', label: 'Sell Technology' },
    { value: 'license', label: 'License Technology' },
    { value: 'partner', label: 'Find a Technology Partner' },
    { value: 'explore', label: 'Explore Technologies' },
    { value: 'commercialize', label: 'Commercialize / Collaborate' },
  ]

  const [selectedPurposes, setSelectedPurposes] = useState<string[]>(
    purposeOptions.some((item) => item.value === initialPurpose)
      ? [initialPurpose]
      : []
  )

  const [error, setError] = useState('')

  const handlePurposeChange = (value: string) => {
    setSelectedPurposes((current) => {
      if (current.includes(value)) {
        return current.filter((item) => item !== value)
      }

      return [...current, value]
    })

    setError('')
  }

  const handleContinue = () => {
    if (selectedPurposes.length === 0) {
      setError('Please select at least one marketplace purpose before continuing.')
      return
    }

    const purposeQuery = selectedPurposes.join(',')

    navigate(`/requirements?purpose=${encodeURIComponent(purposeQuery)}`)
  }

  return (
    <main className="purpose-page">
      <div className="section-heading">
        <div className="eyebrow">YOUR MARKETPLACE PURPOSE</div>

        <h1>What are you looking to do?</h1>

        <p>
          Select one or more purposes. TechFoundX will use your selections to
          determine the applicable marketplace requirements and guide you
          through the appropriate access process.
        </p>
      </div>

      <div className="purpose-selection">
        {purposeOptions.map((purpose) => (
          <label className="purpose-option" key={purpose.value}>
            <input
              type="checkbox"
              checked={selectedPurposes.includes(purpose.value)}
              onChange={() => handlePurposeChange(purpose.value)}
            />

            <span>{purpose.label}</span>
          </label>
        ))}
      </div>

      {error && (
        <p className="purpose-error" role="alert">
          {error}
        </p>
      )}

      <button
        className="button button-gold"
        type="button"
        onClick={handleContinue}
      >
        Continue to Requirements
      </button>
    </main>
  )
}

function Placeholder({ title }: { title: string }) {
  return (
    <main className="placeholder-page">
      <section className="placeholder-card">
        <span className="eyebrow">TECH FOUNDX</span>
        <h1>{title}</h1>
        <p>
          This marketplace area is being prepared as part of the controlled
          TechFoundX marketplace flow.
        </p>
        <Link className="button button-gold" to="/">
          Back to Welcome
        </Link>
      </section>
    </main>
  )
}


function RequirementsPage() {
  const [searchParams] = useSearchParams()

  const rawPurpose = searchParams.get('purpose') || 'explore'

  const purposes = rawPurpose
    .split(',')
    .map((value) => value.trim())
    .filter((value): value is MarketplacePurpose =>
      Object.prototype.hasOwnProperty.call(purposeLabels, value)
    )

  const selectedPurposes =
    purposes.length > 0 ? purposes : (['explore'] as MarketplacePurpose[])

  const applicableRequirements = marketplaceRequirements.filter((requirement) =>
    requirement.appliesTo.some((purpose) => selectedPurposes.includes(purpose))
  )

  const requiredCount = applicableRequirements.filter(
    (item) => item.status === 'Required'
  ).length

  const conditionalCount = applicableRequirements.filter(
    (item) => item.status === 'Conditional'
  ).length

  const systemCount = applicableRequirements.filter(
    (item) => item.status === 'System Generated'
  ).length

  return (
    <main className="requirements-page">
      <section className="requirements-header">
        <span className="eyebrow">CONTROLLED MARKETPLACE ACCESS</span>

        <h1>Complete Your Requirements</h1>

        <p>
          Tech FounDX collects information progressively. Basic information is
          requested first, while business, financial, technology and verification
          information appears only when it becomes relevant to your selected
          marketplace purpose.
        </p>
      </section>

      <section className="purpose-summary">
        <span className="purpose-summary-label">SELECTED PURPOSE</span>

        <div className="purpose-summary-list">
          {selectedPurposes.map((purpose) => (
            <span className="purpose-chip" key={purpose}>
              {purposeLabels[purpose]}
            </span>
          ))}
        </div>
      </section>

      <section className="requirements-card">
        <div className="requirements-intro">
          <span className="eyebrow">PROGRESSIVE INFORMATION MODEL</span>

          <h2>Your Marketplace Information</h2>

          <p>
            Your personal and business information can be reused for future
            marketplace purposes. You will not be asked to complete unrelated
            sections simply because they exist.
          </p>
        </div>

        <div className="requirements-summary">
          <div>
            <strong>{requiredCount}</strong>
            <span>Core requirements</span>
          </div>

          <div>
            <strong>{conditionalCount}</strong>
            <span>Conditional requirements</span>
          </div>

          <div>
            <strong>{systemCount}</strong>
            <span>System records</span>
          </div>
        </div>

        <div className="requirements-list">
          {applicableRequirements.map((item) => (
            <article className="requirement-item" key={item.id}>
              <div className="requirement-content">
                <span
                  className={`requirement-status requirement-status-${item.status
                    .toLowerCase()
                    .replace(/\s+/g, '-')}`}
                >
                  {item.status}
                </span>

                <h3>{item.title}</h3>

                <p>{item.description}</p>
              </div>

              <span className="requirement-state">
                {item.status === 'System Generated'
                  ? 'Automatic'
                  : item.status === 'Required'
                    ? 'To Complete'
                    : 'When Applicable'}
              </span>
            </article>
          ))}
        </div>

        <section className="information-principles">
          <h3>Information & Confidentiality Principles</h3>

          <ul>
            <li>
              Information is collected according to your selected purpose and
              the requirements applicable to the activity.
            </li>
            <li>
              Information already provided may be reused for another Tech
              FounDX purpose instead of being requested again.
            </li>
            <li>
              Sensitive identity, financial, ownership and verification
              information is requested only where the applicable process
              requires it.
            </li>
            <li>
              Participant information is not intended for general disclosure
              to unrelated third parties.
            </li>
            <li>
              Where an activity progresses toward a transaction, applicable
              verification or due-diligence information may be shared with
              relevant parties only as required for that process, subject to
              applicable terms, permissions and legal requirements.
            </li>
          </ul>
        </section>

        <div className="requirements-notice">
          <strong>Frontend workflow status</strong>

          <p>
            This page defines the intended progressive marketplace workflow.
            Account persistence, document verification, financial verification
            and approval decisions are not currently connected to a live
            backend and must not be treated as completed until implemented
            and verified.
          </p>
        </div>

        <div className="requirements-actions">
          {selectedPurposes.includes('buy') ? (
            <Link
              className="button button-gold"
              to={`/buyer?purpose=${encodeURIComponent(selectedPurposes.join(','))}`}
            >
              Continue to Buyer Requirements
            </Link>
          ) : selectedPurposes.includes('explore') ? (
            <Link className="button button-gold" to="/explore">
              Continue to Marketplace
            </Link>
          ) : (
            <Link className="button button-gold" to="/explore">
              Continue
            </Link>
          )}
        </div>
      </section>
    </main>
  )
}

function Layout() {
  return (
    <div className="app-shell">
      <header className="site-header luxury-header">
        <div className="luxury-header-overlay" />

        <Link className="brand luxury-brand" to="/" aria-label="Tech FounDX home">
          <img
            className="luxury-logo"
            src="/assets/branding/TDXLogo.png"
            alt="Tech FounDX — Global Technology Marketplace"
          />
        </Link>

        <nav className="site-nav luxury-nav" aria-label="Primary navigation">
          <Link to="/login?purpose=explore">Explore</Link>
          <Link to="/login?purpose=explore">Categories</Link>
          <Link to="/login?purpose=sell">Sell Technology</Link>
          <Link to="/login?purpose=partner">Partnership</Link>
        </nav>

        <Link className="header-login luxury-login" to="/login">
          Login
        </Link>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/categories"
          element={<Placeholder title="Technology Categories" />}
        />
        <Route
          path="/seller"
          element={<Placeholder title="Sell Your Technology" />}
        />
        <Route
          path="/partner"
          element={<Placeholder title="Find a Technology Partner" />}
        />
        <Route
          path="/technology/:id"
          element={<TechnologyDetails />}
        />
        <Route path="/requirements" element={<RequirementsPage />} />
<Route path="/buyer" element={<Buyer />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/tc-sop" element={<TCSOPPage />} />
        <Route path="/purpose" element={<PurposePage />} />
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
