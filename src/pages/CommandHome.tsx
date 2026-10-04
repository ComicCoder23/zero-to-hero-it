import northStar from '../data/northStar.json'
import links from '../data/links.json'
import profile from '../data/profile.json'
import { Panel } from '../components/Panel'
import { StatusChip } from '../components/StatusChip'
import { ExtLink } from '../components/ExtLink'
import { ShowcaseStrip } from '../components/ShowcaseStrip'

export function CommandHome() {
  return (
    <Panel
      title="Command Home"
      subtitle="Tier A proof · North Star · today’s P0s"
    >
      <div className="hero">
        <p className="hero-kicker">Career showcase · Glasgow / Central Scotland</p>
        <h2>{profile.fullName}</h2>
        <p className="hero-lead">
          IT Help Desk / 1st Line candidate · building small public IT projects
          under{' '}
          <ExtLink href={profile.githubUrl}>ComicCoder23</ExtLink> · calm
          customer-service career pivoting into Windows support with real
          public proof. North Star: {northStar.statement}
        </p>
        <div className="hero-meta">
          <span className="pill">
            <span className="pill-dot" /> {northStar.primaryTarget}
          </span>
          <span className="pill">{profile.locationForApps}</span>
          <span className="pill">GitHub · ComicCoder23</span>
        </div>
        <div className="liquid-divider" />
        <ShowcaseStrip variant="tierA" />
        <p className="showcase-note">
          Employer-facing Tier A only: Mum PC Helper · Look Up · zero-to-hero-it
        </p>
      </div>

      <div className="banner">
        <p className="banner-kicker">North Star</p>
        <h2>{northStar.statement}</h2>
        <p>
          Primary: <strong>{northStar.primaryTarget}</strong> ·{' '}
          {northStar.geography}
        </p>
        <ul className="inline-list">
          {northStar.doctrine.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Today’s P0 priorities</h3>
        <p className="muted small">Updated for JobOps lock · 4 Oct 2026</p>
        <ul className="priority-list">
          {northStar.prioritiesP0.map((p) => (
            <li key={p.id}>
              <div className="priority-row">
                <strong>{p.label}</strong>
                <StatusChip status={p.status} />
              </div>
              <p className="muted small">{p.why}</p>
              <p className="tiny">Owner: {p.owner}</p>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>Quick links</h3>
        <div className="link-cloud">
          {links.jobBoards.map((l) => (
            <ExtLink key={l.url} href={l.url}>
              {l.name}
            </ExtLink>
          ))}
          <ExtLink href={links.linkedin.personalJoin.url}>
            {links.linkedin.personalJoin.name}
          </ExtLink>
          <ExtLink href={profile.githubUrl}>GitHub ComicCoder23</ExtLink>
        </div>
      </div>
    </Panel>
  )
}
