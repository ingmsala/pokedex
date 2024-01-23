'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

export default function PokemonContainer () {
  const [pokemonList, setPokemonList] = useState([])

  useEffect(() => {
    // fetch data from api

    const fetchingData = async () => {
      const res = await fetch(process.env.API_URL || 'http://localhost:3000/pokemon')
      const data = await res.json()
      console.log(process.env.API_URL)
      setPokemonList(data)
    }

    fetchingData()
  }, [])

  return (
    <section className='flex flex-wrap gap-2'>

      {
        pokemonList.map(pokemon => (
          <Link href={`/pokemon/${pokemon.name}`} key={pokemon.name}
            className='flex flex-col gap-4 w-64 bg-gray-200 rounded shadow-md hover:ring-2 hover:ring-gray-500 p-4 dark:bg-gray-900/70'>
            <PokemonCard pokemon={pokemon} />
          </Link>
        ))
      }

    </section>
  )
}
