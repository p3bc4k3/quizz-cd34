import { useEffect, useState } from 'react'

export function VisitorCounter() {
  const [count, setCount] = useState<number | null>(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://api.counterapi.dev/v1/quizzsharejudo/visits/up')
      .then(r => r.json())
      .then(data => {
        // counterapi.dev returns { count: N }
        const n = data?.count ?? data?.value
        if (typeof n === 'number') setCount(n)
        else setError(true)
      })
      .catch(() => setError(true))
  }, [])

  const style: React.CSSProperties = {
    textAlign: 'center',
    fontSize: '0.72rem',
    color: 'var(--color-text-muted)',
    fontWeight: 600,
    marginTop: 12,
    letterSpacing: '0.04em',
  }

  if (error) return null
  if (count === null) return <div style={style}>👁 ···</div>
  return <div style={style}>👁 {count.toLocaleString('fr-FR')} visites</div>
}
