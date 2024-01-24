export default function PokemonMesures ({ pokemon }) {
  return (
    <section className='flex justify-between gap-4'>
      <p>
        <span className='text-sm'>Height: </span>
        <span className='text-xs dark:text-gray-300'>{pokemon.height}</span>
      </p>
      <p>
        <span className='text-sm'>Weight: </span>
        <span className='text-xs dark:text-gray-300'>{pokemon.weight}</span>
      </p>

    </section>
  )
}
