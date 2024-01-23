// controllers/pokemonController.js
import { PokemonTypeModel } from '../models/pokemonType.js'

// Controlador para obtener la lista de Tipos de Pokemones
export const getTypeListController = async (req, res) => {
  try {
    const { limit, offset } = req.query
    const typeList = await PokemonTypeModel.getAll(limit, offset)

    res.json(typeList)
  } catch (error) {
    console.error('Error al obtener la lista de Tipos de Pokemones:', error)
    res.status(500).json({ error: 'Error al obtener la lista Tipos de Pokemones' })
  }
}
