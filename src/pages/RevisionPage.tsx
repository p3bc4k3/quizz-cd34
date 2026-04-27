import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Header } from '../components/Header'
import { REVISION_CARDS } from '../data/revisionCards'

export function RevisionPage() {
  const [openId, setOpenId] = useState<string | null>(null)
  const navigate = useNavigate()

  function toggle(id: string) {
    setOpenId(prev => prev === id ? null : id)
  }

  return (
    <div className="page">
      <Header />

      <main style={{ padding: '16px 0', flex: 1 }}>
        <div style={{ padding: '0 16px 16px' }}>
          <button
            onClick={() => navigate('/')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-primary)', fontSize: '0.9rem', fontWeight: 600, padding: 0, marginBottom: 8 }}
          >
            ← Retour à l'accueil
          </button>
          <h1 style={{ margin: '0 0 4px', fontSize: '1.3rem', fontWeight: 900, color: 'var(--color-text)' }}>
            📚 Réviser la culture judo
          </h1>
          <p style={{ margin: 0, color: 'var(--color-text-muted)', fontSize: '0.88rem' }}>
            Consulte ces fiches avant de passer le quiz !
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8, padding: '0 16px' }}>
          {REVISION_CARDS.map((card, i) => {
            const isOpen = openId === card.id
            return (
              <article
                key={card.id}
                className="fade-in"
                style={{
                  background: 'white',
                  borderRadius: 'var(--radius)',
                  boxShadow: 'var(--shadow)',
                  overflow: 'hidden',
                  animationDelay: `${i * 60}ms`,
                }}
              >
                <button
                  className="accordion-btn"
                  onClick={() => toggle(card.id)}
                  aria-expanded={isOpen}
                  aria-controls={`panel-${card.id}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <span style={{ fontSize: '1.4rem' }}>{card.emoji}</span>
                    <span>{card.title}</span>
                  </div>
                  <span
                    style={{
                      color: 'var(--color-primary)',
                      transition: 'transform 0.25s',
                      display: 'inline-block',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      fontSize: '1.1rem',
                    }}
                  >
                    ▾
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`panel-${card.id}`}
                    role="region"
                    className="accordion-content fade-in"
                  >
                    {card.content}
                  </div>
                )}
              </article>
            )
          })}
        </div>

        <div style={{ padding: '24px 16px 0', textAlign: 'center' }}>
          <button className="btn btn-primary" onClick={() => navigate('/')}>
            🎯 Passer le quiz !
          </button>
        </div>
      </main>
    </div>
  )
}
