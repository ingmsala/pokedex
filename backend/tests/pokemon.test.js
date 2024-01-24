import {app, server} from '../index.js'
import request from 'supertest'

describe('GET /pokemon', () => {
  test('should respond with a 200 status code', async () => {
    const response = await request(app).get('/pokemon').send()
    expect(response.statusCode).toBe(200)
  })

  test('should respond with an array of pokemons', async () => {
    const response = await request(app).get('/pokemon').send()
    expect(response.body.pokemons).toBeInstanceOf(Array)
  })

  test('should respond with an array of pokemon and each pokemon must have a name, statistics, types and image', async () => {
    const response = await request(app).get('/pokemon').send()
    const pokemons = response.body.pokemons
    pokemons.forEach(pokemon => {
      expect(pokemon).toHaveProperty('name')
      expect(pokemon).toHaveProperty('totalStats')
      expect(pokemon).toHaveProperty('types')
      expect(pokemon).toHaveProperty('image')
    })
  })

  it('should respond with a number for totalStats', async () => {
    const response = await request(app).get('/pokemon').send()
    const pokemons = response.body.pokemons

    pokemons.forEach(pokemon => {
        expect(pokemon.totalStats).toBeGreaterThanOrEqual(0)
    })
  })

})

describe('GET /pokemon?searchName=pikachu', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get('/pokemon?searchName=pikachu').send()
      expect(response.statusCode).toBe(200)
    })
  
    test('should respond with an array of pokemons', async () => {
      const response = await request(app).get('/pokemon?searchName=pikachu').send()
      expect(response.body.pokemons).toBeInstanceOf(Array)
    })
  
    test('should respond with an array of pokemon and each pokemon must have a name, statistics, types and image', async () => {
      const response = await request(app).get('/pokemon?searchName=pikachu').send()
      const pokemons = response.body.pokemons
      pokemons.forEach(pokemon => {
        expect(pokemon).toHaveProperty('name')
        expect(pokemon).toHaveProperty('totalStats')
        expect(pokemon).toHaveProperty('types')
        expect(pokemon).toHaveProperty('image')
      })
    })
  
    test('should respond with a number for totalStats', async () => {
      const response = await request(app).get('/pokemon?searchName=pikachu').send()
      const pokemons = response.body.pokemons
  
      pokemons.forEach(pokemon => {
          expect(pokemon.totalStats).toBeGreaterThanOrEqual(0)
      })
  
    })
  })

  describe('GET /pokemon/ditto', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get('/pokemon/ditto').send()
      expect(response.statusCode).toBe(200)
    })
  
    test('should respond with an Object of pokemon', async () => {
      const response = await request(app).get('/pokemon/ditto').send()
      expect(response.body).toBeInstanceOf(Object)
    })
  
    test('should respond with an array of pokemon and each pokemon must have a name, statistics, types, image, stats, abilities', async () => {
      const response = await request(app).get('/pokemon/ditto').send()
      const pokemon = response.body
      expect(pokemon).toHaveProperty('name')
      expect(pokemon).toHaveProperty('totalStats')
      expect(pokemon).toHaveProperty('types')
      expect(pokemon).toHaveProperty('image')
      expect(pokemon).toHaveProperty('stats')
      expect(pokemon).toHaveProperty('abilities')
    })
  
    test('should respond with a number for totalStats equal to 288', async () => {
      const response = await request(app).get('/pokemon/ditto').send()
      const pokemon = response.body
      expect(pokemon.totalStats).toBe(288)
    })
  })

  describe('GET /pokemon/noexist', () => {
    test('should respond with a 404 status code', async () => {
      const response = await request(app).get('/pokemon/disssstto').send()
      expect(response.statusCode).toBe(404)
    })
  })

  describe('GET /pokemon/type/grass', () => {
    test('should respond with a 200 status code', async () => {
      const response = await request(app).get('/pokemon/type/grass').send()
      expect(response.statusCode).toBe(200)
    })
  
    test('should respond with an array of pokemons', async () => {
      const response = await request(app).get('/pokemon/type/grass').send()
      expect(response.body.pokemons).toBeInstanceOf(Array)
    })
  
    test('should respond with an array of pokemon and each pokemon must have a name, statistics, types and image', async () => {
      const response = await request(app).get('/pokemon/type/grass').send()
      const pokemons = response.body.pokemons
      pokemons.forEach(pokemon => {
        expect(pokemon).toHaveProperty('name')
        expect(pokemon).toHaveProperty('totalStats')
        expect(pokemon).toHaveProperty('types')
        expect(pokemon).toHaveProperty('image')
      })
    })
  
    it('should respond with a number for totalStats', async () => {
      const response = await request(app).get('/pokemon/type/grass').send()
      const pokemons = response.body.pokemons
  
      pokemons.forEach(pokemon => {
          expect(pokemon.totalStats).toBeGreaterThanOrEqual(0)
      })
    })
  
  })
  
afterAll(() => {
  server.close()
})

  
