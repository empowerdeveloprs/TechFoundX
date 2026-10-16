import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { sellerQuestions, sellerSections } from '../../data/sellerProfileRequirements'
import {
  purposeLabels,
  type MarketplacePurpose,
} from '../../data/marketplaceRequirements'
import './Seller.css'

type Answers = Record<string, string | boolean>

function Seller() {
  const [searchParams] = useSearchParams()
  const purpose = searchParams.get('purpose') || 'sell'

  const selectedPurposes = purpose
    .split(',')
    .map((value) => value.trim())
    .filter((value): value is MarketplacePurpose =>
      Object.prototype.hasOwnProperty.call(purposeLabels, value)
    )

  const [answers, setAnswers] = useState<Answers>({})
  const [submitted, setSubmitted] = useState(false)
  const [missingFields, setMissingFields] = useState<string[]>([])

  const visibleQuestions = useMemo(() => {
    return sellerQuestions.filter((question) => {
      if (!question.condition) return true

      const value = answers[question.condition.field]

      return question.condition.values.includes(String(value))
    })
  }, [answers])

  const completedRequired = visibleQuestions.filter((question) => {
    if (!question.required) return false

    const value = answers[question.id]

    return value !== undefined && value !== '' && value !== false
  }).length

  const totalRequired = visibleQuestions.filter(
    (question) => question.required
  ).length

  const progress =
    totalRequired === 0
      ? 0
      : Math.round((completedRequired / totalRequired) * 100)

  const updateAnswer = (id: string, value: string | boolean) => {
    setAnswers((current) => {
      const next = {
        ...current,
        [id]: value,
      }

      sellerQuestions.forEach((question) => {
        if (!question.condition || question.condition.field !== id) {
          return
        }

        if (!question.condition.values.includes(String(value))) {
          delete next[question.id]
        }
      })

      return next
    })

    setSubmitted(false)
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const missing = visibleQuestions
      .filter((question) => {
        if (!question.required) return false

        const value = answers[question.id]

        return value === undefined || value === '' || value === false
      })
      .map((question) => question.id)

    if (missing.length > 0) {
      setMissingFields(missing)
      setSubmitted(false)
      return
    }

    setMissingFields([])
    setSubmitted(true)
  }

  return (
    <main className="seller-page">
      <section className="seller-header">
        <span className="eyebrow">SELLER ONBOARDING</span>

        <h1>Tell Us About You as a Technology Seller</h1>

        <div className="seller-purpose">
          <span>Marketplace purpose:</span>{' '}
          <strong>
            {(selectedPurposes.length > 0
              ? selectedPurposes
              : (['buy'] as MarketplacePurpose[])
            )
              .map((item) => purposeLabels[item])
              .join(' • ')}
          </strong>
        </div>

        <p>
          TechFoundX uses progressive requirements. Your seller profile captures
          participant information once, while technology-specific information
          is collected separately when you submit a technology.
        </p>

        <div className="seller-progress">
          <div className="seller-progress-top">
            <span>Required information</span>
            <strong>{progress}%</strong>
          </div>

          <div className="seller-progress-track">
            <div
              className="seller-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      <form className="seller-form" onSubmit={handleSubmit}>
        {sellerSections.map((section) => {
          const sectionQuestions = visibleQuestions.filter(
            (question) => question.section === section.id
          )

          if (sectionQuestions.length === 0) return null

          return (
            <section className="seller-section" key={section.id}>
              <div className="seller-section-heading">
                <span className="seller-section-number">
                  {section.title.split(' — ')[0]}
                </span>

                <div>
                  <h2>{section.title.split(' — ')[1]}</h2>
                  <p>{section.description}</p>
                </div>
              </div>

              <div className="seller-fields">
                {sectionQuestions.map((question) => {
                  const value = answers[question.id]

                  return (
                    <label className="seller-field" key={question.id}>
                      <span className="seller-label">
                        {question.label}
                        {question.required && (
                          <span className="seller-required"> *</span>
                        )}
                      </span>

                      {question.description && (
                        <span className="seller-description">
                          {question.description}
                        </span>
                      )}

                      {question.type === 'textarea' && (
                        <textarea
                          value={String(value ?? '')}
                          required={question.required}
                          rows={5}
                          onChange={(event) =>
                            updateAnswer(question.id, event.target.value)
                          }
                        />
                      )}

                      {question.type === 'select' && (
                        <select
                          value={String(value ?? '')}
                          required={question.required}
                          onChange={(event) =>
                            updateAnswer(question.id, event.target.value)
                          }
                        >
                          <option value="">Select an option</option>

                          {question.options?.map((option) => (
                            <option value={option} key={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}

                      {(question.type === 'text' ||
                        question.type === 'email' ||
                        question.type === 'tel') && (
                        <input
                          type={question.type}
                          value={String(value ?? '')}
                          required={question.required}
                          onChange={(event) =>
                            updateAnswer(question.id, event.target.value)
                          }
                        />
                      )}

                      {question.type === 'checkbox' && (
                        <span className="seller-checkbox">
                          <input
                            type="checkbox"
                            checked={Boolean(value)}
                            required={question.required}
                            onChange={(event) =>
                              updateAnswer(question.id, event.target.checked)
                            }
                          />
                        </span>
                      )}
                    </label>
                  )
                })}
              </div>
            </section>
          )
        })}

        {missingFields.length > 0 && (
          <div className="seller-error" role="alert">
            <strong>Please complete the required fields.</strong>
            <p>
              {missingFields.length} required field
              {missingFields.length === 1 ? '' : 's'} still need
              {missingFields.length === 1 ? 's' : ''} an answer.
            </p>
          </div>
        )}

        {submitted && (
          <div className="seller-success" role="status">
            <strong>Seller profile completed.</strong>
            <p>
              This is currently a frontend workflow. No information has been
              submitted to a live backend and no verification has been
              represented as completed.
            </p>
            <Link
              className="button button-gold"
              to="/technology-submission"
            >
              Continue to Technology Submission
            </Link>
          </div>
        )}

        <div className="seller-actions">
          <Link
            className="button button-outline"
            to={`/requirements?purpose=${encodeURIComponent(purpose)}`}
          >
            Back to Requirements
          </Link>

          <button className="button button-gold" type="submit">
            Submit Seller Profile
          </button>
        </div>
      </form>
    </main>
  )
}

export default Seller
