import { useFetch } from '../../hooks/useFetch'
import Container from '../ui/Container'
import EstadoRequisicao from '../ui/EstadoRequisicao'
import CartaoIntegrante from './CartaoIntegrante'

function Equipe() {
  // Integrantes consumidos da API (mock em /api/equipe.json)
  const { dados, carregando, erro } = useFetch('/api/equipe.json')

  return (
    <section id="equipe" className="bg-superficie py-16 md:py-20">
      <Container>
        <h2 className="text-3xl">Nossa Equipe</h2>
        <p className="mt-2 font-semibold text-coral">PrimeNext</p>

        <EstadoRequisicao carregando={carregando} erro={erro}>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {dados?.map((integrante) => (
              <CartaoIntegrante key={integrante.id} {...integrante} />
            ))}
          </div>
        </EstadoRequisicao>
      </Container>
    </section>
  )
}

export default Equipe
