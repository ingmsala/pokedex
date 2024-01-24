'use client'

import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'
import { API_PORT, API_URL } from '../utils/constants'

export default function usePokemonType () {
  /**
    * @returns {object} { data, error }
    * @description Get list of pokemon types
  */
  const getAll = () => {
    const { data, error } = useSWR(`${API_URL}:${API_PORT}/type`, fetcher)
    return {
      data,
      error
    }
  }

  return {
    getAll
  }
}
