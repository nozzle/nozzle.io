import express from 'express'
import next from 'next'
//
import routes from './routes'

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handler = routes.getRequestHandler(app)
;(async () => {
  await app.prepare()
  const server = express()

  server.use(handler)

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})()
