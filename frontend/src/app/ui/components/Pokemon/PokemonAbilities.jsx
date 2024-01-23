export default function PokemonAbilities ({ ability }) {
  return (
    <span key={ability.ability.name}
      className='px-2 py-1 bg-teal-600/50 dark:bg-gray-950 dark:text-gray-300 rounded text-xs flex justify-between w-full'>
      <span className="uppercase">{ability.ability.name}</span>
      <span>{(ability.is_hidden) && 'Hidden'}</span>
    </span>
  )
}
