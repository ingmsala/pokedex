'use client'
import PokemonDetails from '@/app/ui/components/Pokemon/PokemonDetails'
import { useEffect, useState } from 'react'

export default function page ({ params }) {
  const [pokemon, setPokemon] = useState({})
  const { name } = params
  useEffect(() => {
    const fetchingData = async () => {
      const res = await fetch(process.env.API_URL || 'http://localhost:3000/pokemon/' + name)
      const data = await res.json()
      setPokemon(data)
      console.log(data)
    }

    fetchingData()
  }, [])

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <PokemonDetails pokemon={pokemon} />
    </div>
  )
}
