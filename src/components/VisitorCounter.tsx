import { useEffect, useState } from 'react'

const API = 'https://api.counterapi.dev/v1/quizzsharejudo/visits'

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)

  useEffect(() => {
    fetch(`${API}/up`)
      .then(r => r.json())
      .then(data => { if (typeof data.count === 'number') setCount(data.count) })
      .catch(() => { /* silent fail */ })
  }, [])

  if (count === null) return null

  return (
    <div style={{
      textAlign: 'center',
      fontSize: '0.72rem',
      color: 'var(--color-text-muted)',
      fontWeight: 600,
      marginTop: 12,
      letterSpacing: '0.04em',
    }}>
      👁 {count.toLocaleString('fr-FR')} visites
    </div>
  )
}
