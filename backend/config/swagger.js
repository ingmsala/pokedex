import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const swaggerOptions = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'Pokedex API',
      description: 'API endpoints para obtener datos de Pokemon de la librería <a href="https://pokeapi.co/">https://pokeapi.co/</a>',
      contact: {
        name: 'Mariano Sala',
        email: 'ingmsala@gmail.com'
      },
      version: '1.0.0'
    }
  },
  apis: ['./routes/*.js']
}

const swaggerSpec = swaggerJSDoc(swaggerOptions)
function swaggerDocs (app, port) {
  // Swagger Page
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec))
  // Documentation in JSON format
  app.get('/docs.json', (req, res) => {
    res.setHeader('Content-Type', 'application/json')
    res.send(swaggerSpec)
  })
}

export default swaggerDocs
