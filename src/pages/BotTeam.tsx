import bots from '../data/bots.json'
import ossPlugs from '../data/ossPlugs.json'
import { ExtLink } from '../components/ExtLink'
import { Panel } from '../components/Panel'
import { StatusChip } from '../components/StatusChip'

export function BotTeam() {
  return (
    <Panel
      title="Bot Team"
      subtitle={`${bots.rosterSize} geeky names · expanded adjacent fields · shared rules`}
    >
      <div className="liquid-divider" />
      <div className="bot-grid">
        {bots.bots.map((b) => (
          <article key={b.id} className="bot-card">
            <div className="bot-head">
              <h3>
                {b.geekyName}
                <span className="muted"> : {b.roleLabel}</span>
              </h3>
              <StatusChip status={b.status} />
            </div>
            <p>{b.oneLiner}</p>
            <p className="muted small">Focus: {b.focus}</p>
            {'adjacentFields' in b && Array.isArray(b.adjacentFields) ? (
              <div className="adjacent-block">
                <p className="tiny adjacent-label">Adjacent fields</p>
                <ul className="adjacent-list">
                  {b.adjacentFields.map((f: string) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            ) : null}
            <p className="tiny mono">{b.id}</p>
          </article>
        ))}
      </div>


      <div className="card">
        <h3>OSS plugs (local study only, no GitHub write)</h3>
        <p className="muted small">{ossPlugs.rule}</p>
        <div className="link-cloud">
          {ossPlugs.plugs.map((p) => (
            <ExtLink key={p.id} href={p.url}>
              {p.name} · {p.license}
            </ExtLink>
          ))}
        </div>
        <p className="tiny">Full table in Package Library · {ossPlugs.count} shortlist plugs</p>
      </div>

      <div className="card">
        <h3>Shared rules</h3>
        <ul>
          {bots.sharedRules.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
        {'note' in bots && bots.note ? (
          <p className="muted small">{bots.note as string}</p>
        ) : null}
        <p className="muted small">
          Retired: {bots.retired.map((r) => r.name).join(', ')} —{' '}
          {bots.retired[0]?.note}
        </p>
      </div>
    </Panel>
  )
}
