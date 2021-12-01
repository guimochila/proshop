import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin user',
    email: 'admin@google.com',
    password: bcrypt.hashSync('123456'),
    isAdmin: true,
  },
  {
    name: 'React Engineer',
    email: 'react@facebook.com',
    password: bcrypt.hashSync('123456'),
  },
  {
    name: 'Node Engineer',
    email: 'engineer@google.com',
    password: bcrypt.hashSync('123456'),
  },
];

export { users };
