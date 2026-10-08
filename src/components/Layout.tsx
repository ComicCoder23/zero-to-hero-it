import { NavLink, Outlet } from 'react-router-dom'

const NAV = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/learning', label: 'Learning path', end: false },
]

export function Layout() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">ZH</div>
          <div>
            <div className="brand-title">Zero to Hero IT</div>
            <div className="brand-sub">ComicCoder23 · IT support portfolio</div>
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
          Aspiring IT support / help desk · Glasgow / Central Scotland
        </p>
      </aside>
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
