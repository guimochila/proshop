import config from 'config';
import morgan, { StreamOptions } from 'morgan';
import { Logger } from 'winston';
import buildDevLogs from './dev';
import buildProdLogger from './prod';

let logger: Logger;

const env = config.get<string>('env');

if (env === 'development') {
  logger = buildDevLogs();
} else {
  logger = buildProdLogger();
}

const stream: StreamOptions = {
  // Use the http severity
  write: (message) => logger.http(message),
};
const httpLogger = morgan(
  ':method :url :status :res[content-length] - :response-time ms',
  { stream },
);

export { logger, httpLogger };
