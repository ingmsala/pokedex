import { useRouter } from 'next/navigation'

export default function Pagination ({ page, next, searchType, searchPokemon }) {
  const router = useRouter()

  /**
   * @description handle next button to go to next page
   */
  const handleNext = () => {
    if (searchType !== -1) return router.push(`/pokemon/type/${searchType}?page=${page + 1}`)
    if (searchPokemon !== null) return router.push(`/pokemon/search/${searchPokemon}?page=${page + 1}`)
    router.push(`/?page=${page + 1}`)
  }

  /**
   * @description handle back button to go to back page
   */
  const handleBack = () => {
    if (searchType !== -1) return router.push(`/pokemon/type/${searchType}?page=${page - 1}`)
    if (searchPokemon !== null) return router.push(`/pokemon/search/${searchPokemon}?page=${page - 1}`)
    router.push(`/?page=${page - 1}`)
  }

  return (
    <section className='flex gap-4'>
      {
        (page > 0)
          ? <button onClick={handleBack} className='px-2 py-1 rounded flex justify-center items-center bg-violet-300 hover:bg-violet-400 dark:bg-slate-900 dark:hover:bg-slate-950'>{'< back'}</button>
          : <button disabled className='px-2 py-1 rounded flex justify-center items-center bg-slate-300 dark:bg-slate-700'>{'< back'}</button>
      }
      {
        (next)
          ? <button onClick={handleNext} className='px-2 py-1 rounded flex justify-center items-center bg-violet-300 hover:bg-violet-400 dark:bg-slate-900 dark:hover:bg-slate-950'>{' next >'}</button>
          : <button disabled className='px-2 py-1 rounded flex justify-center items-center bg-slate-300 dark:bg-slate-700'>{'next >'}</button>
      }

    </section>
  )
}
