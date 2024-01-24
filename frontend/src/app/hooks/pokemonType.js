'use client'

import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'

export default function usePokemonType () {
  const getAll = () => {
    const { data, error } = useSWR('http://localhost:3000/type', fetcher)
    return {
      data,
      error
    }
  }

  return {
    getAll
  }
}
