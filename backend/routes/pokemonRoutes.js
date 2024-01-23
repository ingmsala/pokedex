import { Router } from 'express'
import { getPokemonByNameController, getPokemonListByTypeController, getPokemonListController } from '../controllers/pokemonController.js'

export const routerPokemon = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *   Pokemon:
 *      type: object
 *      properties:
 *        name:
 *           type: string
 *           description: Nombre del Pokemon
 *           example: "bulbasaur"
 *        totalStats:
 *           type: number
 *           description: Suma de las estadísticas del Pokemon
 *           example: 318
 *        stats:
 *           type: array
 *           description: Estadísticas del Pokemon
 *           items:
 *               type: object
 *               properties:
 *                   base_stat:
 *                       type: number
 *                       description: Valor de la estadística
 *                       example: 45
 *                   effort:
 *                       type: number
 *                       description: Esfuerzo necesario para subir la estadística
 *                       example: 0
 *                   stat:
 *                       type: object
 *                       properties:
 *                           name:
 *                               type: string
 *                               description: Nombre de la estadística
 *                               example: "hp"
 *                           url:
 *                               type: string
 *                               description: URL de la estadística
 *                               example: "https://pokeapi.co/api/v2/stat/1/"
 *        types:
 *           type: array
 *           description: Tipos del Pokemon
 *           items:
 *               type: object
 *               properties:
 *                   slot:
 *                       type: number
 *                       description: Posición del tipo
 *                       example: 1
 *                   type:
 *                       type: object
 *                       properties:
 *                           name:
 *                               type: string
 *                               description: Nombre del tipo
 *                               example: "grass"
 *                           url:
 *                               type: string
 *                               description: URL del tipo
 *                               example: "https://pokeapi.co/api/v2/type/12/"
 *        image:
 *           type: string
 *           description: Imagen del Pokemon
 *           example: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
 *        abilities:
 *           type: array
 *           description: Habilidades del Pokemon
 *           items:
 *               type: object
 *               properties:
 *                   ability:
 *                       type: object
 *                       properties:
 *                           name:
 *                               type: string
 *                               description: Nombre de la habilidad
 *                               example: "overgrow"
 *                           url:
 *                               type: string
 *                               description: URL de la habilidad
 *                               example: "https://pokeapi.co/api/v2/ability/65/"
 *                   is_hidden:
 *                       type: boolean
 *                       description: Indica si la habilidad está oculta
 *                       example: false
 *                   slot:
 *                       type: number
 *                       description: Posición de la habilidad
 *                       example: 1
 *      required:
 *          - name
 *          - totalStats
 *          - stats
 *          - types
 *          - image
 *          - abilities
 *      example:
 *          name: "bulbasaur"
 *          totalStats: 318
 *          stats:
 *              - base_stat: 45
 *                effort: 0
 *                stat:
 *                    name: "hp"
 *                    url: "https://pokeapi.co/api/v2/stat/1/"
 *              - base_stat: 49
 *                effort: 0
 *                stat:
 *                    name: "attack"
 *                    url: "https://pokeapi.co/api/v2/stat/2/"
 *              - base_stat: 49
 *                effort: 0
 *                stat:
 *                    name: "defense"
 *                    url: "https://pokeapi.co/api/v2/stat/3/"
 *              - base_stat: 65
 *                effort: 1
 *                stat:
 *                    name: "special-attack"
 *                    url: "https://pokeapi.co/api/v2/stat/4/"
 *              - base_stat: 65
 *                effort: 0
 *                stat:
 *                    name: "special-defense"
 *                    url: "https://pokeapi.co/api/v2/stat/5/"
 *              - base_stat: 45
 *                effort: 0
 *                stat:
 *                    name: "speed"
 *                    url: "https://pokeapi.co/api/v2/stat/6/"
 *          types:
 *              - slot: 1
 *                type:
 *                    name: "grass"
 *                    url: "https://pokeapi.co/api/v2/type/12/"
 *              - slot: 2
 *                type:
 *                    name: "poison"
 *                    url: "https://pokeapi.co/api/v2/type/4/"
 *          image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
 *          abilities:
 *              - ability:
 *                    name: "overgrow"
 *                    url: "https://pokeapi.co/api/v2/ability/65/"
 *                is_hidden: false
 *                slot: 1
 *              - ability:
 *                    name: "chlorophyll"
 *                    url: "https://pokeapi.co/api/v2/ability/34/"
 *                is_hidden: true
 *                slot: 3
 */

/**
 * @swagger
 * tags:
 *  name: Pokemon
 *  description: API endpoints para Pokemon
 */

