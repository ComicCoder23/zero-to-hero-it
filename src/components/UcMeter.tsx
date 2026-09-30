type Props = {
  approxMonthly: number
  currentTrackedEarnings: number
  note: string
  disclaimer: string
}

export function UcMeter({
  approxMonthly,
  currentTrackedEarnings,
  note,
  disclaimer,
}: Props) {
  const pct = Math.min(
    100,
    Math.round((currentTrackedEarnings / Math.max(approxMonthly, 1)) * 100),
  )
  return (
    <div className="uc-meter">
      <div className="uc-meter-top">
        <strong>Demo work-allowance guardrail</strong>
        <span>
          demo {currentTrackedEarnings} / ~demo {approxMonthly}
        </span>
      </div>
      <div className="meter-track" aria-hidden>
        <div className="meter-fill" style={{ width: `${pct}%` }} />
      </div>
      <p className="muted small">{note}</p>
      <p className="muted tiny">{disclaimer}</p>
    </div>
  )
}
