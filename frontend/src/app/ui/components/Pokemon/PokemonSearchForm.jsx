'use client'
import usePokemonType from '@/app/hooks/pokemonType'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'

export default function PokemonSearchForm ({ searchPokemon, searchType }) {
  const { getAll } = usePokemonType()
  const router = useRouter()
  const inputRef = useRef(null)
  const selectRef = useRef(null)
  const buttonRef = useRef(null)

  const { data: pokemonTypes, error: errorType } = getAll()

  if (errorType) return <div>Failed to load</div>
  if (!pokemonTypes) {
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 animate-spin">
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
    </svg>
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // lowercase name
    const { value: name } = e.target[0]
    const { value: type } = e.target[1]

    if (name === '' && type === -1) return

    if (name !== '') {
      return router.push(`/pokemon/search/${name.toLowerCase()}`)
    } else {
      if (selectRef.current.value !== -1) {
        return router.push(`/pokemon/type/${type}`)
      }
    }
  }

  const handleChangeInput = (e) => {
    const { value: name } = e.target
    // deshabilitar select y value null cuando name === ''
    if (name !== '') {
      selectRef.current.value = -1
      selectRef.current.disabled = true
      buttonRef.current.disabled = false
    } else {
      selectRef.current.disabled = false
      selectRef.current.value = -1
      buttonRef.current.disabled = true
    }
  }
  const handleChangeSelect = (e) => {
    const { value: name } = e.target
    // deshabilitar select y value null cuando name === ''
    if (name !== -1) {
      inputRef.current.value = ''
      buttonRef.current.disabled = false
    } else {
      inputRef.current.value = ''
      buttonRef.current.disabled = true
    }
  }

  return (
    <form className='flex gap-4' onSubmit={handleSubmit}>
      <input type="text" placeholder="Search Pokemon" className='px-2 rounded border border-gray-300' defaultValue={searchPokemon} onChange={handleChangeInput} ref={inputRef} />
      <select ref={selectRef} onChange={handleChangeSelect} defaultValue={searchType} className='border border-gray-300 rounded'>
        <option key='empty' value={-1}>-</option>
        {pokemonTypes.map(type => (
          <option key={type.name} value={type.name}>{type.name}</option>
        ))}
      </select>
      <button type="submit" aria-label='Search pokemon' ref={buttonRef}
        className='bg-emerald-500 rounded py-1 px-3 text-white hover:bg-emerald-600 dark:bg-gray-900 hover:dark:bg-gray-950'>Search</button>
    </form>
  )
}
