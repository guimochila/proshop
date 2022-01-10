import morgan, { StreamOptions } from 'morgan'
import { Logger } from 'winston'
import buildDevLogs from './dev'
import buildProdLogger from './prod'

let logger: Logger

if (process.env.NODE_ENV === 'production') {
  logger = buildProdLogger()
} else {
  logger = buildDevLogs()
}

const stream: StreamOptions = {
  // Use the http severity
  write: (message) => logger.http(message),
}
const httpLogger = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream },
)

export { logger, httpLogger }
