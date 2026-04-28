import { useState } from 'react'

export function KofiButton() {
  const [open, setOpen] = useState(false)

  return (
    <div style={{ marginTop: 24 }}>
      <button
        onClick={() => setOpen(v => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 7,
          width: '100%',
          padding: '10px 18px',
          borderRadius: 99,
          background: '#fff',
          border: `1.5px solid ${open ? '#FF5E5B' : 'var(--color-border)'}`,
          color: open ? '#FF5E5B' : 'var(--color-text-muted)',
          fontSize: '0.82rem',
          fontWeight: 600,
          cursor: 'pointer',
          transition: 'border-color 0.15s, color 0.15s',
          boxShadow: 'var(--shadow)',
        }}
      >
        ☕ Soutenir le projet {open ? '▲' : '▼'}
      </button>

      {open && (
        <div className="fade-in" style={{
          marginTop: 12,
          borderRadius: 'var(--radius)',
          overflow: 'hidden',
          boxShadow: 'var(--shadow)',
        }}>
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
  )
}
