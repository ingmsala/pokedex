import cors from 'cors'

export const corsMiddleware = () => cors({
  origin: (origin, callback) => {
    if (process.env.NODE_ENV !== 'prod' || !origin) {
      callback(null, true)
    } else {
      const host = origin.split('://')[1]
      const allowedHosts = [process.env.FRONTEND_URL]
      const isAllowed = allowedHosts.includes(host)
      callback(isAllowed ? null : new Error('Not allowed by CORS'))
    }
  }
})
