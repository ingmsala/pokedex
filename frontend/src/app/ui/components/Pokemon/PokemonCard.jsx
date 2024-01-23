import LabelTypes from '../PokemonTypes/LabelTypes'

export default function PokemonCard ({ pokemon }) {
  return (
    <div className='flex flex-col justify-center items-center gap-4'>
      <img src={pokemon.image} alt={pokemon.name} className='w-full' />
      <div className='flex flex-col justify-center items-center gap-3'>
        <h2 className='font-semibold text-gray-700 dark:text-gray-300'>{pokemon.name}</h2>
        <p className='text-xs dark:text-gray-300'>Total Stats: {pokemon.totalStats}</p>
        <p className='flex gap-2'>
          {
            pokemon.types.map(pokemonType => (
              <LabelTypes pokemonType={pokemonType} key={pokemonType.type.name} />
            ))
          }
        </p>
      </div>
    </div>
  )
}
