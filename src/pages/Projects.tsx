import projects from '../data/projects.json'
import { Panel } from '../components/Panel'
import { ExtLink } from '../components/ExtLink'
import { ShowcaseStrip } from '../components/ShowcaseStrip'

const ART: Record<string, string> = {
  'mums-pc-helper': 'art-mum',
  lookup: 'art-lookup',
  'zero-to-hero-it': 'art-cc23',
  ZtHIT: 'art-cc23',
}

const ORB: Record<string, string> = {
  'mums-pc-helper': 'orb-mum',
  lookup: 'orb-lookup',
  'zero-to-hero-it': 'orb-cc23',
  ZtHIT: 'orb-cc23',
}

export function Projects() {
  return (
    <Panel
      title="Proof Projects"
      subtitle="Tier A only — Mum PC Helper · Look Up · career leveling record"
    >
      <div className="liquid-divider" />
      <p className="callout">{projects.rule}</p>
      <p className="muted small">
        Identity:{' '}
        <ExtLink href={projects.githubBase}>{projects.identity}</ExtLink>
      </p>

      <ShowcaseStrip variant="tierA" />

      <div className="project-grid">
        {projects.projects.map((p) => (
          <article key={p.slug} className="project-card">
            <div className={`project-visual ${ART[p.slug] ?? 'art-cc23'}`}>
              <div className="chrome-lines" aria-hidden />
              <div className={`orb ${ORB[p.slug] ?? 'orb-cc23'}`} aria-hidden />
            </div>
            <p className="badge">{p.status}</p>
            <h3>
              <ExtLink href={p.url}>{p.name}</ExtLink>
            </h3>
            <p>{p.oneLiner}</p>
            <p className="small muted">{p.jobValue}</p>
          </article>
        ))}
      </div>
    </Panel>
  )
}
