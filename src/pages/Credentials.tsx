import sqa from '../data/sqa.json'
import linkedin from '../data/linkedin.json'
import profile from '../data/profile.json'
import links from '../data/links.json'
import copyBlocks from '../data/copyBlocks.json'
import { Panel } from '../components/Panel'
import { StatusChip } from '../components/StatusChip'
import { ExtLink } from '../components/ExtLink'
import { CopyBlock } from '../components/CopyBlock'

export function Credentials() {
  const merge = sqa.mergeStatus
  const recruiter =
    'recruiterPass' in linkedin.personal
      ? linkedin.personal.recruiterPass
      : null
  const portalLinks =
    'portalLinks' in sqa ? sqa.portalLinks : links.sqa.map((l) => ({ label: l.name, url: l.url }))

  return (
    <Panel
      title="Credentials & Identity"
      subtitle="SQA dual status · LinkedIn personal draft · recruiter pass · education safe line"
    >
      <div className="liquid-divider" />
      <div className="card">
        <h3>SQA dual accounts</h3>
        <p className="callout soft">{sqa.educationSafeLine}</p>
        <div className="grid-2">
          {sqa.accounts.map((a, i) => (
            <div key={`${a.status}-${i}`} className="mini-card">
              <div className="priority-row">
                <strong>SCN {a.scn || '[redacted]'}</strong>
                <StatusChip status={a.status} />
              </div>
              <p className="small">{a.summary}</p>
              <p className="tiny">Package: {a.packageFile}</p>
              {a.highlights.length > 0 ? (
                <ul>
                  {a.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
        <div className="priority-row" style={{ marginTop: '0.75rem' }}>
          <strong>Merge status</strong>
          <StatusChip
            status={
              'status' in merge
                ? (merge.status as string)
                : 'unknown'
            }
          />
        </div>
        <p className="muted small">
          {String(merge.source)} — {String(merge.note)}
        </p>
        <p className="tiny">{String(merge.actionForAgents)}</p>
        {'stillOpen' in merge && Array.isArray(merge.stillOpen) ? (
          <ul>
            {(merge.stillOpen as string[]).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        ) : null}
        <h4>Next steps</h4>
        <ul>
          {sqa.nextSteps.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
        <div className="link-cloud">
          {portalLinks.map((l: { label?: string; name?: string; url: string }) => (
            <ExtLink key={l.url} href={l.url}>
              {l.label ?? l.name}
            </ExtLink>
          ))}
        </div>
        <p className="tiny">
          Portal username: <code>{profile.sqa.portalUsername}</code> · SCNs:{' '}
          {profile.sqa.scnCaptured} + {profile.sqa.scnOutstanding}
        </p>
      </div>

      <div className="card">
        <h3>LinkedIn — personal (jobs)</h3>
        <div className="priority-row">
          <strong>{linkedin.personal.headline}</strong>
          <StatusChip status={linkedin.personal.status} />
        </div>
        <p>
          Account created:{' '}
          {linkedin.personal.accountCreated ? 'yes' : 'no — draft only'}
        </p>
        {recruiter ? (
          <div className="priority-row">
            <span className="small">Recruiter pass</span>
            <StatusChip status={recruiter.status} />
          </div>
        ) : null}
        {recruiter ? (
          <p className="muted small">{recruiter.note}</p>
        ) : null}
        <p className="muted small">{linkedin.personal.signupNote}</p>
        <p className="small">Draft file: {linkedin.personal.draftFile}</p>
        <div className="link-cloud">
          <ExtLink href={links.linkedin.personalJoin.url}>
            {links.linkedin.personalJoin.name}
          </ExtLink>
          <ExtLink href={links.linkedin.personalSignin.url}>
            {links.linkedin.personalSignin.name}
          </ExtLink>
        </div>
        <h4>Hard ban on personal profile</h4>
        <ul>
          {linkedin.personal.hardBan.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h3>TTM LinkedIn (separate)</h3>
        <p className="callout">
          {linkedin.ttmProfile.note} — {linkedin.ttmProfile.action}
        </p>
        {linkedin.ttmProfile.url ? (
          <ExtLink href={linkedin.ttmProfile.url}>
            linkedin.com/in/{linkedin.ttmProfile.urlSlug} (TTM — do not merge)
          </ExtLink>
        ) : (
          <p className="muted small">
            TTM LinkedIn URL redacted in the public demo — keep profiles
            separate; do not merge.
          </p>
        )}
        <p className="muted small">{linkedin.separationRule}</p>
      </div>

      <CopyBlock
        label={copyBlocks.linkedinHeadline.label}
        text={copyBlocks.linkedinHeadline.text}
        rows={2}
      />
      <CopyBlock
        label={copyBlocks.linkedinAbout.label}
        text={copyBlocks.linkedinAbout.text}
        rows={12}
      />
      <CopyBlock
        label={copyBlocks.linkedinExperience.label}
        text={copyBlocks.linkedinExperience.text}
        rows={18}
      />
      <CopyBlock
        label={copyBlocks.educationSafeLine.label}
        text={copyBlocks.educationSafeLine.text}
        rows={5}
      />
    </Panel>
  )
}
