import { useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { buyerQuestions, buyerSections } from '../../data/buyerRequirements'
import {
  purposeLabels,
  type MarketplacePurpose,
} from '../../data/marketplaceRequirements'
import './Buyer.css'

type Answers = Record<string, string | boolean>

function Buyer() {
  const [searchParams] = useSearchParams()
  const purpose = searchParams.get('purpose') || 'buy'

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
    return buyerQuestions.filter((question) => {
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

      buyerQuestions.forEach((question) => {
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
    <main className="buyer-page">
      <section className="buyer-header">
        <span className="eyebrow">BUYER ONBOARDING</span>

        <h1>Tell Us What Technology You Need</h1>

        <div className="buyer-purpose">
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
          Tech FounDX uses progressive requirements. Information already
          provided in your participant profile can be reused, while additional
          buyer-specific information is requested only when applicable.
        </p>

        <div className="buyer-progress">
          <div className="buyer-progress-top">
            <span>Required information</span>
            <strong>{progress}%</strong>
          </div>

          <div className="buyer-progress-track">
            <div
              className="buyer-progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </section>

      <form className="buyer-form" onSubmit={handleSubmit}>
        {buyerSections.map((section) => {
          const sectionQuestions = visibleQuestions.filter(
            (question) => question.section === section.id
          )

          if (sectionQuestions.length === 0) return null

          return (
            <section className="buyer-section" key={section.id}>
              <div className="buyer-section-heading">
                <span className="buyer-section-number">
                  {section.title.split(' — ')[0]}
                </span>

                <div>
                  <h2>{section.title.split(' — ')[1]}</h2>
                  <p>{section.description}</p>
                </div>
              </div>

              <div className="buyer-fields">
                {sectionQuestions.map((question) => {
                  const value = answers[question.id]

                  return (
                    <label className="buyer-field" key={question.id}>
                      <span className="buyer-label">
                        {question.label}
                        {question.required && (
                          <span className="buyer-required"> *</span>
                        )}
                      </span>

                      {question.description && (
                        <span className="buyer-description">
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
                        <span className="buyer-checkbox">
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
          <div className="buyer-error" role="alert">
            <strong>Please complete the required fields.</strong>
            <p>
              {missingFields.length} required field
              {missingFields.length === 1 ? '' : 's'} still need
              {missingFields.length === 1 ? 's' : ''} an answer.
            </p>
          </div>
        )}

        {submitted && (
          <div className="buyer-success" role="status">
            <strong>Buyer requirements completed.</strong>
            <p>
              This is currently a frontend workflow. No information has been
              submitted to a live backend and no verification has been
              represented as completed.
            </p>
          </div>
        )}

        <div className="buyer-actions">
          <Link
            className="button button-outline"
            to={`/requirements?purpose=${encodeURIComponent(purpose)}`}
          >
            Back to Requirements
          </Link>

          <button className="button button-gold" type="submit">
            Submit Buyer Requirements
          </button>
        </div>
      </form>
    </main>
  )
}

export default Buyer
