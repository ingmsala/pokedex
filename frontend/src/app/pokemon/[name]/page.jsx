'use client'
import PokemonDetails from '@/app/ui/components/Pokemon/PokemonDetails'
import usePokemon from '@/app/hooks/pokemon'
import Loading from '@/app/ui/components/common/Loading'
import ErrorLoad from '@/app/ui/components/common/ErrorLoad'

export default function page ({ params }) {
  const { getByName } = usePokemon()
  const { name } = params
  const { data, error } = getByName(name)

  if (error) return <ErrorLoad />
  if (!data) return <Loading />

  return (
    <div className="flex min-h-screen flex-col items-center justify-between px-4 py-20 md:p-24">
      <PokemonDetails pokemon={data} />
    </div>
  )
}
