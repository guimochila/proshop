export default {
  jwt: {
    secret: process.env.JWT_SECRET || 'SET_A_VALID_TOKEN',
    expiresIn: '1d',
  },
}
