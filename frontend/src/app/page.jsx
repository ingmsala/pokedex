import PokemonContainer from './ui/components/Pokemon/PokemonContainer'

export default function Home () {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-4 py-20 md:p-24">
      <PokemonContainer />
    </main>
  )
}
