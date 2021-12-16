import jwt from 'jsonwebtoken';
import config from 'config';

const jwtSecret = config.get<string>('secrets.jwt');

function generateToken(id: string) {
  return jwt.sign({ id }, jwtSecret, { expiresIn: '30d' });
}

export { generateToken };
