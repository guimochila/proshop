import { format, createLogger, transports } from 'winston'
import config from 'config'
const { timestamp, combine, printf, errors } = format

function buildDevLogs() {
  const logFormat = printf(({ level, message, timestamp, stack }) => {
    return `${timestamp} ${level}: ${stack || message}`
  })

  const level = config.get<string>('logLevel')

  const levels = {
    http: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60,
  }

  return createLogger({
    format: combine(
      format.colorize({ all: true }),
      timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
      errors({ stack: true }),
      logFormat,
    ),
    levels,
    transports: [new transports.Console()],
    level: level || 'info',
  })
}

export default buildDevLogs
