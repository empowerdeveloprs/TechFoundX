import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './MarketplaceReview.css'

type SubmissionAnswers = Record<string, string | boolean>

export default function MarketplaceReview() {
  const [submission, setSubmission] = useState<SubmissionAnswers | null>(null)

  useEffect(() => {
    const stored = sessionStorage.getItem('techfoundx:technology-submission')

    if (!stored) {
      return
    }

    try {
      setSubmission(JSON.parse(stored) as SubmissionAnswers)
    } catch {
      sessionStorage.removeItem('techfoundx:technology-submission')
    }
  }, [])

  const technologyTitle =
    typeof submission?.technologyTitle === 'string'
      ? submission.technologyTitle
      : 'Technology submission'

  return (
    <main className="marketplace-review-page">
      <section className="marketplace-review-card">
        <span className="eyebrow">MARKETPLACE REVIEW</span>

        <h1>Technology Submission Review</h1>

        <p>
          Your technology information has been completed and is ready for the
          TechFoundX marketplace review process.
        </p>

        <div className="marketplace-review-status">
          <strong>Current status: Review Required</strong>
          <p>
            This is currently a frontend workflow. No live submission,
            verification, approval or publication has been completed.
          </p>
        </div>

        <h2>Submitted Technology</h2>

        <p>{technologyTitle}</p>

        <h2>What happens next</h2>

        <ul>
          <li>Submission completeness can be reviewed.</li>
          <li>Ownership and authority evidence may be requested.</li>
          <li>
            Technical or security evidence may be requested where applicable.
          </li>
          <li>Commercial and marketplace suitability can be reviewed.</li>
          <li>A marketplace decision can be recorded after the required review.</li>
        </ul>

        <div className="marketplace-review-actions">
          <Link className="marketplace-review-back" to="/technology-submission">
            Back to Technology Submission
          </Link>
        </div>
      </section>
    </main>
  )
}
