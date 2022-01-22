import { hashSync } from 'bcryptjs'

const password = hashSync('123456')

const users = [
  {
    name: 'Admin user',
    email: 'admin@google.com',
    password,
    isAdmin: true,
  },
  {
    name: 'React Engineer',
    email: 'react@facebook.com',
    password,
  },
  {
    name: 'Node Engineer',
    email: 'engineer@google.com',
    password,
  },
]

export { users }
