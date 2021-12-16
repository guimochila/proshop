import express from 'express'
import type { Request, Response } from 'express'
import { catchErrors } from '../utils/errorHandler'
import { isLoggedInMiddleware } from '../utils/middlewares/authentication'

function getUserRoutes() {
  const router = express.Router()

  router.get('/account', isLoggedInMiddleware, catchErrors(getUserProfile))

  return router
}

/* Controllers */
async function getUserProfile(req: Request, res: Response) {
  res.send('Success')
}

export { getUserRoutes }
