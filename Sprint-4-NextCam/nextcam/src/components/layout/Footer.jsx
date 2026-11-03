import { Link } from 'react-router-dom'
import { LINKS_MENU } from '../../data/links'
import Container from '../ui/Container'

const ANO_ATUAL = new Date().getFullYear()

function Footer() {
  return (
    <footer className="bg-marinho-escuro py-10 text-white">
      <Container className="flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
        <div>
          <p className="text-xl font-extrabold">NextCam</p>
          <p className="mt-1 text-sm text-white/70">
            &copy; {ANO_ATUAL} PrimeNext. Todos os direitos reservados.
          </p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {LINKS_MENU.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="text-sm text-white/80 transition hover:text-coral"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </Container>
    </footer>
  )
}

export default Footer
