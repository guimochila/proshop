export default {
  port: process.env.PORT || 4000,
  env: 'development',
  logLevel: 'error',
  host: 'http://localhost',
  db: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/proshop',
  },
};
