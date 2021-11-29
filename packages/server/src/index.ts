import { createServer } from 'http';
import config from 'config';
import app from './app';
import { logger } from './utils/logger';

const PORT = config.get('port');
const HOST = config.get('host');

const server = createServer(app);

server.listen(PORT, () => logger.info(`Server started at: ${HOST}:${PORT}`));

/* Unhandled Rejection and Expection */
process.on('uncaughtException', (error) => {
  console.log(`
  Uncaught exception: ${error.name} ${error.message}, ${error.stack}, shutting down
  `);
  process.exit(1);
});

process.on('unhandledRejection', (error: Error) => {
  console.log(
    `Unhandled Rejection: ${error.name} ${error.message}, shutting down...`,
  );
  server.close(() => {
    process.exit(1);
  });
});
