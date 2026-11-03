import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import PrivateRoute from './components/routes/PrivateRoute'
import Home from './pages/Home'
import Login from './pages/Login'
import NotFound from './pages/NotFound'
import Painel from './pages/Painel'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Rotas públicas */}
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />

        {/* Rotas privadas */}
        <Route element={<PrivateRoute />}>
          <Route path="painel" element={<Painel />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
