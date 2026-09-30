import learning from '../data/learning.json'
import links from '../data/links.json'
import copyBlocks from '../data/copyBlocks.json'
import { Panel } from '../components/Panel'
import { ExtLink } from '../components/ExtLink'
import { CopyBlock } from '../components/CopyBlock'
import { ShowcaseStrip } from '../components/ShowcaseStrip'
import { StatusChip } from '../components/StatusChip'

export function Learning() {
  const daily =
    'dailyUpdatesDesign' in learning ? learning.dailyUpdatesDesign : null

  return (
    <Panel
      title="Learning & XP"
      subtitle="Honest streak placeholder · daily updates design · L1 focus · communities"
    >
      <div className="liquid-divider" />
      <ShowcaseStrip variant="jobSafe" />
      <p className="showcase-note">
        Learning path strip — no TTM / no Stage Manager (job-path contained)
      </p>
      <div className="grid-2">
        <div className="card">
          <div className="priority-row">
            <h3 style={{ margin: 0 }}>Learning streak</h3>
            <StatusChip
              status={
                learning.streak.isPlaceholder
                  ? 'placeholder'
                  : `${learning.streak.days} days`
              }
            />
          </div>
          <p className="stat">{learning.streak.days} days</p>
          <p className="small">
            <strong>{learning.streak.label}</strong>
          </p>
          <p className="muted small">{learning.streak.note}</p>
          <p className="callout soft">{learning.rule}</p>
        </div>
        <div className="card">
          <h3>Current focus</h3>
          <p className="stat">Level {learning.currentFocusLevel}</p>
          <p>IT Help Desk / 1st Line — primary target</p>
        </div>
      </div>

      {daily ? (
        <div className="card">
          <h3>Daily learning updates</h3>
          <p className="muted small">
            {daily.label} — running: {daily.running ? 'yes' : 'not yet'}
          </p>
          <p className="tiny">Source: {daily.source}</p>
          <ul>
            {daily.schema.map((s: string) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
          <p className="muted small">
            Live YouTube / community links below (from links.json).
          </p>
        </div>
      ) : null}

      <div className="card">
        <h3>Level map</h3>
        <div className="level-grid">
          {learning.levels.map((lv) => (
            <div
              key={lv.id}
              className={lv.primary ? 'level-card primary' : 'level-card'}
            >
              <div className="level-id">
                {lv.id}
                {lv.primary ? <span className="badge">focus</span> : null}
              </div>
              <strong>{lv.name}</strong>
              <p className="small">
                <em>Fit:</em> {lv.fit}
              </p>
              <p className="small muted">
                <em>Gaps:</em> {lv.gaps}
              </p>
              <p className="tiny">Unlock: {lv.unlock}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>12-week plan highlights</h3>
        <div className="grid-3">
          {learning.twelveWeekHighlights.map((w) => (
            <div key={w.weeks} className="mini-card">
              <h4>
                Weeks {w.weeks} — {w.title}
              </h4>
              <ul>
                {w.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>Weekly cadence</h3>
        <ul className="cadence">
          {learning.weeklyCadence.map((c) => (
            <li key={c.day}>
              <strong>{c.day}</strong> — {c.block}
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>YouTube & courses</h3>
        <div className="link-cloud">
          {links.youtube.map((l) => (
            <ExtLink key={l.url} href={l.url}>
              {l.name}
            </ExtLink>
          ))}
        </div>
      </div>

      <div className="card">
        <h3>Communities & Discord</h3>
        <div className="link-cloud">
          {links.communities.map((l) => (
            <ExtLink key={l.url} href={l.url}>
              {l.name}
            </ExtLink>
          ))}
        </div>
        <h3>Meetups & volunteering</h3>
        <div className="link-cloud">
          {links.meetups.map((l) => (
            <ExtLink key={l.url} href={l.url}>
              {l.name}
            </ExtLink>
          ))}
        </div>
        <ul>
          {learning.volunteeringTargets.map((v) => (
            <li key={v.name}>
              {v.url ? (
                <ExtLink href={v.url}>{v.name}</ExtLink>
              ) : (
                <strong>{v.name}</strong>
              )}{' '}
              — {v.why}
            </li>
          ))}
        </ul>
      </div>

      <CopyBlock
        label={copyBlocks.learningDigestTemplate.label}
        text={copyBlocks.learningDigestTemplate.text}
        rows={14}
      />
    </Panel>
  )
}
