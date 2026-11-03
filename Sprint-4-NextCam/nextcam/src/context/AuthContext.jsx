import { createContext, useCallback, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null)

// Autenticação simulada (projeto acadêmico, sem back-end).
// Credenciais de teste documentadas no README.
const USUARIOS = [
  { email: 'admin@nextcam.com', senha: 'nextcam123', nome: 'Admin PrimeNext' },
]

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useLocalStorage('nextcam_usuario', null)

  const entrar = useCallback(
    (email, senha) => {
      const encontrado = USUARIOS.find(
        (u) => u.email === email.trim().toLowerCase() && u.senha === senha,
      )
      if (!encontrado) return false
      setUsuario({ email: encontrado.email, nome: encontrado.nome })
      return true
    },
    [setUsuario],
  )

  const sair = useCallback(() => setUsuario(null), [setUsuario])

  const valor = useMemo(
    () => ({ usuario, autenticado: Boolean(usuario), entrar, sair }),
    [usuario, entrar, sair],
  )

  return <AuthContext.Provider value={valor}>{children}</AuthContext.Provider>
}
