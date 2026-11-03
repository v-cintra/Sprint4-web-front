const CLASSES_CAMPO =
  'mt-1.5 w-full rounded-lg border border-borda bg-white px-3.5 py-2.5 text-base font-normal text-texto outline-none transition focus:border-marinho focus:ring-2 focus:ring-marinho/20'

/** Label + input/textarea reutilizável. */
function Campo({ label, as: Tag = 'input', ...resto }) {
  return (
    <label className="block text-sm font-semibold text-texto">
      {label}
      <Tag className={CLASSES_CAMPO} {...resto} />
    </label>
  )
}

export default Campo
