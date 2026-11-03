/** Feedback visual de carregamento/erro para dados vindos da API. */
function EstadoRequisicao({ carregando, erro, children }) {
  if (carregando) {
    return (
      <p role="status" className="py-8 text-center text-cinza">
        Carregando...
      </p>
    )
  }
  if (erro) {
    return (
      <p role="alert" className="py-8 text-center text-red-600">
        Não foi possível carregar os dados ({erro}).
      </p>
    )
  }
  return children
}

export default EstadoRequisicao
