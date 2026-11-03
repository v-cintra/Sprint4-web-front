import mockupAntesDepois from '../../assets/img/mockup-antes-depois.svg'
import Container from '../ui/Container'
import CartaoInfo from './CartaoInfo'

const GESTOS = [
  { gesto: 'Tap', funcao: 'Foto instantânea' },
  { gesto: 'Hold', funcao: 'Vídeo contínuo' },
  {
    gesto: 'Drag →',
    funcao: 'Burst mode (rajada de 12 quadros, IA elege o melhor)',
  },
  { gesto: 'Drag ↑', funcao: 'Zoom suave' },
  { gesto: 'Drag ↺', funcao: 'Vídeo em mãos livres (trava a gravação)' },
]

const BENEFICIOS = [
  {
    titulo: 'Ergonomia',
    texto:
      'Um único botão físico ao alcance natural do polegar — sem precisar tirar o olho da cena pra navegar menus.',
  },
  {
    titulo: 'Carga mental',
    texto:
      'Você não perde tempo escolhendo o modo certo. É só apontar e agir: a decisão de "como" fica com o sistema.',
  },
  {
    titulo: 'Habilita a IA',
    texto:
      'O gesto já avisa a intenção — a IA de contexto ajusta cena, foco e exposição antes mesmo do toque.',
  },
]

function Solucao() {
  return (
    <section id="solucao" className="py-16 md:py-20">
      <Container>
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl">O problema</h2>
            <p className="mt-4 text-cinza">
              A câmera do smartphone reúne mais de dez modos — Alta Resolução,
              Panorâmica, Documento em Ultra HD, Câmera Lenta, Astro,
              Profissional e outros — todos numa grade única, sem relação com
              o que o usuário está vivendo no momento. O resultado: tempo
              perdido decidindo como configurar, e o momento que se queria
              registrar passa despercebido.
            </p>
          </div>
          <div>
            <h2 className="text-3xl">A solução</h2>
            <p className="mt-4 text-cinza">
              Um único botão físico dinâmico substitui os mais de dez modos.
              Cinco gestos cobrem tudo o que a câmera precisa fazer, e uma IA
              de contexto ajusta cena, foco e exposição antes do toque — o
              usuário só decide <em>o quê</em> registrar, nunca{' '}
              <em>como</em> configurar. Isso reduz o fluxo de captura de 4
              passos (~4,2s) para 1 passo (~0,8s).
            </p>
          </div>
        </div>

        <img
          src={mockupAntesDepois}
          alt="Comparativo: câmera atual leva 4 passos e cerca de 4,2 segundos, NextCam leva 1 passo e cerca de 0,8 segundos"
          className="mx-auto mt-12 w-full max-w-3xl rounded-marca border border-borda"
        />

        <div className="mt-14">
          <h3 className="text-2xl">Cinco gestos cobrem tudo</h3>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {GESTOS.map((item) => (
              <div
                key={item.gesto}
                className="rounded-marca bg-superficie p-5 text-center"
              >
                <span className="text-xl font-extrabold text-coral">
                  {item.gesto}
                </span>
                <p className="mt-2 text-sm text-cinza">{item.funcao}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {BENEFICIOS.map((item) => (
            <CartaoInfo key={item.titulo} {...item} />
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Solucao
