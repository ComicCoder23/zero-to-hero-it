import funding from '../data/funding.json'
import links from '../data/links.json'
import { Panel } from '../components/Panel'
import { ExtLink } from '../components/ExtLink'
import { StatusChip } from '../components/StatusChip'

export function Funding() {
  const gr = 'grantRouter' in funding ? funding.grantRouter : null
  const pipeline =
    'partnershipPipeline' in funding ? funding.partnershipPipeline : []
  const cert =
    'certificateReplacement' in funding
      ? funding.certificateReplacement
      : null

  return (
    <Panel
      title="Funding, Partnerships & Money"
      subtitle="Scotland routes · collabs · cert order · demo work-allowance · no auto income claims"
    >
      <div className="liquid-divider" />
      <p className="callout">{funding.disclaimer}</p>

      {cert ? (
        <div className="card">
          <div className="priority-row">
            <h3 style={{ margin: 0 }}>{cert.item} · demo {cert.costGbp}</h3>
            <StatusChip status={cert.status} />
          </div>
          <p>
            <strong>Order on the {cert.orderOn}</strong> — operator-stated.
          </p>
          <p className="muted small">{cert.note}</p>
        </div>
      ) : null}

      {gr ? (
        <div className="card">
          <h3>
            {gr.geekyName}: {gr.roleLabel}
          </h3>
          <p>{gr.scope}</p>
          <p className="small">
            <em>Builds in scope:</em> {gr.buildsInScope.join(' · ')}
          </p>
          <p className="tiny adjacent-label">Partner types</p>
          <ul className="adjacent-list">
            {gr.partnerTypes.map((t: string) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <p className="tiny adjacent-label">Workflow</p>
          <ul className="adjacent-list">
            {gr.workflow.map((w: string) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      ) : null}

      <div className="card">
        <h3>Demo work-allowance guardrail</h3>
        {/* earnings meter hidden on public Pages */}
        <ul>
          {funding.ucGuardrail.notes.map((n) => (
            <li key={n}>{n}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Funding tracks</h3>
        <div className="grid-2">
          {funding.routes.map((r) => (
            <div key={r.name} className="mini-card">
              <span className="badge">{r.priority}</span>
              <h4>
                {'url' in r && r.url ? (
                  <ExtLink href={r.url as string}>{r.name}</ExtLink>
                ) : (
                  r.name
                )}
              </h4>
              <p className="small">{r.why}</p>
              <p className="muted tiny">{r.caveat}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>Partnership / collab pipeline</h3>
        <p className="muted small">
          Tracked by Grant Router. Draft outreach only — never send unless the
          operator asks. Filter every income-bearing idea through the demo
          work-allowance guardrail + Watt Watcher.
        </p>
        <div className="grid-2">
          {pipeline.map(
            (p: {
              name: string
              type: string
              lane: string
              status: string
              ucFit: string
              note: string
            }) => (
              <div key={p.name} className="mini-card">
                <span className="badge">{p.status}</span>
                <h4>{p.name}</h4>
                <p className="small">
                  {p.type} · {p.lane}
                </p>
                <p className="muted tiny">{p.ucFit}</p>
                <p className="muted tiny">{p.note}</p>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="card">
        <h3>Live funding links</h3>
        <div className="link-cloud">
          {links.funding.map((l) => (
            <ExtLink key={l.url} href={l.url}>
              {l.name}
            </ExtLink>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>Archive / low fit</h3>
        <ul>
          {funding.archiveLowFit.map((a) => (
            <li key={a.name}>
              <strong>{a.name}</strong> — {a.status}
            </li>
          ))}
        </ul>
        <p className="muted small">Bots: {funding.bots.join(' · ')}</p>
      </div>
    </Panel>
  )
}
