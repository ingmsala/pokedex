import { makeRequest } from '../utils/makeRequest.js'

export class PokemonTypeModel {
  constructor (name, url) {
    this.name = name
    this.url = url
  }

  /**
    * Función para obtener la lista de Tipos de Pokemones
    * @param {number} limit - Cantidad de resultados a obtener
    * @param {number} offset - Cantidad de resultados a omitir
    * @returns {Promise<Array>} - Lista de Tipos de Pokemones
  */
  static async getAll (limit = 50, offset = 0) {
    const response = await makeRequest(`/type?limit=${limit}&offset=${offset}`)
    return response.results.map(({ name, url }) => new PokemonTypeModel(name, url))
  }
}
