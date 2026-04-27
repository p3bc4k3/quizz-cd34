import { useState } from 'react'
import type { Question } from '../types/quiz'
import { CATEGORY_LABELS, CATEGORY_EMOJI } from '../types/quiz'

interface Props {
  question: Question
  onAnswer: (index: 0 | 1 | 2 | 3) => void
  onNext: () => void
  questionNumber: number
  total: number
}

export function QuizCard({ question, onAnswer, onNext, questionNumber, total }: Props) {
  const [selected, setSelected] = useState<0 | 1 | 2 | 3 | null>(null)
  const answered = selected !== null

  function handleSelect(idx: 0 | 1 | 2 | 3) {
    if (answered) return
    setSelected(idx)
    onAnswer(idx)
  }

  function btnClass(idx: number): string {
    if (!answered) return 'btn-option'
    if (idx === question.correctIndex) return 'btn-option correct'
    if (idx === selected) return 'btn-option wrong'
    return 'btn-option dimmed'
  }

  const isLast = questionNumber === total

  return (
    <div className="card fade-in" style={{ margin: '12px 16px' }}>
      {/* Category badge */}
      <div style={{ marginBottom: 12, display: 'flex', alignItems: 'center', gap: 6 }}>
        <span style={{ fontSize: '1.1rem' }}>{CATEGORY_EMOJI[question.category]}</span>
        <span style={{
          fontSize: '0.72rem',
          fontWeight: 700,
          color: 'var(--color-primary)',
          textTransform: 'uppercase',
          letterSpacing: '0.06em',
        }}>
          {CATEGORY_LABELS[question.category]}
        </span>
      </div>

      {/* Question text */}
      <p style={{ fontSize: '1.05rem', fontWeight: 700, lineHeight: 1.45, marginBottom: 20, color: 'var(--color-text)' }}>
        {question.text}
      </p>

      {/* Answer options */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {question.options.map((opt, i) => (
          <button
            key={i}
            className={btnClass(i)}
            disabled={answered}
            onClick={() => handleSelect(i as 0 | 1 | 2 | 3)}
          >
            <span style={{ fontWeight: 700, marginRight: 8, opacity: 0.6 }}>
              {String.fromCharCode(65 + i)}.
            </span>
            {opt}
          </button>
        ))}
      </div>

      {/* Explanation */}
      <div className={`explanation${answered ? ' visible' : ''}`}>
        <div style={{
          marginTop: 16,
          padding: '12px 14px',
          borderRadius: 'var(--radius-sm)',
          background: selected === question.correctIndex ? 'var(--color-success-bg)' : 'var(--color-error-bg)',
          borderLeft: `4px solid ${selected === question.correctIndex ? 'var(--color-success)' : 'var(--color-error)'}`,
        }}>
          <div style={{ fontWeight: 700, marginBottom: 4, fontSize: '0.85rem' }}>
            {selected === question.correctIndex ? '✅ Bonne réponse !' : '❌ Pas tout à fait…'}
          </div>
          <p style={{ margin: 0, fontSize: '0.88rem', lineHeight: 1.5, color: 'var(--color-text)' }}>
            {question.explanation}
          </p>
        </div>
      </div>

      {/* Next button */}
      {answered && (
        <button
          className="btn btn-primary"
          onClick={onNext}
          style={{ marginTop: 16 }}
        >
          {isLast ? '🏁 Voir mon résultat' : 'Question suivante →'}
        </button>
      )}
    </div>
  )
}
