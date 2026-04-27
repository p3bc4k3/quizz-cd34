interface Props {
  current: number
  total: number
}

export function ProgressBar({ current, total }: Props) {
  const pct = Math.round((current / total) * 100)

  return (
    <div style={{ padding: '12px 16px 8px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6, fontSize: '0.8rem', color: 'var(--color-text-muted)', fontWeight: 600 }}>
        <span>Question {current} sur {total}</span>
        <span>{pct}%</span>
      </div>
      <div
        className="progress-bar-track"
        role="progressbar"
        aria-valuenow={current}
        aria-valuemin={0}
        aria-valuemax={total}
        aria-label={`Question ${current} sur ${total}`}
      >
        <div
          className="progress-bar-fill"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
