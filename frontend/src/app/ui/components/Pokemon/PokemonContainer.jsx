'use client'
import Link from 'next/link'
import PokemonCard from './PokemonCard'
import usePokemon from '@/app/hooks/pokemon'
import PokemonSearchForm from './PokemonSearchForm'
import { useSearchParams } from 'next/navigation'
import Pagination from './Pagination'
import ErrorLoad from '../common/ErrorLoad'
import Loading from '../common/Loading'
import NoFound from '../common/NoFound'

export default function PokemonContainer ({ searchPokemon = null, searchType = -1 }) {
  const { getList } = usePokemon()
  const searchParams = useSearchParams()

  const page = parseInt(searchParams.get('page')) || 0

  const { data, error } = getList(searchPokemon, searchType, page)

  if (error) return <ErrorLoad />
  if (!data) return <Loading />

  return (
    <main className='flex flex-col justify-center items-center gap-4'>
      <PokemonSearchForm searchPokemon={searchPokemon} searchType={searchType} />

      <Pagination page={page} next={data.next} searchPokemon={searchPokemon} searchType={searchType} />
      <section className='flex flex-wrap gap-2'>
        {
          (data.error)
            ? <NoFound />
            : data.pokemons.map(pokemon => (
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
