import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

/** Protege rotas: sem login, redireciona para /login guardando a origem. */
function PrivateRoute() {
  const { autenticado } = useAuth()
  const local = useLocation()

  if (!autenticado) {
    return <Navigate to="/login" replace state={{ de: local.pathname }} />
  }

  return <Outlet />
}

export default PrivateRoute
