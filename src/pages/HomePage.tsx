import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import {
  Category, Level, QuizMode,
  CATEGORY_LABELS, CATEGORY_EMOJI,
  LEVEL_LABELS, LEVEL_EMOJI,
} from '../types/quiz'
import type { QuizConfig } from '../types/quiz'

type Step = 'home' | 'mode' | 'theme' | 'level'

export function HomePage() {
  const [step, setStep] = useState<Step>('home')
  const navigate = useNavigate()

  function startQuiz(config: QuizConfig) {
    navigate('/quiz', { state: { config } })
  }

  function handleModeSelect(mode: QuizMode) {
    if (mode === QuizMode.QUICK) {
      startQuiz({ mode })
    } else if (mode === QuizMode.BY_THEME) {
      setStep('theme')
    } else {
      setStep('level')
    }
  }

  return (
    <div className="page">
      <Header />

      {step === 'home' && (
        <main className="fade-in" style={{ padding: '24px 16px', flex: 1 }}>
          {/* Hero */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{ fontSize: '4rem', marginBottom: 12 }}>🥋</div>
            <h1 style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--color-primary)', margin: '0 0 12px', lineHeight: 1.2 }}>
              Quiz Culture Judo
              <br /><span style={{ color: 'var(--color-accent)' }}>CD34</span>
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
              Teste tes connaissances sur le judo, ses valeurs, son histoire et la vie du dojo.
            </p>
          </div>

          {/* Main actions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <button className="btn btn-primary" onClick={() => setStep('mode')}>
              🎯 Commencer le quiz
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/revision')}>
              📚 Réviser la culture judo
            </button>
          </div>

          {/* Stats */}
          <div style={{
            marginTop: 32,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 10,
            textAlign: 'center',
          }}>
            {[
              { num: '60', label: 'Questions' },
              { num: '6', label: 'Thèmes' },
              { num: '3', label: 'Niveaux' },
            ].map(s => (
              <div key={s.label} style={{
                background: 'white',
                borderRadius: 'var(--radius-sm)',
                padding: '12px 8px',
                boxShadow: 'var(--shadow)',
              }}>
                <div style={{ fontSize: '1.4rem', fontWeight: 900, color: 'var(--color-primary)' }}>{s.num}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <p style={{ textAlign: 'center', fontSize: '0.75rem', color: 'var(--color-text-muted)', marginTop: 40 }}>
            Comité Départemental de Judo de l'Hérault — CD34
          </p>
        </main>
      )}

      {step === 'mode' && (
        <main className="fade-in" style={{ padding: '24px 16px', flex: 1 }}>
          <button onClick={() => setStep('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: 16, padding: 0 }}>
            ← Retour
          </button>
          <h2 style={{ margin: '0 0 6px', fontSize: '1.2rem', fontWeight: 800 }}>Choisir le mode</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: '0 0 20px' }}>Comment veux-tu t'entraîner ?</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { mode: QuizMode.QUICK, emoji: '⚡', title: 'Quiz rapide', sub: '10 questions mélangées — toutes catégories' },
              { mode: QuizMode.BY_THEME, emoji: '🎯', title: 'Par thème', sub: 'Choisis une catégorie spécifique' },
              { mode: QuizMode.BY_LEVEL, emoji: '🎖️', title: 'Par niveau', sub: 'Débutant, Intermédiaire ou Confirmé' },
            ].map(m => (
              <button
                key={m.mode}
                onClick={() => handleModeSelect(m.mode)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  padding: '16px',
                  background: 'white',
                  border: '2px solid var(--color-border)',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: 'var(--shadow)',
                  transition: 'border-color 0.15s, transform 0.1s',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-primary)' }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'var(--color-border)' }}
              >
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{m.emoji}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: 2 }}>{m.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)' }}>{m.sub}</div>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--color-text-muted)' }}>›</span>
              </button>
            ))}
          </div>
        </main>
      )}

      {step === 'theme' && (
        <main className="fade-in" style={{ padding: '24px 16px', flex: 1 }}>
          <button onClick={() => setStep('mode')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: 16, padding: 0 }}>
            ← Retour
          </button>
          <h2 style={{ margin: '0 0 6px', fontSize: '1.2rem', fontWeight: 800 }}>Choisir un thème</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: '0 0 20px' }}>Sélectionne la catégorie qui t'intéresse.</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {Object.values(Category).map(cat => (
              <button
                key={cat}
                className="btn btn-secondary"
                style={{ justifyContent: 'flex-start', gap: 12 }}
                onClick={() => startQuiz({ mode: QuizMode.BY_THEME, category: cat })}
              >
                <span style={{ fontSize: '1.3rem' }}>{CATEGORY_EMOJI[cat]}</span>
                {CATEGORY_LABELS[cat]}
              </button>
            ))}
          </div>
        </main>
      )}

      {step === 'level' && (
        <main className="fade-in" style={{ padding: '24px 16px', flex: 1 }}>
          <button onClick={() => setStep('mode')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600, marginBottom: 16, padding: 0 }}>
            ← Retour
          </button>
          <h2 style={{ margin: '0 0 6px', fontSize: '1.2rem', fontWeight: 800 }}>Choisir un niveau</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: '0 0 20px' }}>À quel niveau veux-tu jouer ?</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {Object.values(Level).map(level => (
              <button
                key={level}
                className="btn btn-secondary"
                style={{ justifyContent: 'flex-start', gap: 12, fontSize: '1rem' }}
                onClick={() => startQuiz({ mode: QuizMode.BY_LEVEL, level })}
              >
                <span style={{ fontSize: '1.3rem' }}>{LEVEL_EMOJI[level]}</span>
                {LEVEL_LABELS[level]}
              </button>
            ))}
          </div>
        </main>
      )}
    </div>
  )
}
