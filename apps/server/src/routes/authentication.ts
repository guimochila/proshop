import express from 'express'
import type { Request, Response } from 'express'
import User from '../models/User'
import { catchErrors } from '../utils/errorHandler'
import { generateToken } from '../utils/tokens'

function getAuthRoutes() {
  const router = express.Router()

  router.post('/login', catchErrors(loginUser))

  return router
}

/* Controllers */
async function loginUser(req: Request, res: Response) {
  const { email, password } = req.body

  const user = await User.findOne({ email })

  if (user && (await user.checkPassword(password))) {
    return res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    })
  }

  res.status(401)
  throw new Error('Invalid email or password')
}

export { getAuthRoutes }
