import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CommandHome } from './pages/CommandHome'
import { JobQueue } from './pages/JobQueue'
import { ApplyKit } from './pages/ApplyKit'
import { Learning } from './pages/Learning'
import { Funding } from './pages/Funding'
import { BotTeam } from './pages/BotTeam'
import { Credentials } from './pages/Credentials'
import { Recovery } from './pages/Recovery'
import { PackageLibrary } from './pages/PackageLibrary'
import { Projects } from './pages/Projects'
import { JobOps } from './pages/JobOps'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<CommandHome />} />
          <Route path="jobs" element={<JobQueue />} />
          <Route path="apply-kit" element={<ApplyKit />} />
          <Route path="learning" element={<Learning />} />
          <Route path="funding" element={<Funding />} />
          <Route path="bots" element={<BotTeam />} />
          <Route path="credentials" element={<Credentials />} />
          <Route path="recovery" element={<Recovery />} />
          <Route path="package" element={<PackageLibrary />} />
          <Route path="projects" element={<Projects />} />
          <Route path="jobops" element={<JobOps />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
