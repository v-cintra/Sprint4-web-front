import { useState } from 'react'
import { useContatos } from '../../hooks/useContatos'
import { useFormulario } from '../../hooks/useFormulario'
import Botao from '../ui/Botao'
import Campo from '../ui/Campo'
import Container from '../ui/Container'

const VALORES_INICIAIS = { nome: '', email: '', mensagem: '' }

function Contato() {
  const { valores, handleChange, resetar } = useFormulario(VALORES_INICIAIS)
  const { adicionar } = useContatos()
  const [enviado, setEnviado] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    adicionar(valores)
    resetar()
    setEnviado(true)
  }

  return (
    <section id="contato" className="py-16 md:py-20">
      <Container className="max-w-2xl">
        <h2 className="text-3xl">Contato</h2>
        <p className="mt-2 text-cinza">Manda sua mensagem pra equipe PrimeNext.</p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-4">
          <Campo
            label="Nome"
            name="nome"
            value={valores.nome}
            onChange={handleChange}
            required
          />
          <Campo
            label="E-mail"
            type="email"
            name="email"
            value={valores.email}
            onChange={handleChange}
            required
          />
          <Campo
            label="Mensagem"
            as="textarea"
            name="mensagem"
            rows="4"
            value={valores.mensagem}
            onChange={handleChange}
            required
          />

          <Botao type="submit" className="w-full sm:w-auto">
            Enviar mensagem
          </Botao>

          {enviado && (
            <p role="status" className="text-sm font-semibold text-green-700">
              Mensagem enviada! A equipe PrimeNext vai receber no painel.
            </p>
          )}
        </form>
      </Container>
    </section>
  )
}

export default Contato
