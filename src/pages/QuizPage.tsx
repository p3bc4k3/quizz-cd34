import { useMemo, useReducer, useEffect } from 'react'
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

export function QuizPage() {
  const location = useLocation()
  const navigate = useNavigate()

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

  useEffect(() => {
    if (state.phase === 'finished') {
      navigate('/result', {
        state: {
          session: {
            config,
            questions,
            answers: state.answers,
            startedAt: Date.now(),
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
      <Header />
      <ProgressBar current={state.currentIndex + 1} total={questions.length} />

      {/* Live score */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        padding: '4px 16px 0',
        fontSize: '0.8rem',
        fontWeight: 700,
        color: 'var(--color-text-muted)',
      }}>
        ✅ {state.answers.filter(a => a.isCorrect).length} / {state.answers.length}
      </div>

      <QuizCard
        key={currentQuestion.id}
        question={currentQuestion}
        onAnswer={(idx) => dispatch({ type: 'ANSWER', index: idx, question: currentQuestion })}
        onNext={() => dispatch({ type: 'NEXT', totalQuestions: questions.length })}
        questionNumber={state.currentIndex + 1}
        total={questions.length}
      />
    </div>
  )
}
