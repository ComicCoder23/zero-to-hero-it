import { HashRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout'
import { CommandHome } from './pages/CommandHome'
import { Learning } from './pages/Learning'
import { Projects } from './pages/Projects'

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<CommandHome />} />
          <Route path="projects" element={<Projects />} />
          <Route path="learning" element={<Learning />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}
