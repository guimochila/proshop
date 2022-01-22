import { ConnectionOptions } from 'typeorm'

const defaultOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['./src/modules/**/typeorm/entities/*.ts'],
}

export default [
  {
    ...defaultOptions,
    migrations: ['./src/shared/typeorm/migrations/*.ts'],
    cli: {
      migrationsDir: './src/shared/typeorm/migrations',
    },
  },
  {
    name: 'seed',
    ...defaultOptions,
    migrations: ['./src/shared/typeorm/seeds/*.ts'],
    cli: {
      migrationsDir: './src/shared/typeorm/seeds',
    },
  },
] as ConnectionOptions[]
