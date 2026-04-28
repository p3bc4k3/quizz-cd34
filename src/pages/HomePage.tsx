import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import {
  Category, Level, QuizMode,
  CATEGORY_LABELS, CATEGORY_EMOJI,
  LEVEL_LABELS, LEVEL_EMOJI,
  THEME_CATEGORIES, BELT_CATEGORIES,
} from '../types/quiz'
import type { QuizConfig } from '../types/quiz'

type Step = 'home' | 'mode' | 'theme' | 'grade_belt' | 'level'

function BackBtn({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        color: 'var(--color-primary)',
        fontSize: '0.9rem',
        fontWeight: 700,
        marginBottom: 20,
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        gap: 4,
      }}
    >
      ← Retour
    </button>
  )
}

export function HomePage() {
  const [step, setStep] = useState<Step>('home')
  const [kofiOpen, setKofiOpen] = useState(false)
  const navigate = useNavigate()

  function startQuiz(config: QuizConfig) {
    navigate('/quiz', { state: { config } })
  }

  function handleModeSelect(mode: QuizMode) {
    if (mode === QuizMode.QUICK) startQuiz({ mode })
    else if (mode === QuizMode.BY_THEME) setStep('theme')
    else setStep('level')
  }

  function handleThemeSelect(cat: Category) {
    if (cat === Category.GRADES_CLUB) setStep('grade_belt')
    else startQuiz({ mode: QuizMode.BY_THEME, category: cat })
  }

  return (
    <div className="page">
      <Header />

      {/* ── HOME ─────────────────────────────────── */}
      {step === 'home' && (
        <main className="fade-in" style={{ padding: '28px 20px', flex: 1, display: 'flex', flexDirection: 'column' }}>

          {/* Hero */}
          <div style={{ marginBottom: 28 }}>
            <h1 style={{
              fontSize: 'clamp(1.8rem, 8vw, 2.4rem)',
              fontWeight: 900,
              margin: '0 0 2px',
              lineHeight: 1.1,
              color: 'var(--color-text)',
            }}>
              Quiz Culture
            </h1>
            <h1 style={{
              fontSize: 'clamp(1.8rem, 8vw, 2.4rem)',
              fontWeight: 900,
              margin: '0 0 14px',
              lineHeight: 1.1,
              color: 'var(--color-primary)',
            }}>
              Judo
            </h1>
            <p style={{
              color: 'var(--color-text-muted)',
              fontSize: 'clamp(0.88rem, 3.5vw, 1rem)',
              lineHeight: 1.65,
              margin: 0,
            }}>
              Teste tes connaissances sur l'histoire du judo, ses valeurs, ses techniques et son arbitrage.
            </p>
          </div>

          {/* CTA buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 28 }}>
            <button className="btn btn-primary" onClick={() => setStep('mode')}>
              🎯 Commencer le quiz
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/revision')}>
              📚 Réviser la culture judo
            </button>
          </div>

          {/* Stats */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 10,
            textAlign: 'center',
            marginBottom: 28,
          }}>
            {[
              { num: '190+', label: 'Questions' },
              { num: '8',    label: 'Ceintures' },
              { num: '3',    label: 'Niveaux' },
            ].map(s => (
              <div key={s.label} style={{
                background: 'white',
                borderRadius: 'var(--radius-sm)',
                padding: '14px 6px',
                boxShadow: 'var(--shadow)',
                border: '1px solid var(--color-border)',
              }}>
                <div style={{ fontSize: 'clamp(1.2rem, 5vw, 1.5rem)', fontWeight: 900, color: 'var(--color-primary)' }}>{s.num}</div>
                <div style={{ fontSize: 'clamp(0.65rem, 2.5vw, 0.72rem)', color: 'var(--color-text-muted)', fontWeight: 600, marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Ko-fi */}
          <div style={{ marginTop: 'auto' }}>
            <button
              onClick={() => setKofiOpen(v => !v)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 7,
                width: '100%',
                padding: '10px 18px',
                borderRadius: 99,
                background: '#fff',
                border: '1.5px solid var(--color-border)',
                color: kofiOpen ? '#FF5E5B' : 'var(--color-text-muted)',
                borderColor: kofiOpen ? '#FF5E5B' : 'var(--color-border)',
                fontSize: '0.82rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'border-color 0.15s, color 0.15s',
                boxShadow: 'var(--shadow)',
              }}
            >
              ☕ Soutenir le projet {kofiOpen ? '▲' : '▼'}
            </button>

            {kofiOpen && (
              <div className="fade-in" style={{ marginTop: 12, borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                <iframe
                  id="kofiframe"
                  src="https://ko-fi.com/pebcake/?hidefeed=true&widget=true&embed=true&preview=true"
                  style={{ border: 'none', width: '100%', padding: 4, background: '#f9f9f9', display: 'block' }}
                  height="712"
                  title="Soutenir le projet sur Ko-fi"
                />
              </div>
            )}
          </div>
        </main>
      )}

      {/* ── MODE ─────────────────────────────────── */}
      {step === 'mode' && (
        <main className="fade-in" style={{ padding: '28px 20px', flex: 1 }}>
          <BackBtn onClick={() => setStep('home')} />
          <h2 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 900 }}>Mode de jeu</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: '0 0 24px' }}>
            Comment veux-tu t'entraîner ?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { mode: QuizMode.QUICK,    emoji: '⚡', title: 'Quiz rapide',  sub: '10 questions mélangées — toutes catégories' },
              { mode: QuizMode.BY_THEME, emoji: '🎯', title: 'Par thème',    sub: 'Choisis une catégorie spécifique' },
              { mode: QuizMode.BY_LEVEL, emoji: '🎖️', title: 'Par niveau',   sub: 'Débutant, Intermédiaire ou Confirmé' },
            ].map(m => (
              <button
                key={m.mode}
                onClick={() => handleModeSelect(m.mode)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 16,
                  padding: '18px 16px',
                  background: 'white',
                  border: '1.5px solid var(--color-border)',
                  borderRadius: 'var(--radius)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  boxShadow: 'var(--shadow)',
                  transition: 'border-color 0.15s, box-shadow 0.15s',
                  width: '100%',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.borderColor = 'var(--color-primary)'
                  el.style.boxShadow = '0 4px 16px rgba(212,131,26,0.15)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement
                  el.style.borderColor = 'var(--color-border)'
                  el.style.boxShadow = 'var(--shadow)'
                }}
              >
                <span style={{
                  width: 44,
                  height: 44,
                  minWidth: 44,
                  borderRadius: 12,
                  background: 'var(--color-primary-light)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.4rem',
                }}>
                  {m.emoji}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--color-text)' }}>{m.title}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--color-text-muted)', marginTop: 2 }}>{m.sub}</div>
                </div>
                <span style={{ color: 'var(--color-primary)', fontWeight: 700, fontSize: '1.1rem', flexShrink: 0 }}>›</span>
              </button>
            ))}
          </div>
        </main>
      )}

      {/* ── THEME ────────────────────────────────── */}
      {step === 'theme' && (
        <main className="fade-in" style={{ padding: '28px 20px', flex: 1 }}>
          <BackBtn onClick={() => setStep('mode')} />
          <h2 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 900 }}>Choisir un thème</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: '0 0 24px' }}>
            Sélectionne la catégorie qui t'intéresse.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {THEME_CATEGORIES.map(cat => (
              <button
                key={cat}
                className="btn btn-secondary"
                style={{ justifyContent: 'flex-start', gap: 12 }}
                onClick={() => handleThemeSelect(cat)}
              >
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{CATEGORY_EMOJI[cat]}</span>
                <span style={{ flex: 1, textAlign: 'left' }}>{CATEGORY_LABELS[cat]}</span>
                {cat === Category.GRADES_CLUB && (
                  <span style={{ fontWeight: 700, flexShrink: 0 }}>›</span>
                )}
              </button>
            ))}
          </div>
        </main>
      )}

      {/* ── GRADE BELT ───────────────────────────── */}
      {step === 'grade_belt' && (
        <main className="fade-in" style={{ padding: '28px 20px', flex: 1 }}>
          <BackBtn onClick={() => setStep('theme')} />
          <h2 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 900 }}>Programme des grades</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: '0 0 24px' }}>
            Choisis ta ceinture — 10 questions tirées au hasard parmi les 15 disponibles.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {BELT_CATEGORIES.map(cat => (
              <button
                key={cat}
                className="btn btn-secondary"
                style={{ justifyContent: 'flex-start', gap: 12 }}
                onClick={() => startQuiz({ mode: QuizMode.BY_THEME, category: cat })}
              >
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{CATEGORY_EMOJI[cat]}</span>
                <span style={{ flex: 1, textAlign: 'left' }}>{CATEGORY_LABELS[cat]}</span>
              </button>
            ))}
          </div>
        </main>
      )}

      {/* ── LEVEL ────────────────────────────────── */}
      {step === 'level' && (
        <main className="fade-in" style={{ padding: '28px 20px', flex: 1 }}>
          <BackBtn onClick={() => setStep('mode')} />
          <h2 style={{ margin: '0 0 4px', fontSize: '1.4rem', fontWeight: 900 }}>Choisir un niveau</h2>
          <p style={{ color: 'var(--color-text-muted)', fontSize: '0.88rem', margin: '0 0 24px' }}>
            À quel niveau veux-tu jouer ?
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {Object.values(Level).map(level => (
              <button
                key={level}
                className="btn btn-secondary"
                style={{ justifyContent: 'flex-start', gap: 12 }}
                onClick={() => startQuiz({ mode: QuizMode.BY_LEVEL, level })}
              >
                <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{LEVEL_EMOJI[level]}</span>
                <span style={{ flex: 1, textAlign: 'left' }}>{LEVEL_LABELS[level]}</span>
              </button>
            ))}
          </div>
        </main>
      )}
    </div>
  )
}
