import LabelTypesContainer from '../PokemonTypes/LabelTypesContainer'
import ButtonBack from './ButtonBack'
import PokemonAbilitiesContainer from './PokemonAbilitiesContainer'
import PokemonMesures from './PokemonMesures'
import PokemonStatsContainer from './PokemonStatsContainer'

export default function PokemonDetails ({ pokemon }) {
  return (
    <div className='relative flex flex-col md:flex-row gap-4 bg-gray-300 dark:bg-gray-900 py-6 justify-center items-center  md:justify-between px-8 rounded-lg min-w-min'>
      <ButtonBack />
      <img src={pokemon.image} alt={pokemon.name} className='w-1/2' />
      <div className='flex flex-1 w-full flex-col justify-center items-center gap-3'>
        <h2 className='font-semibold text-gray-700 dark:text-gray-300 text-2xl uppercase'>{pokemon.name}</h2>
        <LabelTypesContainer pokemon={pokemon} />
        <PokemonMesures pokemon={pokemon} />
        <PokemonAbilitiesContainer pokemon={pokemon} />
        <PokemonStatsContainer pokemon={pokemon} />
        <p className='text-xs dark:text-gray-300'>Total Stats: {pokemon.totalStats}</p>
      </div>
    </div>
  )
}
