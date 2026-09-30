import packageIndex from '../data/packageIndex.json'
import ossPlugs from '../data/ossPlugs.json'
import { Panel } from '../components/Panel'
import { ExtLink } from '../components/ExtLink'

export function PackageLibrary() {
  return (
    <Panel
      title="Package Library"
      subtitle={`${packageIndex.packagePath} · index + OSS plugs (local study only)`}
    >
      <div className="liquid-divider" />
      <div className="card">
        <h3>ChatGPT plan</h3>
        <p>
          Status: <strong>{packageIndex.chatgptPlan.status}</strong>
        </p>
        <p className="muted small">{packageIndex.chatgptPlan.note}</p>
      </div>

      <div className="card">
        <h3>OSS plugs (local study only, no GitHub write)</h3>
        <p className="callout soft">{ossPlugs.rule}</p>
        <p className="muted small">
          Source: {ossPlugs.source} · count: {ossPlugs.count}
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>License</th>
                <th>How it helps</th>
                <th>Panel</th>
              </tr>
            </thead>
            <tbody>
              {ossPlugs.plugs.map((p) => (
                <tr key={p.id}>
                  <td>
                    <ExtLink href={p.url}>{p.name}</ExtLink>
                  </td>
                  <td className="mono small">{p.license}</td>
                  <td className="small">{p.howItHelps}</td>
                  <td className="small">{p.panel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="card">
        <h3>Files</h3>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>File</th>
                <th>Purpose</th>
              </tr>
            </thead>
            <tbody>
              {packageIndex.files.map((f) => (
                <tr key={f.id}>
                  <td className="mono">{f.id}</td>
                  <td className="mono small">{f.file}</td>
                  <td>{f.purpose}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Panel>
  )
}
