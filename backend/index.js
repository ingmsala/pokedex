import express from 'express'
import { config } from 'dotenv'
import { routerPokemon } from './routes/pokemonRoutes.js'
import { routerType } from './routes/typeRoutes.js'
import swaggerDocs from './config/swagger.js'
import { corsMiddleware } from './middlewares/cors.js'

const PORT = process.env.PORT || 3000

const app = express()
app.disable('x-powered-by')

config()

app.use(corsMiddleware())

app.use(express.json())

app.use('/pokemon', routerPokemon)
app.use('/type', routerType)

swaggerDocs(app, PORT)

app.use((req, res) => {
  res.status(404).send('Not found')
})

const server = app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`)
})

export {app, server}
