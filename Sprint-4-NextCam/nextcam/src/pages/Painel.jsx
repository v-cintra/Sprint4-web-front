import Botao from '../components/ui/Botao'
import Container from '../components/ui/Container'
import { useAuth } from '../hooks/useAuth'
import { useContatos } from '../hooks/useContatos'

function Painel() {
  const { usuario } = useAuth()
  const { mensagens, remover, limpar } = useContatos()

  return (
    <section className="min-h-[70vh] bg-superficie py-12 md:py-16">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-3xl">Painel de contatos</h1>
            <p className="mt-1 text-cinza">
              Olá, {usuario.nome}. {mensagens.length} mensagem(ns) recebida(s).
            </p>
          </div>
          {mensagens.length > 0 && (
            <Botao variante="secundario" onClick={limpar} className="py-2.5">
              Limpar todas
            </Botao>
          )}
        </div>

        {mensagens.length === 0 ? (
          <p className="mt-10 rounded-marca bg-white p-8 text-center text-cinza">
            Nenhuma mensagem recebida ainda. Envie uma pelo formulário de
            contato da página inicial.
          </p>
        ) : (
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {mensagens.map((msg) => (
              <li
                key={msg.id}
                className="rounded-marca border border-borda bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <strong className="text-marinho">{msg.nome}</strong>
                  <span className="text-xs text-cinza">{msg.data}</span>
                </div>
                <p className="text-sm font-semibold text-coral">{msg.email}</p>
                <p className="mt-3 whitespace-pre-line break-words">
                  {msg.mensagem}
                </p>
                <button
                  type="button"
                  onClick={() => remover(msg.id)}
                  className="mt-4 text-sm font-semibold text-red-600 hover:underline"
                >
                  Excluir
                </button>
              </li>
            ))}
          </ul>
        )}
      </Container>
    </section>
  )
}

export default Painel
