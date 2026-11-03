const BASE =
  'inline-flex items-center justify-center rounded-marca border-2 px-7 py-3.5 text-[15px] font-bold transition duration-200'

const VARIANTES = {
  primario:
    'border-transparent bg-coral text-white hover:bg-coral-escuro hover:shadow-marca',
  secundario:
    'border-marinho bg-transparent text-marinho hover:bg-marinho hover:text-white',
}

/** Botão/link estilizado. Use `as` para trocar a tag (ex.: Link, 'a'). */
function Botao({
  as: Tag = 'button',
  variante = 'primario',
  className = '',
  children,
  ...resto
}) {
  const tipo = Tag === 'button' ? { type: 'button', ...resto } : resto
  return (
    <Tag className={`${BASE} ${VARIANTES[variante]} ${className}`} {...tipo}>
      {children}
    </Tag>
  )
}

export default Botao
