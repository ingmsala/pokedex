import LabelTypes from '../PokemonTypes/LabelTypes'
import ButtonBack from './ButtonBack'
import PokemonAbilities from './PokemonAbilities'
import PokemonStats from './PokemonStats'

export default function PokemonDetails ({ pokemon }) {
  return (
    <div className='relative flex flex-col md:flex-row gap-4 bg-gray-300 dark:bg-gray-900 py-6 justify-center items-center  md:justify-between px-8 rounded-lg min-w-min'>
      <ButtonBack />
      <img src={pokemon.image} alt={pokemon.name} className='w-1/2' />
      <div className='flex flex-1 w-full flex-col justify-center items-center gap-3'>
        <h2 className='font-semibold text-gray-700 dark:text-gray-300 text-2xl uppercase'>{pokemon.name}</h2>
        <section className='flex gap-2'>
          {
            pokemon.types.map(pokemonType => (
              <LabelTypes pokemonType={pokemonType} key={pokemonType.type.name} />
            ))
          }
        </section>
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
        <section className='flex flex-col gap-1 w-full'>
          <h3 className='text-sm'>Abilities</h3>
          {
            pokemon.abilities.map(ability => (
              <PokemonAbilities ability={ability} key={ability.ability.name} />
            ))
          }
        </section>

        <section className='flex flex-col gap-1 w-full'>
          <h3 className='text-sm'>Statistics</h3>
          {
            pokemon.stats.map(stats => (
              <PokemonStats stats={stats} key={stats.stat.name} />
            ))
          }
        </section>
        <p className='text-xs dark:text-gray-300'>Total Stats: {pokemon.totalStats}</p>
      </div>
    </div>
  )
}
