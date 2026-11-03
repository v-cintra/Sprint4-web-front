import { useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Botao from '../components/ui/Botao'
import Campo from '../components/ui/Campo'
import Container from '../components/ui/Container'
import { useAuth } from '../hooks/useAuth'
import { useFormulario } from '../hooks/useFormulario'

function Login() {
  const { autenticado, entrar } = useAuth()
  const { valores, handleChange } = useFormulario({ email: '', senha: '' })
  const [erro, setErro] = useState('')
  const navegar = useNavigate()
  const local = useLocation()
  const destino = local.state?.de ?? '/painel'

  if (autenticado) return <Navigate to={destino} replace />

  function handleSubmit(e) {
    e.preventDefault()
    if (entrar(valores.email, valores.senha)) {
      navegar(destino, { replace: true })
    } else {
      setErro('E-mail ou senha incorretos.')
    }
  }

  return (
    <section className="min-h-[70vh] bg-superficie py-16 md:py-24">
      <Container className="max-w-md">
        <div className="rounded-marca border border-borda bg-white p-8 shadow-marca">
          <h1 className="text-2xl">Área restrita</h1>
          <p className="mt-2 text-sm text-cinza">
            Entre para ver as mensagens enviadas pelo formulário de contato.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <Campo
              label="E-mail"
              type="email"
              name="email"
              autoComplete="username"
              value={valores.email}
              onChange={handleChange}
              required
            />
            <Campo
              label="Senha"
              type="password"
              name="senha"
              autoComplete="current-password"
              value={valores.senha}
              onChange={handleChange}
              required
            />

            {erro && (
              <p role="alert" className="text-sm font-semibold text-red-600">
                {erro}
              </p>
            )}

            <Botao type="submit" className="w-full">
              Entrar
            </Botao>
          </form>
        </div>
      </Container>
    </section>
  )
}

export default Login
