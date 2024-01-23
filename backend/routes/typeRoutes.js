import { Router } from 'express'
import { getTypeListController } from '../controllers/typeController.js'

export const routerType = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *      Type:
 *         type: object
 *         properties:
 *           name:
 *             type: string
 *           url:
 *             type: string
 *         required:
 *            - name
 *            - url
 *         example:
 *           name: "normal"
 *           url: "https://pokeapi.co/api/v2/type/1/"
 *
 */

/**
 * @swagger
 * tags:
 *  name: Type
 *  description: API endpoints para los Tipos de Pokemon
 */

/**
 * @swagger
 * /type:
 *  get:
 *      summary: Obtiene la lista de tipos de Pokemon
 *      description: Obtiene la lista de tipos de Pokemon
 *      tags: [Type]
 *      responses:
 *         200:
 *          description: Lista de tipos de Pokemon
 *
 *          content:
 *             application/json:
 *                 schema:
 *                    type: array
 *                    items:
 *                       $ref: '#/components/schemas/Type'
 *                 example:
 *                    - name: "normal"
 *                      url: "https://pokeapi.co/api/v2/type/1/"
 *                    - name: "fighting"
 *                      url: "https://pokeapi.co/api/v2/type/2/"
 *
 *
 */
routerType.get('/', getTypeListController)
