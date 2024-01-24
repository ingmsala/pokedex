import PokemonAbilities from './PokemonAbilities'

export default function PokemonAbilitiesContainer ({ pokemon }) {
  return (
    <section className='flex flex-col gap-1 w-full'>
      <h3 className='text-sm'>Abilities</h3>
      {
        pokemon.abilities.map(ability => (
          <PokemonAbilities ability={ability} key={ability.ability.name} />
        ))
      }
    </section>
  )
}
