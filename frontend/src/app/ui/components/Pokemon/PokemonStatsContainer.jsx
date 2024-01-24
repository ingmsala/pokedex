import PokemonStats from './PokemonStats'

export default function PokemonStatsContainer ({ pokemon }) {
  return (
    <section className='flex flex-col gap-1 w-full'>
      <h3 className='text-sm'>Statistics</h3>
      {
        pokemon.stats.map(stats => (
          <PokemonStats stats={stats} key={stats.stat.name} />
        ))
      }
    </section>
  )
}
