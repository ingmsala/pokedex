'use client'
import PokemonContainer from '@/app/ui/components/Pokemon/PokemonContainer'

export default function page ({ params }) {
  const { name } = params

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-4 py-20 md:p-24">
      <PokemonContainer searchPokemon={name} />
    </div>
  )
}
