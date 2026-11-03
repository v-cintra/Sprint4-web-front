import { useState } from 'react'

/** Formulário controlado genérico: valores, handleChange e reset. */
export function useFormulario(valoresIniciais) {
  const [valores, setValores] = useState(valoresIniciais)

  function handleChange(e) {
    const { name, value } = e.target
    setValores((anteriores) => ({ ...anteriores, [name]: value }))
  }

  function resetar() {
    setValores(valoresIniciais)
  }

  return { valores, handleChange, resetar }
}
