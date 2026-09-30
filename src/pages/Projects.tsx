import projects from '../data/projects.json'
import { Panel } from '../components/Panel'
import { ExtLink } from '../components/ExtLink'
import { ShowcaseStrip } from '../components/ShowcaseStrip'

const ART: Record<string, string> = {
  'mums-pc-helper': 'art-mum',
  lookup: 'art-lookup',
  'memory-city': 'art-memory',
  'kch-radar': 'art-kch',
}

const ORB: Record<string, string> = {
  'mums-pc-helper': 'orb-mum',
  lookup: 'orb-lookup',
  'memory-city': 'orb-memory',
  'kch-radar': 'orb-kch',
}

export function Projects() {
  const ttm = projects.ttmShowcase
  const sm =
    'stageManagerShowcase' in projects
      ? projects.stageManagerShowcase
      : null

  return (
    <Panel
      title="Proof Projects"
      subtitle="Showcase: public TTM + Stage Manager (IG only) · ComicCoder23 cards stay job-safe"
    >
      <div className="liquid-divider" />
      <p className="callout">{projects.rule}</p>
      <p className="muted small">
        Identity:{' '}
        <ExtLink href={projects.githubBase}>{projects.identity}</ExtLink>
      </p>

      <ShowcaseStrip variant="full" />
      <p className="showcase-note">
        Stage Manager tile is anonymous — no personal name · Instagram only · not on
        Apply Kit / cover / personal LinkedIn
      </p>

      {ttm ? (
        <article className="project-card project-card-featured">
          <div className="project-visual art-ttm">
            <div className="chrome-lines" aria-hidden />
            <div className="orb orb-ttm" aria-hidden />
          </div>
          <p className="badge badge-featured">Featured · furthest ahead</p>
          <h3>
            <ExtLink href={ttm.url}>{ttm.name}</ExtLink>
          </h3>
          <p>{ttm.oneLiner}</p>
          <p className="small muted">{ttm.note}</p>
          <div className="link-cloud tight">
            {ttm.publicLinks.map((l) => (
              <ExtLink key={l.url} href={l.url}>
                {l.label}
              </ExtLink>
            ))}
          </div>
        </article>
      ) : null}

      {sm ? (
        <article className="project-card">
          <div className="project-visual art-sm">
            <div className="chrome-lines" aria-hidden />
            <div className="orb orb-sm" aria-hidden />
          </div>
          <p className="badge">Public showcase · anonymous</p>
          <h3>
            <ExtLink href={sm.url}>{sm.name}</ExtLink>
          </h3>
          <p>{sm.oneLiner}</p>
          <p className="small muted">{sm.note}</p>
          <div className="link-cloud tight">
            {sm.publicLinks.map((l) => (
              <ExtLink key={l.url} href={l.url}>
                {l.label}
              </ExtLink>
            ))}
          </div>
          <p className="tiny">No public website — Instagram only.</p>
        </article>
      ) : null}

      <h3 className="section-label">ComicCoder23 · job-safe proof</h3>
      <div className="project-grid">
        {projects.projects.map((p) => (
          <article key={p.slug} className="project-card">
            <div className={`project-visual ${ART[p.slug] ?? 'art-lookup'}`}>
              <div className="chrome-lines" aria-hidden />
              <div
                className={`orb ${ORB[p.slug] ?? 'orb-cc23'}`}
                aria-hidden
              />
            </div>
            <h3>
              <ExtLink href={p.url}>{p.name}</ExtLink>
            </h3>
            <p>{p.oneLiner}</p>
            <p className="small">
              <em>Job value:</em> {p.jobValue}
            </p>
            <p className="badge">{p.status}</p>
            {'demoUrl' in p && p.demoUrl ? (
              <p className="small">
                Demo:{' '}
                <ExtLink href={p.demoUrl as string}>
                  {p.demoUrl as string}
                </ExtLink>
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </Panel>
  )
}
