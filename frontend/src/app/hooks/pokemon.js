'use client'

import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'
import { API_PORT, API_URL, PAGINATION_LIMIT } from '../utils/constants'

export default function usePokemon () {
  /**
    * @param {string} searchName
    * @param {number} searchType
    * @param {number} page
    * @returns {object} { data, error }
    * @description Get list of pokemons. If searchName is not null, search by name. If searchType is not -1, search by type. If not, find all pokemons.
    *
  */
  const getList = (searchName = null, searchType = -1, page = 0) => {
    if (searchName) {
      const { data, error } = useSWR(`${API_URL}:${API_PORT}/pokemon?searchName=${searchName}&offset=${page * PAGINATION_LIMIT}`, fetcher)
      return {
        data,
        error
      }
    }
    if (searchType !== -1) {
      const { data, error } = useSWR(`${API_URL}:${API_PORT}/pokemon/type/${searchType}?offset=${page * PAGINATION_LIMIT}`, fetcher)
      return {
        data,
        error
      }
    }
    const { data, error } = useSWR(`${API_URL}:${API_PORT}/pokemon?offset=${page * PAGINATION_LIMIT}`, fetcher)
    return {
      data,
      error
    }
  }

  /**
   * @param {string} name
   * @returns {object} { data, error }
   * @description Get pokemon by name
   */
  const getByName = (name) => {
    const { data, error } = useSWR(`${API_URL}:${API_PORT}/pokemon/` + name, fetcher)
    return {
      data,
      error
    }
  }

  /**
   * @param {string} type
   * @returns {object} { data, error }
   * @description Get all pokemons by type
  */
  const getAllByType = (type) => {
    const { data, error } = useSWR(`${API_URL}:${API_PORT}/pokemon/type/` + type, fetcher)
    return {
      data,
      error
    }
  }

  return {
    getList,
    getByName,
    getAllByType
  }
}
