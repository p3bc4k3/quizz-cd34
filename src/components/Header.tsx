export function Header() {
  return (
    <header
      style={{
        background: 'var(--color-primary)',
        color: 'var(--color-white)',
        padding: '12px 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
      }}
    >
      <span style={{ fontSize: '2rem', lineHeight: 1 }}>🥋</span>
      <div>
        <div style={{ fontSize: '0.7rem', fontWeight: 600, opacity: 0.8, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
          Comité Départemental de l'Hérault
        </div>
        <div style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.01em' }}>
          Quiz Culture Judo — CD34
        </div>
      </div>
    </header>
  )
}
