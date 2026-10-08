import learning from '../data/learning.json'
import links from '../data/links.json'
import { Panel } from '../components/Panel'
import { ExtLink } from '../components/ExtLink'
import { ShowcaseStrip } from '../components/ShowcaseStrip'

export function Learning() {
  return (
    <Panel
      title="Learning path"
      subtitle="Help desk / 1st line focus · study plan · courses · communities"
    >
      <div className="liquid-divider" />
      <ShowcaseStrip />
      <div className="grid-2">
        <div className="card">
          <h3>Current focus</h3>
          <p className="stat">Level {learning.currentFocusLevel}</p>
          <p>IT Help Desk / 1st Line (primary target)</p>
        </div>
        <div className="card">
          <h3>How I learn</h3>
          <p className="small">{learning.approach}</p>
        </div>
      </div>

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
              <p className="tiny">Next step: {lv.unlock}</p>
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
                Weeks {w.weeks}: {w.title}
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
        <h3>Weekly routine</h3>
        <ul className="cadence">
          {learning.weeklyCadence.map((c) => (
            <li key={c.day}>
              <strong>{c.day}</strong>: {c.block}
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
        <h3>Meetups & volunteering I'm looking at</h3>
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
              )}
              : {v.why}
            </li>
          ))}
        </ul>
      </div>
    </Panel>
  )
}
