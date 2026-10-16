import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  technologySubmissionQuestions,
  technologySubmissionSections,
} from '../../data/technologySubmissionRequirements'
import './TechnologySubmission.css'

type Answers = Record<string, string | boolean>

export default function TechnologySubmission() {
  const [answers, setAnswers] = useState<Answers>({})
  const [submitted, setSubmitted] = useState(false)
  const [missingFields, setMissingFields] = useState<string[]>([])

  const requiredQuestions = useMemo(
    () => technologySubmissionQuestions.filter((question) => question.required),
    [],
  )

  const completedRequired = requiredQuestions.filter((question) => {
    const value = answers[question.id]
    return typeof value === 'boolean' ? value : Boolean(value?.trim())
  }).length

  const progress = requiredQuestions.length
    ? Math.round((completedRequired / requiredQuestions.length) * 100)
    : 0

  const updateAnswer = (id: string, value: string | boolean) => {
    setAnswers((current) => ({ ...current, [id]: value }))
    setSubmitted(false)
    setMissingFields((current) => current.filter((field) => field !== id))
  }

  const handleSubmit = () => {
    const missing = requiredQuestions
      .filter((question) => {
        const value = answers[question.id]
        return typeof value === 'boolean' ? !value : !value?.trim()
      })
      .map((question) => question.id)

    if (missing.length > 0) {
      setMissingFields(missing)
      setSubmitted(false)
      return
    }

    setMissingFields([])
    sessionStorage.setItem(
      'techfoundx-technology-submission',
      JSON.stringify({
        answers,
        submittedAt: new Date().toISOString(),
      }),
    )
    setSubmitted(true)
  }

  return (
    <main className="technology-submission-page">
      <section className="technology-submission-shell">
        <p className="technology-submission-eyebrow">
          TECHNOLOGY SUBMISSION
        </p>

        <h1>Submit a Technology to TechFoundX</h1>

        <p className="technology-submission-intro">
          Provide the information required to establish the identity,
          authority, rights and commercial position of this specific
          technology. Your seller profile is collected separately and does
          not need to be repeated here.
        </p>

        <div className="technology-submission-progress">
          <div className="technology-submission-progress-header">
            <span>Required information</span>
            <strong>{progress}%</strong>
          </div>

          <div
            className="technology-submission-progress-track"
            aria-label={`${progress}% of required information completed`}
          >
            <div
              className="technology-submission-progress-bar"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {technologySubmissionSections.map((section) => {
          const questions = technologySubmissionQuestions.filter(
            (question) => question.section === section.id,
          )

          return (
            <section
              className="technology-submission-section"
              key={section.id}
            >
              <div className="technology-submission-section-heading">
                <h2>{section.title}</h2>
                <p>{section.description}</p>
              </div>

              <div className="technology-submission-fields">
                {questions.map((question) => {
                  const value = answers[question.id]
                  const hasError = missingFields.includes(question.id)

                  return (
                    <div
                      className={`technology-submission-field${
                        hasError ? ' has-error' : ''
                      }`}
                      key={question.id}
                    >
                      {question.type !== 'checkbox' && question.type !== 'info' && (
                        <label htmlFor={question.id}>
                          {question.label}
                          {question.required && <span> *</span>}
                        </label>
                      )}

                      {question.description && (
                        <p className="technology-submission-description">
                          {question.description}
                        </p>
                      )}

                      {question.type === 'info' && (
                        <div className="technology-submission-info">
                          {question.label}
                        </div>
                      )}

                      {question.type === 'text' && (
                        <input
                          id={question.id}
                          type="text"
                          value={typeof value === 'string' ? value : ''}
                          onChange={(event) =>
                            updateAnswer(question.id, event.target.value)
                          }
                        />
                      )}

                      {question.type === 'textarea' && (
                        <textarea
                          id={question.id}
                          rows={5}
                          value={typeof value === 'string' ? value : ''}
                          onChange={(event) =>
                            updateAnswer(question.id, event.target.value)
                          }
                        />
                      )}

                      {question.type === 'select' && (
                        <select
                          id={question.id}
                          value={typeof value === 'string' ? value : ''}
                          onChange={(event) =>
                            updateAnswer(question.id, event.target.value)
                          }
                        >
                          <option value="">Select an option</option>
                          {question.options?.map((option) => (
                            <option key={option} value={option}>
                              {option}
                            </option>
                          ))}
                        </select>
                      )}

                      {question.type === 'checkbox' && (
                        <label className="technology-submission-checkbox">
                          <input
                            id={question.id}
                            type="checkbox"
                            checked={value === true}
                            onChange={(event) =>
                              updateAnswer(question.id, event.target.checked)
                            }
                          />
                          <span>
                            {question.label}
                            {question.required && <strong> *</strong>}
                          </span>
                        </label>
                      )}

                      {hasError && (
                        <p className="technology-submission-error">
                          This field is required.
                        </p>
                      )}
                    </div>
                  )
                })}
              </div>
            </section>
          )
        })}

        {submitted && (
            <div className="technology-submission-submitted">
              <div className="technology-submission-success">
                <strong>Technology submission information completed.</strong>
                <p>
                  This is currently a frontend workflow. No information has been
                  submitted to a live backend, and no verification or publication
                  has been represented as completed.
                </p>
              </div>
              <div className="technology-submission-review-action">
                <Link
                  className="button button-gold"
                  to="/marketplace-review"
                >
                  Continue to Marketplace Review
                </Link>
              </div>
            </div>
          )}

        <div className="technology-submission-actions">
          <Link to="/seller" className="technology-submission-back">
            Back to Seller Profile
          </Link>

          <button type="button" onClick={handleSubmit}>
            Submit Technology Information
          </button>
        </div>
      </section>
    </main>
  )
}
