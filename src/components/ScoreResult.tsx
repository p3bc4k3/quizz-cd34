import type { QuizSession } from '../types/quiz'
import { QuizMode, CATEGORY_LABELS, LEVEL_LABELS } from '../types/quiz'
import { KofiButton } from './KofiButton'

interface Props {
  session: QuizSession
  onReplay: () => void
  onHome: () => void
}

interface ScoreMessage {
  emoji: string
  title: string
  body: string
  ringColor: string
}

function getMessage(pct: number): ScoreMessage {
  if (pct >= 90) return {
    emoji: '🥇',
    title: 'Excellent, vrai esprit judoka !',
    body: 'Tu maîtrises parfaitement la culture judo. Le tatami n\'a plus de secrets pour toi !',
    ringColor: '#f59e0b',
  }
  if (pct >= 70) return {
    emoji: '🥈',
    title: 'Très bon niveau !',
    body: 'Tu es sur la bonne voie ! Encore quelques révisions et tu seras imbattable.',
    ringColor: '#6366f1',
  }
  if (pct >= 40) return {
    emoji: '🥉',
    title: 'Bon travail, encore un peu de révision.',
    body: 'Tu progresses ! Consulte les fiches de révision pour approfondir tes connaissances.',
    ringColor: '#0ea5e9',
  }
  return {
    emoji: '📚',
    title: 'Continue, tu progresses !',
    body: 'Chaque champion a commencé par la ceinture blanche. Révise et réessaie !',
    ringColor: 'var(--color-primary)',
  }
}

function getThemeLabel(session: QuizSession): string {
  const { mode, category, level } = session.config
  if (mode === QuizMode.BY_THEME && category) return CATEGORY_LABELS[category]
  if (mode === QuizMode.BY_LEVEL && level) return `Niveau ${LEVEL_LABELS[level]}`
  return 'Quiz rapide'
}

export function ScoreResult({ session, onReplay, onHome }: Props) {
  const score = session.answers.filter(a => a.isCorrect).length
  const total = session.questions.length
  const pct = Math.round((score / total) * 100)
  const msg = getMessage(pct)
  const theme = getThemeLabel(session)

  async function handleShare() {
    const text = `🥋 Quiz Culture Judo — ${theme}\nJ'ai obtenu ${score}/${total} (${pct}%)\nTeste tes connaissances sur la culture judo !`
    const url = window.location.origin

    if (typeof navigator.share === 'function') {
      try {
        await navigator.share({ title: 'Quiz Culture Judo', text, url })
      } catch (e) {
        if (e instanceof Error && e.name !== 'AbortError') {
          await copyToClipboard(`${text}\n${url}`)
        }
      }
    } else {
      await copyToClipboard(`${text}\n${url}`)
    }
  }

  async function copyToClipboard(text: string) {
    try {
      await navigator.clipboard.writeText(text)
      alert('Lien copié dans le presse-papiers !')
    } catch {
      // Silently ignore clipboard errors
    }
  }

  return (
    <div className="card fade-in" style={{ margin: '20px 16px', textAlign: 'center' }}>
      {/* Score ring */}
      <div
        className="score-ring"
        style={{ background: msg.ringColor, color: '#fff' }}
      >
        <div style={{ fontSize: '2rem', lineHeight: 1 }}>{msg.emoji}</div>
        <div style={{ fontSize: '1.6rem', fontWeight: 900, lineHeight: 1 }}>{pct}%</div>
        <div style={{ fontSize: '0.75rem', fontWeight: 600, opacity: 0.9 }}>{score}/{total}</div>
      </div>

      <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 8px', color: 'var(--color-text)' }}>
        {msg.title}
      </h2>
      <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: '0 0 24px', lineHeight: 1.5 }}>
        {msg.body}
      </p>

      {/* Breakdown */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        background: 'var(--color-surface)',
        borderRadius: 'var(--radius-sm)',
        padding: '12px',
        marginBottom: 24,
      }}>
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-success)' }}>{score}</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>BONNES</div>
        </div>
        <div style={{ borderLeft: '1px solid var(--color-border)', height: 40, alignSelf: 'center' }} />
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-error)' }}>{total - score}</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>MANQUÉES</div>
        </div>
        <div style={{ borderLeft: '1px solid var(--color-border)', height: 40, alignSelf: 'center' }} />
        <div>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-primary)' }}>{total}</div>
          <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>TOTAL</div>
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <button className="btn btn-primary" onClick={onReplay}>
          🔄 Rejouer
        </button>
        <button className="btn btn-secondary" onClick={handleShare}>
          📤 Partager mon score
        </button>
        <button className="btn btn-secondary" onClick={onHome}>
          🏠 Accueil
        </button>
      </div>

      <KofiButton />
    </div>
  )
}
