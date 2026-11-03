import { Link } from 'react-router-dom'
import Botao from '../components/ui/Botao'
import Container from '../components/ui/Container'

function NotFound() {
  return (
    <Container className="py-24 text-center">
      <h1 className="text-5xl">404</h1>
      <p className="mt-3 text-cinza">Página não encontrada.</p>
      <Botao as={Link} to="/" className="mt-8">
        Voltar ao início
      </Botao>
    </Container>
  )
}

export default NotFound
