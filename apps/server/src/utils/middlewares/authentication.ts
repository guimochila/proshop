import jwt from 'jsonwebtoken'
import type { Response, Request, NextFunction } from 'express'
import User from '../../models/User'
import { catchErrors } from '../errorHandler'
import config from 'config'

const jwtSecret = config.get<string>('secrets.jwt')

interface IDecodedToken {
  id: string
}

async function isLoggedIn(req: Request, res: Response, next: NextFunction) {
  const isHeaderAuth =
    req.headers.authorization && req.headers.authorization.startsWith('Bearer')

  if (!isHeaderAuth) {
    res.status(401)
    throw new Error('Not authorized.')
  }

  try {
    const token = req.headers.authorization?.split(' ')[1] ?? ''
    const decodedToken = jwt.verify(token, jwtSecret) as IDecodedToken
    req.user = await User.findById(decodedToken.id).select('-password')
  } catch (error) {
    res.status(401)
    throw new Error('Not authorized.')
  } finally {
    next()
  }
}

const isLoggedInMddleware = catchErrors(isLoggedIn)

export { isLoggedInMddleware }
