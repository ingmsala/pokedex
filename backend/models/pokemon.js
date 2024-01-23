import { makeRequest } from '../utils/makeRequest.js'
import { convertDecimetersToMeters, convertHectogramsToKilograms } from '../utils/mesures.js'

const getPokemonWithDetails = async (pokemonList) => {
  return Promise.all(
    pokemonList.map(async (pokemon) => {
      const details = await PokemonModel.getPokemonByName(pokemon.name)
      return {
        name: details.name,
        totalStats: totalStats(details.stats),
        stats: details.stats,
        types: details.types,
        image: details.image
      }
    })
  )
}

const totalStats = (stats) => {
  return stats.reduce((total, stat) => total + stat.base_stat, 0)
}

export class PokemonModel {
  /**
   * Función para obtener la lista de Pokemon
   * @param {number} limit - Cantidad de resultados a obtener
   * @param {number} offset - Cantidad de resultados a omitir
   * @param {string} searchName - Nombre del Pokemon a buscar
   * @returns {Promise<Array>} - Lista de Pokemon
  */
  static getPokemonList = async (limit = 20, offset = 0, searchName = null) => {
    let pokemonList = []
    if (searchName) {
      const response = await makeRequest('/pokemon?offset=0&limit=10000')
      const matchingPokemon = response.results.filter(
        (pokemon) => pokemon.name.includes(searchName)
      )
      pokemonList = matchingPokemon.slice(offset, offset + limit)
    } else {
      const res = await makeRequest(`/pokemon?limit=${limit}&offset=${offset}`)
      pokemonList = res.results
    }

    if (pokemonList.length === 0) {
      return []
    }
    const pokemonListPaginated = await getPokemonWithDetails(pokemonList)
    return pokemonListPaginated
  }

  /**
    * Función para obtener la lista de Pokemon por tipo
    * @param {number} limit - Cantidad de resultados a obtener
    * @param {number} offset - Cantidad de resultados a omitir
    * @param {string} type - Tipo de Pokemon a buscar
    * @returns {Promise<Array>} - Lista de Pokemon por tipo
  */
  static getPokemonListByType = async (limit = 20, offset = 0, type = null) => {
    try {
      const response = await makeRequest(`/type/${type}?limit=${limit}&offset=${offset}`)
      const pokemonList = response.pokemon.map((data) => data.pokemon)
      const pokemonListPaginated = pokemonList.slice(offset, offset + limit)
      const pokemonListPaginatedDetails = await getPokemonWithDetails(pokemonListPaginated)
      return pokemonListPaginatedDetails
    } catch (error) {
      return []
    }
  }

  /**
    * Función para obtener los detalles de un Pokemon por su nombre
    * @param {string} name - Nombre del Pokemon a buscar
    * @returns {Promise<Object>} - Detalles del Pokemon
  */
  static getPokemonByName = async (name) => {
    try {
      const pokemon = await makeRequest(`/pokemon/${name}`)
      const pokemonWithDetails = {
        name: pokemon.name,
        totalStats: totalStats(pokemon.stats),
        stats: pokemon.stats,
        types: pokemon.types,
        image: pokemon.sprites.other['official-artwork'].front_default,
        abilities: pokemon.abilities,
        height: convertDecimetersToMeters(pokemon.height),
        weight: convertHectogramsToKilograms(pokemon.weight)
      }
      return pokemonWithDetails
    } catch (error) {
      return null
    }
  }
}
