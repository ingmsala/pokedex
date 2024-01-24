'use client'

import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'

export default function usePokemon () {
  const getList = (searchName = null, searchType = -1) => {
    if (searchName) {
      const { data, error } = useSWR('http://localhost:3000/pokemon?searchName=' + searchName, fetcher)
      return {
        data,
        error
      }
    }
    if (searchType !== -1) {
      const { data, error } = useSWR('http://localhost:3000/pokemon/type/' + searchType, fetcher)
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
