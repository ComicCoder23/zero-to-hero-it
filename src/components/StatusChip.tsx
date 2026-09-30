const TONE: Record<string, string> = {
  Idle: 'chip-idle',
  Ready: 'chip-ready',
  'Needs operator': 'chip-needs',
  'Soft-pause': 'chip-pause',
  captured: 'chip-ready',
  outstanding: 'chip-needs',
  'draft-ready': 'chip-ready',
  'needs-operator': 'chip-needs',
  'blocked-on-pack': 'chip-pause',
  Draft: 'chip-idle',
  Submitted: 'chip-ready',
  Interview: 'chip-needs',
  Offer: 'chip-ready',
  Closed: 'chip-idle',
  placeholder: 'chip-idle',
  'linked-not-live': 'chip-needs',
  in_progress: 'chip-needs',
  'in progress': 'chip-needs',
  'operator-reported sent': 'chip-ready',
  'the operator reports merge email already sent': 'chip-ready',
  'Planned spend': 'chip-needs',
  'Planned spend (demo figure)': 'chip-needs',
  'order 14th · demo cost': 'chip-needs',
}

type Props = { status: string }

export function StatusChip({ status }: Props) {
  const cls = TONE[status] ?? 'chip-idle'
  return <span className={`chip ${cls}`}>{status}</span>
}
