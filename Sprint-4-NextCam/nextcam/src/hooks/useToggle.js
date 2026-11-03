import { useCallback, useState } from 'react'

/** Controla um valor booleano (menu aberto/fechado, modal, etc.). */
export function useToggle(inicial = false) {
  const [ativo, setAtivo] = useState(inicial)

  const alternar = useCallback(() => setAtivo((valor) => !valor), [])
  const abrir = useCallback(() => setAtivo(true), [])
  const fechar = useCallback(() => setAtivo(false), [])

  return { ativo, alternar, abrir, fechar }
}
