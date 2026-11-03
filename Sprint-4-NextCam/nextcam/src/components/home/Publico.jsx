import { useEconomiaTempo } from '../../hooks/useEconomiaTempo'
import { useFetch } from '../../hooks/useFetch'
import Container from '../ui/Container'
import EstadoRequisicao from '../ui/EstadoRequisicao'

function Publico() {
  // Dados consumidos da API (mock em /api/depoimentos.json)
  const { dados, carregando, erro } = useFetch('/api/depoimentos.json')
  const { fotosPorDia, atualizarFotos, segundosPorDia, minutosPorMes } =
    useEconomiaTempo(5)

  return (
    <section id="publico" className="bg-superficie py-16 md:py-20">
      <Container>
        <div className="max-w-3xl">
          <h2 className="text-3xl">Pra quem é o NextCam</h2>
          <p className="mt-4 text-cinza">
            Estudantes Full-time, 18-25 anos, cursando graduação/pós em regime
            integral ou quase integral, conciliando estudo/estágio/trabalho,
            vida social e trajetos longos em transporte público.
          </p>
        </div>

        <EstadoRequisicao carregando={carregando} erro={erro}>
          {dados && (
            <>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {dados.estatisticas.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-marca bg-white p-6 text-center shadow-sm"
                  >
                    <span className="text-4xl font-extrabold text-coral">
                      {item.valor}
                    </span>
                    <p className="mt-2 text-cinza">{item.texto}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                {dados.depoimentos.map((item) => (
                  <blockquote
                    key={item.id}
                    className="rounded-marca border-l-4 border-coral bg-white p-6 shadow-sm"
                  >
                    <p className="italic">&ldquo;{item.texto}&rdquo;</p>
                    <cite className="mt-3 block text-sm font-semibold not-italic text-marinho">
                      {item.autor}
                    </cite>
                  </blockquote>
                ))}
              </div>
            </>
          )}
        </EstadoRequisicao>

        <div className="mt-12 rounded-marca bg-marinho p-6 text-white md:p-10">
          <h3 className="text-2xl text-white">Quanto tempo você economiza?</h3>
          <p className="mt-2 text-white/80">
            Cada foto leva ~4,2s numa câmera tradicional e ~0,8s no NextCam —
            uma economia de 3,4s por clique.
          </p>

          <label
            htmlFor="fotos-por-dia"
            className="mt-6 block text-sm font-semibold"
          >
            Quantas fotos você tira por dia?
            <input
              id="fotos-por-dia"
              type="number"
              min="0"
              value={fotosPorDia}
              onChange={(e) => atualizarFotos(e.target.value)}
              className="mt-1.5 block w-full max-w-[200px] rounded-lg border-0 px-3.5 py-2.5 text-base text-texto outline-none focus:ring-2 focus:ring-coral"
            />
          </label>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-marca bg-white/10 p-4">
              <strong className="block text-3xl text-coral">
                {segundosPorDia}s
              </strong>
              <span className="text-sm text-white/80">economizados por dia</span>
            </div>
            <div className="rounded-marca bg-white/10 p-4">
              <strong className="block text-3xl text-coral">
                {minutosPorMes} min
              </strong>
              <span className="text-sm text-white/80">economizados por mês</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Publico
