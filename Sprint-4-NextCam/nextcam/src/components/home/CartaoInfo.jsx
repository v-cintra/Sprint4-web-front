/** Cartão de título + texto (usado nos benefícios). Recebe tudo via props. */
function CartaoInfo({ titulo, texto }) {
  return (
    <div className="rounded-marca border border-borda bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-marca">
      <h4 className="text-lg">{titulo}</h4>
      <p className="mt-2 text-cinza">{texto}</p>
    </div>
  )
}

export default CartaoInfo
