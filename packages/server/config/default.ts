export default {
  port: process.env.PORT || 4000,
  env: process.env.NODE_ENV || 'development',
  logLevel: 'error',
  frontendUrl: process.env.FRONTEND_URL || 'http://localhost:3000',
  host: 'http://localhost',
  db: {
    url: process.env.DATABASE_URL || 'mongodb://localhost:27017/proshop',
  },
  secrets: {
    jwt: process.env.JWT_SECRET || 'abc123',
  },
};
