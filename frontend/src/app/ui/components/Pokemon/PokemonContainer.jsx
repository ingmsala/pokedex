'use client'
import Link from 'next/link'
import PokemonCard from './PokemonCard'
import usePokemon from '@/app/hooks/pokemon'
import PokemonSearchForm from './PokemonSearchForm'

export default function PokemonContainer ({ searchPokemon = null, searchType = -1 }) {
  const { getList } = usePokemon()

  const { data, error } = getList(searchPokemon, searchType)

  if (error) return <div>Failed to load</div>
  if (!data) {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 animate-spin">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  }

  return (
    <main className='flex flex-col justify-center items-center gap-4'>
      <PokemonSearchForm searchPokemon={searchPokemon} searchType={searchType} />
      <section className='flex flex-wrap gap-2'>
        {
          (data.error)
            ? <div className='text-2xl'>No se encontraron resultados</div>
            : data.map(pokemon => (
              <Link href={`/pokemon/${pokemon.name}`} key={pokemon.name}
                className='flex flex-col gap-4 w-64 bg-gray-200 rounded shadow-md hover:ring-2 hover:ring-gray-500 p-4 dark:bg-gray-900/70'>
                <PokemonCard pokemon={pokemon} />
              </Link>
            ))
        }

      </section>
    </main>

  )
}
