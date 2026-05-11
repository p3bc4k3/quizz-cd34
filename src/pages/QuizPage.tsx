import { useMemo, useReducer, useEffect, useState, useRef } from 'react'
import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { ProgressBar } from '../components/ProgressBar'
import { QuizCard } from '../components/QuizCard'
import { buildSession } from '../data/questions'
import type { QuizConfig, AnswerRecord, Question } from '../types/quiz'

// ── State machine ─────────────────────────────────────────

type QuizState =
  | { phase: 'active'; currentIndex: number; answers: AnswerRecord[] }
  | { phase: 'finished'; answers: AnswerRecord[] }

type QuizAction =
  | { type: 'ANSWER'; index: 0 | 1 | 2 | 3; question: Question }
  | { type: 'NEXT'; totalQuestions: number }

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  if (state.phase !== 'active') return state

  switch (action.type) {
    case 'ANSWER': {
      const record: AnswerRecord = {
        questionId: action.question.id,
        selectedIndex: action.index,
        isCorrect: action.index === action.question.correctIndex,
      }
      return { ...state, answers: [...state.answers, record] }
    }
    case 'NEXT': {
      const nextIndex = state.currentIndex + 1
      if (nextIndex >= action.totalQuestions) {
        return { phase: 'finished', answers: state.answers }
      }
      return { ...state, currentIndex: nextIndex }
    }
  }
}

// ── Component ─────────────────────────────────────────────

function AbandonModal({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {
  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.5)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '20px',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onCancel() }}
    >
      <div className="fade-in" style={{
        background: '#fff',
        borderRadius: 'var(--radius)',
        padding: '28px 24px',
        width: '100%',
        maxWidth: 340,
        boxShadow: 'var(--shadow-lg)',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '2.5rem', marginBottom: 10 }}>🏳️</div>
        <h2 style={{ margin: '0 0 8px', fontSize: '1.15rem', fontWeight: 900 }}>
          Abandonner le quiz ?
        </h2>
        <p style={{ margin: '0 0 20px', color: 'var(--color-text-muted)', fontSize: '0.88rem', lineHeight: 1.55 }}>
          Ta progression sera perdue. Tu pourras recommencer depuis l'accueil.
        </p>
        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={onCancel}
            style={{
              flex: 1, padding: '12px', borderRadius: 99,
              border: '1.5px solid var(--color-border)',
              background: '#fff', color: 'var(--color-text-muted)',
              fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer',
            }}
          >
            Continuer
          </button>
          <button
            onClick={onConfirm}
            style={{
              flex: 1, padding: '12px', borderRadius: 99,
              border: 'none',
              background: 'var(--color-error)', color: '#fff',
              fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
            }}
          >
            Abandonner
          </button>
        </div>
      </div>
    </div>
  )
}

export function QuizPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const [showAbandon, setShowAbandon] = useState(false)

  const raw = location.state
  if (!raw || typeof raw !== 'object' || !('config' in raw)) {
    return <Navigate to="/" replace />
  }
  const config = (raw as { config: QuizConfig }).config

  // Stable shuffle — computed once on mount
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const questions = useMemo(() => buildSession(config), [])

  const [state, dispatch] = useReducer(quizReducer, {
    phase: 'active',
    currentIndex: 0,
    answers: [],
  })

  const startedAtRef = useRef(Date.now())
  const [elapsed, setElapsed] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => setElapsed(Math.floor((Date.now() - startedAtRef.current) / 1000)), 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (state.phase === 'finished') {
      navigate('/result', {
        state: {
          session: {
            config,
            questions,
            answers: state.answers,
            startedAt: startedAtRef.current,
          },
        },
        replace: true,
      })
    }
  }, [state.phase, state.answers, config, questions, navigate])

  if (state.phase !== 'active') return null

  const currentQuestion = questions[state.currentIndex]
  if (!currentQuestion) return null

  return (
    <div className="page">
      {showAbandon && (
        <AbandonModal
          onConfirm={() => navigate('/')}
          onCancel={() => setShowAbandon(false)}
        />
      )}

      <Header />
      <ProgressBar current={state.currentIndex + 1} total={questions.length} />

      {/* Live score + chrono */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '4px 16px 0',
        fontSize: '0.8rem',
        fontWeight: 700,
        color: 'var(--color-text-muted)',
      }}>
        <span>⏱ {String(Math.floor(elapsed / 60)).padStart(2, '0')}:{String(elapsed % 60).padStart(2, '0')}</span>
        <span>✅ {state.answers.filter(a => a.isCorrect).length} / {state.answers.length}</span>
      </div>

      <QuizCard
        key={currentQuestion.id}
        question={currentQuestion}
        onAnswer={(idx) => dispatch({ type: 'ANSWER', index: idx, question: currentQuestion })}
        onNext={() => dispatch({ type: 'NEXT', totalQuestions: questions.length })}
        questionNumber={state.currentIndex + 1}
        total={questions.length}
      />

      <div style={{ padding: '4px 16px 24px', textAlign: 'center' }}>
        <button
          onClick={() => setShowAbandon(true)}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--color-text-muted)',
            fontSize: '0.82rem',
            fontWeight: 600,
            padding: '8px 16px',
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-error)' }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.color = 'var(--color-text-muted)' }}
        >
          Abandonner le quiz
        </button>
      </div>
    </div>
  )
}
