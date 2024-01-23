export default function PokemonStats ({ stats }) {
  return (
    <span key={stats.stat.name}
      className='px-2 py-1 bg-orange-400/50 dark:bg-gray-950 dark:text-gray-300 rounded text-xs flex justify-between w-full'>
      <span className="uppercase">{stats.stat.name}</span>
      <span>{stats.base_stat}</span>
    </span>
  )
}
