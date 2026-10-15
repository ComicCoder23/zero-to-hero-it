import profile from '../data/profile.json'
import { Panel } from '../components/Panel'
import { ExtLink } from '../components/ExtLink'
import { ShowcaseStrip } from '../components/ShowcaseStrip'

export function CommandHome() {
  return (
    <Panel
      title="Zero to Hero IT"
      subtitle="IT support / help desk portfolio · ComicCoder23"
    >
      <div className="hero">
        <p className="hero-kicker">IT support portfolio · {profile.locationForApps}</p>
        <h2>{profile.fullName}</h2>
        <p className="hero-lead">
          Aspiring IT support / help desk analyst with an {profile.education}.
          I come from customer service, and I'm moving into Windows support.
          This site shows my troubleshooting practice, my help desk learning
          path and the projects I've documented under{' '}
          <ExtLink href={profile.githubUrl}>ComicCoder23</ExtLink>.
        </p>
        <div className="hero-meta">
          <span className="pill">
            <span className="pill-dot" /> {profile.targetRole}
          </span>
          <span className="pill">{profile.education}</span>
          <span className="pill">{profile.rightToWork}</span>
        </div>
        <div className="liquid-divider" />
        <ShowcaseStrip />
      </div>

      <div className="card">
        <h3>What this site shows</h3>
        <ul>
          <li>
            <strong>Troubleshooting practice:</strong> PC Health Check Kit is a
            short checklist plus read-only PowerShell checks. I wrote it after
            fixing my mum's slow PC by hand. Not yet run on another PC.
          </li>
          <li>
            <strong>Help desk learning path:</strong> Google IT Support,
            CompTIA A+ objectives and networking basics.
            
          </li>
          <li>
            <strong>Documented projects:</strong> small public builds with a
            short write-up of what each one shows.
          </li>
        </ul>
        <p className="muted small">
          These are practice and learning projects, not paid IT work. I'm
          looking for my first 1st line / service desk role.
        </p>
      </div>

      <div className="card">
        <h3>Links</h3>
        <div className="link-cloud">
          <ExtLink href="https://comiccoder23.github.io/pc-health-check-kit/">
            PC Health Check Kit
          </ExtLink>
          <a className="ext-link" href="#/learning">
            Learning path
          </a>
          <a className="ext-link" href="#/projects">
            All projects
          </a>
          <ExtLink href="https://comiccoder23.github.io/lookup/">
            Look Up — sky calendar
          </ExtLink>
          <ExtLink href={profile.githubUrl}>GitHub · ComicCoder23</ExtLink>
        </div>
      </div>
    </Panel>
  )
}
