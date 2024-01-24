'use client'

import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'
import { PAGINATION_LIMIT } from '../utils/constants'

export default function usePokemon () {
  const getList = (searchName = null, searchType = -1, page = 0) => {
    if (searchName) {
      const { data, error } = useSWR(`http://localhost:3000/pokemon?searchName=${searchName}&offset=${page * PAGINATION_LIMIT}`, fetcher)
      return {
        data,
        error
      }
    }
    if (searchType !== -1) {
      const { data, error } = useSWR(`http://localhost:3000/pokemon/type/${searchType}?offset=${page * PAGINATION_LIMIT}`, fetcher)
      return {
        data,
        error
      }
    }
    const { data, error } = useSWR(`http://localhost:3000/pokemon?offset=${page * PAGINATION_LIMIT}`, fetcher)
    return {
      data,
      error
    }
  }
  const getAll = (searchName = null, searchType = null) => {
    if (searchName) {
      const { data, error } = useSWR('http://localhost:3000/pokemon?searchName=' + searchName, fetcher)
      return {
        data,
        error
      }
    }
    const { data, error } = useSWR('http://localhost:3000/pokemon', fetcher)
    return {
      data,
      error
    }
  }

  const getByName = (name) => {
    const { data, error } = useSWR('http://localhost:3000/pokemon/' + name, fetcher)
    return {
      data,
      error
    }
  }

  const getAllByType = (type) => {
    const { data, error } = useSWR('http://localhost:3000/pokemon/type/' + type, fetcher)
    return {
      data,
      error
    }
  }

  return {
    getList,
    getAll,
    getByName,
    getAllByType
  }
}
