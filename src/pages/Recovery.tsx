import { useState } from 'react'
import alerts from '../data/alerts.json'
import { Panel } from '../components/Panel'

const SEV: Record<string, string> = {
  critical: 'alert-critical',
  watch: 'alert-watch',
  info: 'alert-info',
}

export function Recovery() {
  const [showInternal, setShowInternal] = useState(false)
  const net = alerts.recoveryNetworkSummary

  return (
    <Panel
      title="Recovery Guardian"
      subtitle="Watt Watcher alerts · internal wording only"
    >
      <div className="liquid-divider" />
      <p className="callout">{alerts.disclaimer}</p>
      <p className="muted small">
        Soft-pause active:{' '}
        {alerts.wattWatcher.softPauseActive ? 'yes' : 'no'} · Bot:{' '}
        {alerts.wattWatcher.bot}
      </p>

      <div className="alert-list">
        {alerts.alerts.map((a) => (
          <article key={a.id} className={`alert-card ${SEV[a.severity]}`}>
            <div className="priority-row">
              <strong>{a.title}</strong>
              <span className="badge">{a.severity}</span>
            </div>
            <p>{a.body}</p>
            <p className="tiny muted">Source: {a.source}</p>
          </article>
        ))}
      </div>

      <div className="card">
        <h3>Recovery network dossier (internal)</h3>
        <p className="muted small">
          Names stay in package files — not on Command Home.
        </p>
        <button
          type="button"
          className="btn-copy"
          onClick={() => setShowInternal((v) => !v)}
        >
          {showInternal ? 'Hide internal summary' : 'Show internal summary'}
        </button>
        {showInternal ? (
          <div className="internal-box">
            <p>
              Short scan: {net.shortScanFile} · Full dossier:{' '}
              {net.dossierFile}
            </p>
            <ul>
              <li>
                Short scan peers: {net.summaryCounts.shortScanPeers}
              </li>
              <li>
                Full dossier peers: {net.summaryCounts.fullDossierPeers}
              </li>
              <li>Outreach this week: {net.summaryCounts.outreachThisWeek}</li>
            </ul>
            <p className="muted small">{net.note}</p>
          </div>
        ) : null}
      </div>
    </Panel>
  )
}
