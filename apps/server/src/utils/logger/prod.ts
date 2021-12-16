import { format, createLogger, transports } from 'winston';

const { timestamp, combine, json, errors } = format;

function buildProdLogger() {
  const levels = {
    http: 10,
    debug: 20,
    info: 30,
    warn: 40,
    error: 50,
    fatal: 60,
  };

  return createLogger({
    format: combine(timestamp(), errors({ stack: true }), json()),
    levels,
    transports: [new transports.Console()],
  });
}

export default buildProdLogger;
