export default function LabelTypes ({ pokemonType }) {
  return (
    <span key={pokemonType.type.name}
      className='px-2 py-1 bg-pink-300/80 dark:bg-gray-950 dark:text-gray-300 rounded-full text-xs'>
      {pokemonType.type.name}
    </span>
  )
}
