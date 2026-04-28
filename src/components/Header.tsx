export function Header() {
  return (
    <header
      style={{
        background: '#ffffff',
        borderBottom: '1px solid var(--color-border)',
        padding: '14px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        position: 'sticky',
        top: 0,
        zIndex: 10,
        boxShadow: '0 1px 6px rgba(0,0,0,0.06)',
      }}
    >
      <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>🥋</span>
      <div style={{ textAlign: 'center' }}>
        <div style={{
          fontSize: '1.05rem',
          fontWeight: 900,
          color: 'var(--color-text)',
          letterSpacing: '-0.01em',
          lineHeight: 1.1,
        }}>
          Quiz Culture{' '}
          <span style={{ color: 'var(--color-primary)' }}>Judo</span>
        </div>
        <div style={{
          fontSize: '0.62rem',
          fontWeight: 600,
          color: 'var(--color-text-muted)',
          letterSpacing: '0.07em',
          textTransform: 'uppercase',
          marginTop: 2,
        }}>
          Histoire · Valeurs · Techniques
        </div>
      </div>
    </header>
  )
}
