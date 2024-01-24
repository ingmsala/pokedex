'use client'
import usePokemonType from '@/app/hooks/pokemonType'
import { useRouter } from 'next/navigation'
import { useRef } from 'react'
import ErrorLoad from '../common/ErrorLoad'
import Loading from '../common/Loading'

export default function PokemonSearchForm ({ searchPokemon, searchType }) {
  const { getAll } = usePokemonType()
  const router = useRouter()
  const inputRef = useRef(null)
  const selectRef = useRef(null)
  const buttonRef = useRef(null)

  const { data: pokemonTypes, error: errorType } = getAll()

  if (errorType) return <ErrorLoad />
  if (!pokemonTypes) return <Loading />

  /**
   * @description handle submit form. If name is not empty, search by name, else search by type
   */
  const handleSubmit = (e) => {
    e.preventDefault()
    const { value: name } = e.target[0]
    const { value: type } = e.target[1]

    if (name === '' && type === '-1') return
    if (name !== '') {
      return router.push(`/pokemon/search/${name.toLowerCase()}`)
    } else {
      if (selectRef.current.value !== '-1') {
        return router.push(`/pokemon/type/${type}`)
      }
    }
  }

  /**
   * @description handle change input. If input is not empty, disable select and set value to null
   */
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

  /**
   * @description handle change select. If select is not empty, disable input and set value to null
   */
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
    <form className='flex gap-4 flex-wrap' onSubmit={handleSubmit}>
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
