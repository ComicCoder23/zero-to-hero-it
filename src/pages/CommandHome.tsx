import northStar from '../data/northStar.json'
import links from '../data/links.json'
import profile from '../data/profile.json'
import ossPlugs from '../data/ossPlugs.json'
import { Panel } from '../components/Panel'
import { UcMeter } from '../components/UcMeter'
import { StatusChip } from '../components/StatusChip'
import { ExtLink } from '../components/ExtLink'
import { ShowcaseStrip } from '../components/ShowcaseStrip'
import jobs from '../data/jobs.json'
import learning from '../data/learning.json'
import sqa from '../data/sqa.json'
import linkedin from '../data/linkedin.json'
import funding from '../data/funding.json'

export function CommandHome() {
  const chips =
    'statusChips' in northStar ? northStar.statusChips : []
  const misc =
    'miscNotes' in northStar ? northStar.miscNotes : []

  return (
    <Panel
      title="Command Home"
      subtitle="Showcase · North Star · status chips · today’s P0s · demo work-allowance"
    >
      <div className="hero">
        <p className="hero-kicker">Career showcase · Glasgow / Central Scotland</p>
        <h2>{profile.fullName}</h2>
        <p className="hero-lead">
          IT Help Desk / 1st Line candidate · vibe-coding builder under{' '}
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
          <span className="pill">ComicCoder23 Builds</span>
          <span className="pill">Tech Tradie Media · showcase</span>
          <span className="pill">Stage Manager · IG only</span>
        </div>
        <div className="liquid-divider" />
        <ShowcaseStrip variant="full" />
        <p className="showcase-note">
          TTM + Stage Manager showcase-only · contained · no bleed into job
          panels · Stage Manager stays anonymous
        </p>
      </div>

      {chips.length > 0 ? (
        <div className="card">
          <h3>Status chips</h3>
          <ul className="priority-list">
            {chips.map(
              (c: {
                id: string
                label: string
                status: string
                detail: string
              }) => (
                <li key={c.id}>
                  <div className="priority-row">
                    <strong>{c.label}</strong>
                    <StatusChip status={c.status} />
                  </div>
                  <p className="muted small">{c.detail}</p>
                </li>
              ),
            )}
          </ul>
          {misc.map((m: { id: string; note: string }) => (
            <p key={m.id} className="muted tiny">
              Misc: {m.note}
            </p>
          ))}
        </div>
      ) : null}

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

      <div className="grid-2">
        <div className="card">
          <h3>Today’s P0 priorities</h3>
          <p className="muted small">From package audit 34 · 29 Sep 2026</p>
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
          <h3>Demo work-allowance meter</h3>
          <UcMeter
            approxMonthly={northStar.ucMeter.approxMonthly}
            currentTrackedEarnings={northStar.ucMeter.currentTrackedEarnings}
            note={northStar.ucMeter.note}
            disclaimer={northStar.ucMeter.disclaimer}
          />
          <p className="muted small">
            Guards: {northStar.ucMeter.guards.join(' · ')}
          </p>
        </div>
      </div>

      <div className="card">
        <h3>OSS plugs (local study only, no GitHub write)</h3>
        <p className="muted small">{ossPlugs.rule}</p>
        <p className="small">
          {ossPlugs.count} shortlist plugs from package 39 — full list in Package
          Library.
        </p>
        <div className="link-cloud">
          {ossPlugs.plugs.slice(0, 4).map((p) => (
            <ExtLink key={p.id} href={p.url}>
              {p.name}
            </ExtLink>
          ))}
        </div>
      </div>


      <div className="card">
        <h3>Status board</h3>
        <ul className="priority-list">
          <li>
            <div className="priority-row">
              <strong>JobSync</strong>
              <StatusChip status={jobs.jobSync.status} />
            </div>
            <p className="muted small">{jobs.jobSync.note}</p>
          </li>
          <li>
            <div className="priority-row">
              <strong>Learning streak</strong>
              <StatusChip status={learning.streak.isPlaceholder ? 'placeholder' : 'live'} />
            </div>
            <p className="muted small">
              {learning.streak.days} days — {learning.streak.label}
            </p>
          </li>
          <li>
            <div className="priority-row">
              <strong>SQA merge</strong>
              <StatusChip status={sqa.mergeStatus.status} />
            </div>
            <p className="muted small">{sqa.mergeStatus.actionForAgents}</p>
          </li>
          <li>
            <div className="priority-row">
              <strong>Personal LinkedIn</strong>
              <StatusChip status={linkedin.personal.status} />
            </div>
            <p className="muted small">
              Recruiter pass: {linkedin.personal.recruiterPass.status} — draft{' '}
              {linkedin.personal.draftFile} only
            </p>
          </li>
          <li>
            <div className="priority-row">
              <strong>Cert replacement</strong>
              <StatusChip status={funding.certificateReplacement.status} />
            </div>
            <p className="muted small">
              demo {funding.certificateReplacement.costGbp} — order on the{' '}
              {funding.certificateReplacement.orderOn}
            </p>
          </li>
          <li>
            <div className="priority-row">
              <strong>Daily job / learning updates</strong>
              <StatusChip status="design-only" />
            </div>
            <p className="muted small">
              Job digest running: {String(jobs.dailyUpdatesDesign.running)} ·
              Learning digest running:{' '}
              {String(learning.dailyUpdatesDesign.running)}
            </p>
          </li>
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
          <ExtLink href={links.jobsync.url}>{links.jobsync.name}</ExtLink>
          <ExtLink href={links.linkedin.personalJoin.url}>
            {links.linkedin.personalJoin.name}
          </ExtLink>
          <ExtLink href={profile.githubUrl}>GitHub ComicCoder23</ExtLink>
          <ExtLink href={profile.sqa.portalUrl}>My Qualifications</ExtLink>
        </div>
      </div>
    </Panel>
  )
}
