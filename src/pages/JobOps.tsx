import checklist from '../data/jobOpsChecklist.json'
import { Panel } from '../components/Panel'
import { ExtLink } from '../components/ExtLink'
import { ShowcaseStrip } from '../components/ShowcaseStrip'
import { StatusChip } from '../components/StatusChip'

export function JobOps() {
  return (
    <Panel
      title={checklist.title}
      subtitle={`Ordered next taps · updated ${checklist.updated} · no new app — this dash is the workflow`}
    >
      <div className="liquid-divider" />
      <p className="callout">
        Desktop is cleaned to five files. Full packs live in{' '}
        <ExtLink href={checklist.driveFolder}>night-shift Drive</ExtLink> and{' '}
        <code>~/job-ops/</code>. {checklist.desktopNote}
      </p>

      <ShowcaseStrip variant="tierA" />

      <div className="card">
        <h3>Do in order</h3>
        <ol className="adjacent-list">
          {checklist.steps.map((s) => (
            <li key={s.id} style={{ marginBottom: '0.75rem' }}>
              <div className="priority-row">
                <strong>
                  {s.id}. {s.title}
                </strong>
                <StatusChip status={s.status} />
              </div>
              <p className="small">{s.detail}</p>
              {s.url ? (
                <p className="tiny">
                  <ExtLink href={s.url}>Open</ExtLink>
                </p>
              ) : null}
            </li>
          ))}
        </ol>
      </div>

      <div className="card">
        <h3>Already done</h3>
        <ul className="adjacent-list">
          {checklist.done.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Walls</h3>
        <ul className="adjacent-list">
          {checklist.walls.map((w) => (
            <li key={w}>{w}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Tier A proof</h3>
        <div className="link-cloud">
          {checklist.proof.map((p) => (
            <ExtLink key={p.name} href={p.url}>
              {p.name}
            </ExtLink>
          ))}
        </div>
      </div>
    </Panel>
  )
}
