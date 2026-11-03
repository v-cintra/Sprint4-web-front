import { useEffect, useState } from 'react'

function ler(chave, valorInicial) {
  try {
    const salvo = localStorage.getItem(chave)
    return salvo ? JSON.parse(salvo) : valorInicial
  } catch {
    return valorInicial
  }
}

/** Estado React sincronizado com o localStorage. */
export function useLocalStorage(chave, valorInicial) {
  const [valor, setValor] = useState(() => ler(chave, valorInicial))

  useEffect(() => {
    try {
      localStorage.setItem(chave, JSON.stringify(valor))
    } catch {
      // armazenamento indisponível (modo privado, cota cheia): segue só em memória
    }
  }, [chave, valor])

  return [valor, setValor]
}
