import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Contato from '../components/home/Contato'
import Equipe from '../components/home/Equipe'
import Galeria from '../components/home/Galeria'
import Hero from '../components/home/Hero'
import Publico from '../components/home/Publico'
import Solucao from '../components/home/Solucao'

function Home() {
  const { hash } = useLocation()

  // Rola até a seção indicada no hash (ex.: /#contato) ao navegar pelo menu.
  useEffect(() => {
    const alvo = hash ? document.getElementById(hash.slice(1)) : null
    if (alvo) alvo.scrollIntoView()
    else window.scrollTo(0, 0)
  }, [hash])

  return (
    <>
      <Hero />
      <Solucao />
      <Publico />
      <Galeria />
      <Equipe />
      <Contato />
    </>
  )
}

export default Home
