import { useEffect, useState } from 'react'

/**
 * Consome uma API (GET) e devolve { dados, carregando, erro }.
 * Cancela a requisição se o componente for desmontado.
 */
export function useFetch(url) {
  const [estado, setEstado] = useState({
    dados: null,
    carregando: true,
    erro: null,
  })

  useEffect(() => {
    const controle = new AbortController()

    async function buscar() {
      try {
        const resposta = await fetch(url, { signal: controle.signal })
        if (!resposta.ok) throw new Error(`Erro ${resposta.status}`)
        const dados = await resposta.json()
        setEstado({ dados, carregando: false, erro: null })
      } catch (erro) {
        if (erro.name === 'AbortError') return
        setEstado({ dados: null, carregando: false, erro: erro.message })
      }
    }

    buscar()
    return () => controle.abort()
  }, [url])

  return estado
}
