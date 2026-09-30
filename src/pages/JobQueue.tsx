import jobs from '../data/jobs.json'
import links from '../data/links.json'
import copyBlocks from '../data/copyBlocks.json'
import { Panel } from '../components/Panel'
import { StatusChip } from '../components/StatusChip'
import { ExtLink } from '../components/ExtLink'
import { CopyBlock } from '../components/CopyBlock'

export function JobQueue() {
  const digest = jobs.dailyDigestSample
  const js = 'jobSync' in jobs ? jobs.jobSync : null

  return (
    <Panel
      title="Job Queue / JobSync"
      subtitle="Kanban · JobSync status · daily digest design · live boards"
    >
      <div className="liquid-divider" />
      <p className="callout">{jobs.pipelineNote}</p>

      {js ? (
        <div className="card">
          <div className="priority-row">
            <h3 style={{ margin: 0 }}>{js.label}</h3>
            <StatusChip status={js.status} />
          </div>
          <p className="small">
            Tracker:{' '}
            <ExtLink href={js.url}>ComicCoder23/jobsync-tracker</ExtLink>
          </p>
          <p className="muted small">{js.note}</p>
          <p className="tiny">
            Live API: {js.liveApi ? 'yes' : 'not wired yet'}
          </p>
        </div>
      ) : null}

      <div className="card">
        <h3>Application board</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Company</th>
                <th>Title</th>
                <th>Location</th>
                <th>Status</th>
                <th>Next</th>
              </tr>
            </thead>
            <tbody>
              {jobs.applications.map((row) => (
                <tr key={row.id}>
                  <td>
                    {row.company}
                    {row.placeholder ? (
                      <span className="badge">placeholder</span>
                    ) : null}
                  </td>
                  <td>{row.title}</td>
                  <td>{row.location}</td>
                  <td>
                    <StatusChip status={row.status} />
                  </td>
                  <td className="small">{row.nextAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="muted small">Volume target: {jobs.volumeTarget}</p>
      </div>

      <div className="grid-2">
        <div className="card">
          <h3>Daily job updates</h3>
          <p className="muted small">
            {jobs.dailyUpdatesDesign.label ?? 'Design from 07'} — running:{' '}
            {jobs.dailyUpdatesDesign.running ? 'yes' : 'not yet'}
          </p>
          <p className="tiny">
            Schema: {jobs.dailyUpdatesDesign.schema.join(' · ')}
          </p>
          <p>
            <strong>Voice:</strong> {digest.voiceSentence}
          </p>
          <h4>Actions due</h4>
          <ul>
            {digest.actionsDue.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
          <h4>Blockers</h4>
          <ul>
            {digest.blockers.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="muted small">
            Pipeline — Applied {digest.pipelineSnapshot.applied} · Interview{' '}
            {digest.pipelineSnapshot.interview} · Offer{' '}
            {digest.pipelineSnapshot.offer}
          </p>
        </div>

        <div className="card">
          <h3>Targeting</h3>
          <h4>Primary titles</h4>
          <ul>
            {jobs.targeting.primaryTitles.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
          <h4>Geography</h4>
          <ul>
            {jobs.targeting.geography.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="card">
        <h3>Live job boards</h3>
        <div className="link-cloud">
          {links.jobBoards.map((l) => (
            <ExtLink key={l.url} href={l.url}>
              {l.name}
            </ExtLink>
          ))}
        </div>
        <h3>Recruiters</h3>
        <div className="link-cloud">
          {links.recruiters.map((l) => (
            <ExtLink key={l.url} href={l.url}>
              {l.name}
            </ExtLink>
          ))}
        </div>
        <p className="muted small">
          JobSync:{' '}
          <ExtLink href={links.jobsync.url}>{links.jobsync.name}</ExtLink> —{' '}
          {links.jobsync.note}
        </p>
      </div>

      <CopyBlock
        label={copyBlocks.jobDigestTemplate.label}
        text={copyBlocks.jobDigestTemplate.text}
        rows={14}
      />
      <CopyBlock
        label={copyBlocks.recruiterOutreach.label}
        text={copyBlocks.recruiterOutreach.text}
        rows={12}
      />
    </Panel>
  )
}
