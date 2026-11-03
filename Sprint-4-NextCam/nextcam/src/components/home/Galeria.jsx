import mockupGestos from '../../assets/img/mockup-gestures.svg'
import mockupAntesDepois from '../../assets/img/mockup-antes-depois.svg'
import mockupBurst from '../../assets/img/mockup-burst.svg'
import mockupErgonomia from '../../assets/img/mockup-ergonomia.svg'
import Container from '../ui/Container'

const MOCKUPS = [
  { src: mockupGestos, legenda: 'Os cinco gestos do Dynamic Action Button' },
  {
    src: mockupAntesDepois,
    legenda: 'Comparativo: 4 passos (~4,2s) vs. 1 passo (~0,8s)',
  },
  {
    src: mockupBurst,
    legenda: 'Burst mode: rajada de 12 quadros, a IA elege o melhor',
  },
  { src: mockupErgonomia, legenda: 'Ergonomia: alcance natural do polegar' },
]

function Galeria() {
  return (
    <section id="galeria" className="py-16 md:py-20">
      <Container>
        <h2 className="text-3xl">Galeria</h2>

        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          {MOCKUPS.map((item) => (
            <figure
              key={item.legenda}
              className="overflow-hidden rounded-marca border border-borda bg-white shadow-sm transition hover:shadow-marca"
            >
              <img src={item.src} alt={item.legenda} className="w-full" />
              <figcaption className="p-4 text-sm text-cinza">
                {item.legenda}
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}

export default Galeria
