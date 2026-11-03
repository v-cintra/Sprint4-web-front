import heroIlustracao from '../../assets/img/hero-illustration.svg'
import Botao from '../ui/Botao'
import Container from '../ui/Container'

function Hero() {
  return (
    <section
      id="top"
      className="bg-gradient-to-b from-superficie to-white py-14 md:py-24"
    >
      <Container className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
        <div>
          <h1 className="text-4xl sm:text-5xl">
            Todo o controle da câmera cabe em um gesto.
          </h1>
          <p className="mt-5 text-lg text-cinza">
            O Dynamic Action Button substitui os mais de dez modos da câmera
            por um único botão físico dinâmico. Uma IA de contexto ajusta
            cena, foco e exposição antes do toque — você só decide{' '}
            <em>o quê</em> registrar, nunca <em>como</em> configurar.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Botao as="a" href="#solucao">
              Ver a solução
            </Botao>
            <Botao as="a" href="#contato" variante="secundario">
              Falar com a equipe
            </Botao>
          </div>
        </div>

        <div>
          <img
            src={heroIlustracao}
            alt="Smartphone com o Dynamic Action Button e os gestos de tap, hold e drag ao redor"
            className="mx-auto w-full max-w-md"
          />
        </div>
      </Container>
    </section>
  )
}

export default Hero
