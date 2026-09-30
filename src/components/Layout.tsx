import { NavLink, Outlet } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Command Home', end: true },
  { to: '/jobs', label: 'Job Queue', end: false },
  { to: '/apply-kit', label: 'Apply Kit', end: false },
  { to: '/learning', label: 'Learning & XP', end: false },
  { to: '/funding', label: 'Funding & Money', end: false },
  { to: '/bots', label: 'Bot Team', end: false },
  { to: '/credentials', label: 'Credentials', end: false },
  { to: '/recovery', label: 'Recovery Guardian', end: false },
  { to: '/package', label: 'Package Library', end: false },
  { to: '/projects', label: 'Proof Projects', end: false },
]

export function Layout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">LM</div>
          <div>
            <div className="brand-title">Career Leveling Machine</div>
            <div className="brand-sub">ComicCoder23 · liquid ops</div>
          </div>
        </div>
        <nav className="nav">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                isActive ? 'nav-link active' : 'nav-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <p className="sidebar-foot">
          Colourful · curved · orb UI · UK English · TTM showcase-only · contained
        </p>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
