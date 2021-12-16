import express from 'express'
import { getAuthRoutes } from './authentication'
import { getProductsRoutes } from './products'
import { getUserRoutes } from './user'

function getRoutes() {
  // create a router for all the routes for the app
  const router = express.Router()

  router.use('/products', getProductsRoutes())
  router.use('/auth', getAuthRoutes())
  router.use('/user', getUserRoutes())

  return router
}

export { getRoutes }
