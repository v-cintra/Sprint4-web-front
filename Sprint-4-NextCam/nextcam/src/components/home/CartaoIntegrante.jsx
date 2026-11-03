/** Cartão de integrante da equipe, alimentado via props. */
function CartaoIntegrante({ nome, rm, frente }) {
  return (
    <div className="rounded-marca border border-borda bg-white p-6 text-center shadow-sm">
      <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-marinho text-2xl font-bold text-white">
        {nome.charAt(0)}
      </span>
      <h3 className="mt-4 text-lg">{nome}</h3>
      <p className="mt-1 text-sm font-semibold text-coral">
        Engenheiro de Software
      </p>
      {frente && <p className="mt-2 text-sm text-cinza">{frente}</p>}
      <p className="mt-3 text-xs font-semibold text-cinza">RM {rm}</p>
    </div>
  )
}

export default CartaoIntegrante
