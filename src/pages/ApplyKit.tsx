import profile from '../data/profile.json'
import copyBlocks from '../data/copyBlocks.json'
import links from '../data/links.json'
import { Panel } from '../components/Panel'
import { CopyBlock } from '../components/CopyBlock'
import { ExtLink } from '../components/ExtLink'
import { ShowcaseStrip } from '../components/ShowcaseStrip'

export function ApplyKit() {
  const fields = [
    ['Full name', profile.fullName],
    ['Email', profile.email],
    ['Phone', profile.phone || profile.phonePlaceholder],
    ['Address', profile.addressLine],
    ['Location for apps', profile.locationForApps],
    ['LinkedIn personal', profile.linkedinPersonal.status],
    ['GitHub', profile.githubUrl],
    ['Right to work', profile.rightToWork],
    ['Availability', profile.availability],
    ['SCN captured', profile.sqa.scnCaptured],
    ['SCN outstanding', profile.sqa.scnOutstanding],
    ['My Quals username', profile.sqa.portalUsername],
  ]

  return (
    <Panel
      title="Apply Kit"
      subtitle="Pre-filled identity · cover note · ATS · education safe line — copy, never auto-send"
    >
      <div className="liquid-divider" />
      <div className="hero">
        <p className="hero-kicker">Apply Kit · pre-filled for ComicCoder23</p>
        <h2>Ready to paste</h2>
        <p className="hero-lead">
          Name, email, address, GitHub, cover note, ATS keywords — copy into
          forms. Never auto-send.
        </p>
        <ShowcaseStrip variant="jobSafe" />
        <p className="showcase-note">Job-panel strip — ComicCoder23 proof only (TTM + Stage Manager excluded here)</p>
      </div>
      <p className="callout">
        Fill forms by copying. Agents do not send email or create LinkedIn
        accounts from this panel.
      </p>

      <div className="card">
        <h3>Pre-filled application fields</h3>
        <dl className="field-grid">
          {fields.map(([k, v]) => (
            <div key={k} className="field-row">
              <dt>{k}</dt>
              <dd>{v}</dd>
            </div>
          ))}
        </dl>
        <div className="link-cloud" style={{ marginTop: '0.75rem' }}>
          <ExtLink href={links.linkedin.personalJoin.url}>
            Create personal LinkedIn
          </ExtLink>
          <ExtLink href={links.linkedin.personalSignin.url}>
            LinkedIn sign in
          </ExtLink>
          <ExtLink href={profile.githubUrl}>GitHub</ExtLink>
          <ExtLink href={links.jobsync.url}>JobSync tracker</ExtLink>
        </div>
      </div>

      <CopyBlock
        label={copyBlocks.applyKitFields.label}
        text={copyBlocks.applyKitFields.text}
        rows={12}
      />
      <CopyBlock
        label={copyBlocks.coverNote.label}
        text={copyBlocks.coverNote.text}
        rows={16}
      />
      <CopyBlock
        label={copyBlocks.cvProfile.label}
        text={copyBlocks.cvProfile.text}
        rows={6}
      />
      <CopyBlock
        label={copyBlocks.atsKeywords.label}
        text={copyBlocks.atsKeywords.text}
        rows={3}
      />
      <CopyBlock
        label={copyBlocks.educationSafeLine.label}
        text={copyBlocks.educationSafeLine.text}
        rows={5}
      />
      <CopyBlock
        label={copyBlocks.recruiterOutreach.label}
        text={copyBlocks.recruiterOutreach.text}
        rows={12}
      />
    </Panel>
  )
}
