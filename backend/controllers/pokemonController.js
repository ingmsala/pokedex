// controllers/pokemonController.js
import { PokemonModel } from '../models/pokemon.js'

export const getPokemonListController = async (req, res) => {
  try {
    const { limit, offset, searchName } = req.query
    const pokemonList = await PokemonModel.getPokemonList(limit, offset, searchName)
    if (pokemonList.length === 0) {
      res.json({ error: 'No se encontraron resultados' })
    } else {
      res.json(pokemonList)
    }
  } catch (error) {
    console.error('Error al obtener la lista de Pokemon:', error)
    res.status(500).json({ error: 'Error al obtener la lista de Pokemon' })
  }
}

export const getPokemonListByTypeController = async (req, res) => {
  try {
    const { limit, offset } = req.query
    const { type } = req.params
    const pokemonList = await PokemonModel.getPokemonListByType(limit, offset, type)

    // empty pokemonList

    if (pokemonList.length === 0) {
      res.status(404).json({ error: 'No se encontraron pokemones de ese tipo' })
    } else {
      res.json(pokemonList)
    }
  } catch (error) {
    console.error('Error al obtener la lista de Pokemon:', error)
    res.status(500).json({ error: 'Error al obtener la lista de Pokemon' })
  }
}

export const getPokemonByNameController = async (req, res) => {
  try {
    const { name } = req.params
    const pokemon = await PokemonModel.getPokemonByName(name)
    if (!pokemon) {
      res.status(404).json({ error: 'Pokemon no encontrado' })
    } else {
      res.json(pokemon)
    }
  } catch (error) {
    console.error('Error al obtener los detalles del Pokemon:', error)
    res.status(500).json({ error: 'Error al obtener los detalles del Pokemon' })
  }
}

/* const getPokemonWithDetails = async (pokemonList) => {
  return Promise.all(
    pokemonList.map(async (pokemon) => {
      const details = await getPokemonDetailsByName(pokemon.name)
      return {
        name: pokemon.name,
        stats: details.stats,
        types: details.types,
        image: details.image
      }
    })
  )
}

// Controlador para obtener la lista de Pokemon

export const getPokemonListController = async (req, res) => {
  try {
    const { limit, offset, searchName } = req.query
    const pokemonList = await getPokemonList(limit, offset, searchName)
    const pokemonWithDetails = await getPokemonWithDetails(pokemonList)
    res.json(pokemonWithDetails)
  } catch (error) {
    console.error('Error al obtener la lista de Pokemon:', error)
    res.status(500).json({ error: 'Error al obtener la lista de Pokemon' })
  }
}

export const getPokemonListByTypeController = async (req, res) => {
  try {
    const { limit, offset } = req.query
    const { type } = req.params
    const pokemonList = await getPokemonListByType(limit, offset, type)
    const pokemonWithDetails = await getPokemonWithDetails(pokemonList)
    res.json(pokemonWithDetails)
  } catch (error) {
    console.error('Error al obtener la lista de Pokemon:', error)
    res.status(500).json({ error: 'Error al obtener la lista de Pokemon' })
  }
}

// Controlador para obtener los detalles de un Pokemon por su nombre
export const getPokemonDetailsController = async (req, res) => {
  try {
    const { name } = req.params
    const pokemonDetails = await getPokemonDetailsByName(name)

    const pokemonWithDetails = {
      stats: pokemonDetails.stats,
      types: pokemonDetails.types,
      image: pokemonDetails.sprites.other['official-artwork'].front_default,
      abilities: pokemonDetails.abilities,
      height: pokemonDetails.height / 10 + ' m',
      weight: pokemonDetails.weight / 10 + ' kg'
    }

    res.json(pokemonWithDetails)
  } catch (error) {
    console.error('Error al obtener los detalles del Pokemon:', error)
    res.status(500).json({ error: 'Error al obtener los detalles del Pokemon' })
  }
} */
