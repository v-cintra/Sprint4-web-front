import { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/img/favicon.svg'
import { LINKS_MENU } from '../../data/links'
import { useAuth } from '../../hooks/useAuth'
import { useToggle } from '../../hooks/useToggle'
import Container from '../ui/Container'

const CLASSE_LINK =
  'block px-1 py-3 text-[15px] font-semibold text-texto transition hover:text-coral md:py-1'

function Header() {
  const menu = useToggle(false)
  const { autenticado, sair } = useAuth()

  return (
    <header className="sticky top-0 z-50 border-b border-borda bg-white/95 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link
          to="/#top"
          onClick={menu.fechar}
          className="flex items-center gap-2.5 text-xl font-extrabold text-marinho"
        >
          <img src={logo} alt="" width="32" height="32" />
          <span>NextCam</span>
        </Link>

        <nav
          aria-label="Principal"
          className={`absolute inset-x-0 top-16 border-b border-borda bg-white px-6 pb-4 shadow-marca md:static md:block md:border-0 md:bg-transparent md:p-0 md:shadow-none ${
            menu.ativo ? 'block' : 'hidden'
          }`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-7">
            {LINKS_MENU.map((link) => (
              <li key={link.to}>
                <Link to={link.to} onClick={menu.fechar} className={CLASSE_LINK}>
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              {autenticado ? (
                <div className="flex items-center gap-4">
                  <NavLink
                    to="/painel"
                    onClick={menu.fechar}
                    className={`${CLASSE_LINK} text-marinho`}
                  >
                    Painel
                  </NavLink>
                  <button
                    type="button"
                    onClick={() => {
                      sair()
                      menu.fechar()
                    }}
                    className="text-sm font-semibold text-cinza hover:text-coral"
                  >
                    Sair
                  </button>
                </div>
              ) : (
                <NavLink
                  to="/login"
                  onClick={menu.fechar}
                  className="mt-2 inline-flex rounded-marca border-2 border-marinho px-4 py-1.5 text-sm font-bold text-marinho transition hover:bg-marinho hover:text-white md:mt-0"
                >
                  Área restrita
                </NavLink>
              )}
            </li>
          </ul>
        </nav>

        <button
          type="button"
          aria-label={menu.ativo ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menu.ativo}
          onClick={menu.alternar}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
        >
          <span
            className={`h-0.5 w-6 bg-marinho transition ${menu.ativo ? 'translate-y-2 rotate-45' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-marinho transition ${menu.ativo ? 'opacity-0' : ''}`}
          />
          <span
            className={`h-0.5 w-6 bg-marinho transition ${menu.ativo ? '-translate-y-2 -rotate-45' : ''}`}
          />
        </button>
      </Container>
    </header>
  )
}

export default Header
