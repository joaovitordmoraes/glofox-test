import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Beer } from 'pages/Beer'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/beer/:id" element={<Beer />} />
    </Routes>
  )
}