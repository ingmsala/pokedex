import https from 'https'
import { POKEAPI_BASE_URL, POKEAPI_PATH } from '../static/constants.js'

export const makeRequest = (path, method = 'GET') => {
  return new Promise((resolve, reject) => {
    const options = {
      hostname: POKEAPI_BASE_URL,
      path: `${POKEAPI_PATH}${path}`,
      method
    }

    const req = https.request(options, (res) => {
      let body = ''

      res.on('data', (chunk) => {
        body += chunk.toString()
      })

      res.on('end', () => {
        try {
          const jsonData = JSON.parse(body)
          resolve(jsonData)
        } catch (parseError) {
          reject(parseError)
        }
      })
    })

    req.on('error', (error) => {
      reject(error)
    })

    req.end()
  })
}
