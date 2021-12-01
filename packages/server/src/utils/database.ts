import { connect, connection } from 'mongoose';
import config from 'config';

// Accepting database url for easier testing
function init(url?: string) {
  const databaseUrl = url || config.get<string>('db.url');

  connect(databaseUrl);
  connection.on('error', (error) => {
    throw new Error(`🛑 => ${error.message}`);
  });
}

export { init };
