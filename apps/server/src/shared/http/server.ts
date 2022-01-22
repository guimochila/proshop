import dotenv from 'dotenv'
dotenv.config({ path: `.env.${process.env.NODE_ENV}` })
import { createServer } from 'http'
import '@shared/typeorm'
import app from './app'
import { logger } from './logger'

const server = createServer(app)
const PORT = process.env.PORT

server.listen(PORT, () => logger.info(`🚀 Server started at ${PORT}`))

/* Unhandled Rejection and Expection */
process.on('uncaughtException', (error) => {
  console.log(`
  Uncaught exception: ${error.name} ${error.message}, ${error.stack}, shutting down
  `)
  process.exit(1)
})

process.on('unhandledRejection', (error: Error) => {
  console.log(
    `Unhandled Rejection: ${error.name} ${error.message}, shutting down...`,
  )
  server.close(() => {
    process.exit(1)
  })
})
