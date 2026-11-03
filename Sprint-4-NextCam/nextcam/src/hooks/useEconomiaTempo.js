import { useMemo, useState } from 'react'

const ECONOMIA_POR_FOTO_SEGUNDOS = 3.4

/** Cálculo do tempo economizado com o NextCam. */
export function useEconomiaTempo(fotosIniciais = 5) {
  const [fotosPorDia, setFotosPorDia] = useState(fotosIniciais)

  const { segundosPorDia, minutosPorMes } = useMemo(
    () => ({
      segundosPorDia: Math.round(fotosPorDia * ECONOMIA_POR_FOTO_SEGUNDOS),
      minutosPorMes: Math.round(
        (fotosPorDia * ECONOMIA_POR_FOTO_SEGUNDOS * 30) / 60,
      ),
    }),
    [fotosPorDia],
  )

  function atualizarFotos(valor) {
    setFotosPorDia(Math.max(0, Number(valor)))
  }

  return { fotosPorDia, atualizarFotos, segundosPorDia, minutosPorMes }
}
