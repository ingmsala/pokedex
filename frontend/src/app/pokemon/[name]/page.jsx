'use client'
import PokemonDetails from '@/app/ui/components/Pokemon/PokemonDetails'
import usePokemon from '@/app/hooks/pokemon'

export default function page ({ params }) {
  const { getByName } = usePokemon()
  const { name } = params
  const { data, error } = getByName(name)

  if (error) return <div>Failed to load</div>
  if (!data) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-between px-4 py-20 md:p-24">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 animate-spin">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
        </svg>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-4 py-20 md:p-24">
      <PokemonDetails pokemon={data} />
    </div>
  )
}
