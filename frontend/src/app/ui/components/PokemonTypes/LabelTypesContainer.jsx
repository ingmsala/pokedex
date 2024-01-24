import LabelTypes from './LabelTypes'

export default function LabelTypesContainer ({ pokemon }) {
  return (
    <section className='flex gap-2'>
      {
        pokemon.types.map(pokemonType => (
          <LabelTypes pokemonType={pokemonType} key={pokemonType.type.name} />
        ))
      }
    </section>
  )
}
