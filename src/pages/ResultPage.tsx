import { useNavigate, useLocation, Navigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { ScoreResult } from '../components/ScoreResult'
import type { QuizSession } from '../types/quiz'

export function ResultPage() {
  const location = useLocation()
  const navigate = useNavigate()

  const raw = location.state
  if (!raw || typeof raw !== 'object' || !('session' in raw)) {
    return <Navigate to="/" replace />
  }
  const session = (raw as { session: QuizSession }).session

  function handleReplay() {
    navigate('/quiz', { state: { config: session.config } })
  }

  function handleHome() {
    navigate('/')
  }

  return (
    <div className="page">
      <Header />
      <main style={{ flex: 1 }}>
        <div style={{ padding: '16px 0 0', textAlign: 'center' }}>
          <h2 style={{ margin: '0 0 4px', fontSize: '1.1rem', fontWeight: 800, color: 'var(--color-text)' }}>
            🏁 Résultat final
          </h2>
        </div>
        <ScoreResult
          session={session}
          onReplay={handleReplay}
          onHome={handleHome}
        />
      </main>
    </div>
  )
}