/**
 * @swagger
 * /pokemon:
 *  get:
 *    summary: Usar para obtener todos los pokemones de la lista o realizar una búsqueda por nombre parcial
 *    tags: [Pokemon]
 *    parameters:
 *     - in: query
 *       name: limit
 *       schema:
 *        type: integer
 *        description: Number of items to return
 *        required: false
 *     - in: query
 *       name: offset
 *       schema:
 *        type: integer
 *        description: Number of items to skip
 *        required: false
 *     - in: query
 *       name: searchName
 *       schema:
 *        type: string
 *        description: Name of the pokemon to search
 *        required: false
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *              $ref: '#/components/schemas/Pokemon'
 *           example:
 *              - name: "bulbasaur"
 *                totalStats: 318
 *                types:
 *                  - slot: 1
 *                    type:
 *                       name: "grass"
 *                       url: "https://pokeapi.co/api/v2/type/12/"
 *                  - slot: 2
 *                    type:
 *                       name: "poison"
 *                       url: "https://pokeapi.co/api/v2/type/4/"
 *                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
 *                abilities:
 *                  - ability:
 *                      name: "overgrow"
 *                      url: "https://pokeapi.co/api/v2/ability/65/"
 *                      is_hidden: false
 *                      slot: 1
 *                  - ability:
 *                      name: "chlorophyll"
 *                      url: "https://pokeapi.co/api/v2/ability/34/"
 *                      is_hidden: true
 *                      slot: 3
 *                weight: 6,9 kg
 *                height: 0,7 m
 *              - name: "ivysaur"
 *                totalStats: 405
 *                types:
 *                  - slot: 1
 *                    type:
 *                       name: "grass"
 *                       url: "https://pokeapi.co/api/v2/type/12/"
 *                  - slot: 2
 *                    type:
 *                       name: "poison"
 *                       url: "https://pokeapi.co/api/v2/type/4/"
 *                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
 *                abilities:
 *                  - ability:
 *                      name: "overgrow"
 *                      url: "https://pokeapi.co/api/v2/ability/65/"
 *                      is_hidden: false
 *                      slot: 1
 *                  - ability:
 *                      name: "chlorophyll"
 *                      url: "https://pokeapi.co/api/v2/ability/34/"
 *                      is_hidden: true
 *                      slot: 3
 *                weight: 6,9 kg
 *                height: 0,7 m
 *      '500':
 *        description: Internal Server Error
 */
routerPokemon.get('/', getPokemonListController)

/**
 * @swagger
 * /pokemon/{name}:
 *  get:
 *    summary: Usar para obtener un pokemon por su nombre
 *    tags: [Pokemon]
 *    parameters:
 *     - in: path
 *       name: name
 *       schema:
 *        type: string
 *        description: Nombre del Pokemon a buscar
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *              $ref: '#/components/schemas/Pokemon'
 *           example:
 *              - name: "bulbasaur"
 *                stats:
 *                   - base_stat: 45
 *                     effort: 0
 *                     stat:
 *                        name: "hp"
 *                        url: "https://pokeapi.co/api/v2/stat/1/"
 *                   - base_stat: 49
 *                     effort: 0
 *                     stat:
 *                        name: "attack"
 *                        url: "https://pokeapi.co/api/v2/stat/2/"
 *                types:
 *                  - slot: 1
 *                    type:
 *                       name: "grass"
 *                       url: "https://pokeapi.co/api/v2/type/12/"
 *                  - slot: 2
 *                    type:
 *                       name: "poison"
 *                       url: "https://pokeapi.co/api/v2/type/4/"
 *                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
 *                abilities:
 *                  - ability:
 *                      name: "overgrow"
 *                      url: "https://pokeapi.co/api/v2/ability/65/"
 *                      is_hidden: false
 *                      slot: 1
 *                  - ability:
 *                      name: "chlorophyll"
 *                      url: "https://pokeapi.co/api/v2/ability/34/"
 *                      is_hidden: true
 *                      slot: 3
 *                weight: 6,9 kg
 *                height: 0,7 m
 *      '404':
 *          description: Not Found
 *          content:
 *             application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 *                     example: "Pokemon no encontrado"
 *
 *      '500':
 *        description: Internal Server Error
 */
routerPokemon.get('/:name', getPokemonByNameController)

/**
 * @swagger
 * /pokemon/type/{type}:
 *  get:
 *    summary: Usar para obtener un listado pokemones por tipo
 *    tags: [Pokemon]
 *    parameters:
  *     - in: query
 *       name: limit
 *       schema:
 *        type: integer
 *        description: Number of items to return
 *        required: false
 *     - in: query
 *       name: offset
 *       schema:
 *        type: integer
 *        description: Number of items to skip
 *        required: false
 *     - in: path
 *       name: type
 *       schema:
 *        type: string
 *        description: Nombre del Pokemon a buscar
 *        required: true
 *    responses:
 *      '200':
 *        description: A successful response
 *        content:
 *         application/json:
 *           schema:
 *             type: array
 *             items:
 *              $ref: '#/components/schemas/Pokemon'
 *           example:
 *              - name: "bulbasaur"
 *                stats:
 *                   - base_stat: 45
 *                     effort: 0
 *                     stat:
 *                        name: "hp"
 *                        url: "https://pokeapi.co/api/v2/stat/1/"
 *                   - base_stat: 49
 *                     effort: 0
 *                     stat:
 *                        name: "attack"
 *                        url: "https://pokeapi.co/api/v2/stat/2/"
 *                types:
 *                  - slot: 1
 *                    type:
 *                       name: "grass"
 *                       url: "https://pokeapi.co/api/v2/type/12/"
 *                  - slot: 2
 *                    type:
 *                       name: "poison"
 *                       url: "https://pokeapi.co/api/v2/type/4/"
 *                image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
 *                abilities:
 *                  - ability:
 *                      name: "overgrow"
 *                      url: "https://pokeapi.co/api/v2/ability/65/"
 *                      is_hidden: false
 *                      slot: 1
 *                  - ability:
 *                      name: "chlorophyll"
 *                      url: "https://pokeapi.co/api/v2/ability/34/"
 *                      is_hidden: true
 *                      slot: 3
 *                weight: 6,9 kg
 *                height: 0,7 m
 *      '404':
 *          description: Not Found
 *          content:
 *             application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                   error:
 *                     type: string
 *                     description: Error message
 *                     example: "No se encontraron pokemones de ese tip"
 *
 *      '500':
 *        description: Internal Server Error
 */
routerPokemon.get('/type/:type', getPokemonListByTypeController)
