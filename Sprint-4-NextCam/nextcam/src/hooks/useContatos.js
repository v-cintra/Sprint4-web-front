import { useCallback } from 'react'
import { useLocalStorage } from './useLocalStorage'

const CHAVE = 'nextcam_mensagens'

/** Lógica de dados das mensagens de contato (separada da parte visual). */
export function useContatos() {
  const [mensagens, setMensagens] = useLocalStorage(CHAVE, [])

  const adicionar = useCallback(
    (dados) => {
      const nova = {
        ...dados,
        id: Date.now(),
        data: new Date().toLocaleString('pt-BR'),
      }
      setMensagens((atuais) => [nova, ...atuais])
    },
    [setMensagens],
  )

  const remover = useCallback(
    (id) => setMensagens((atuais) => atuais.filter((m) => m.id !== id)),
    [setMensagens],
  )

  const limpar = useCallback(() => setMensagens([]), [setMensagens])

  return { mensagens, adicionar, remover, limpar }
}
