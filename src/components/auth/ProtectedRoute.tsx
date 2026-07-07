import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../context/AuthContext'

type ProtectedRouteProps = {
  children: React.ReactNode
  requireAdmin?: boolean
}

export function ProtectedRoute({ children, requireAdmin = false }: ProtectedRouteProps) {
  const { user, loading, isAdmin } = useAuth()
  const location = useLocation()

  if (loading) {
    return (
      <main className="section">
        <div className="container auth-shell">
          <p className="auth-shell__status">Loading…</p>
        </div>
      </main>
    )
  }

  if (!user) {
    return <Navigate to="/auth" replace state={{ from: location.pathname }} />
  }

  if (requireAdmin && !isAdmin) {
    return <Navigate to="/client" replace />
  }

  return children
}
