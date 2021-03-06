import authentication from '@config/authentication'
import AppError from '@shared/errors/AppError'
import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface ITokenPayload {
  iat: number
  exp: number
  sub: string
}

function isAuthenticated(req: Request, res: Response, next: NextFunction) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    throw new AppError('Authorization token is missing', 401)
  }

  const [, token] = authHeader.split(' ')

  try {
    const decodedToken = verify(token, authentication.jwt.secret)
    const { sub } = decodedToken as ITokenPayload

    req.user = {
      id: sub,
    }

    return next()
  } catch (error) {
    throw new AppError('Invalid token authorization', 401)
  }
}

export default isAuthenticated
